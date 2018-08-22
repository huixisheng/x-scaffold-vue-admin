<template>
<div class="login-wrap">
  <div class="ms-title">xx系统登录<span style="font-size: 14px;"></span></div>
  <div class="ms-login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px">
      <el-form-item prop="mobile">
        <el-input v-model="loginForm.mobile" placeholder="手机号" :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <div v-if="captchaObj" id="embed-captcha"></div>
        <el-button v-if="!captchaObj" type="text" :loading="true" style="width: 100%;height: 42px;">加载中</el-button>
      </el-form-item>
      <el-row>
        <el-col :span="16">
          <el-form-item prop="smscode">
            <el-input placeholder="验证码" v-model="loginForm.smscode" @keyup.enter.native="submitForm('loginForm')" :maxlength="6"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item style="text-align: center;">
            <el-button type="text" @click="getSmsCode"  :disabled="disabledCodeText">
              <span v-if="disabledCodeText" v-text="codeTime + ' 秒后重试'"></span>
              <span v-if="!disabledCodeText">获取验证码</span>
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm('loginForm')">登 录</el-button>
      </div>
    </el-form>
  </div>
</div>
</template>

<script>
// TODO 提取
import geeTest from 'src/vendors/gt';

// TODO 用户脚手架的屏蔽相关的验证
let isScaffoldDevEnv = false;
if (process.env.NODE_ENV === 'development') {
  isScaffoldDevEnv = true;
}

export default {
  title: '登录',
  hidden: true,
  data() {
    const validateMobile = (rule, value, callback) => {
      if (!/^1[0-9]{10}$/.test(value)) {
        callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    };
    return {
      captchaObj: null,
      codeTime: 60,
      disabledCodeText: false,
      loginForm: {
        mobile: '',
        smscode: '',
      },
      rules: {
        mobile: [
          { validator: validateMobile, trigger: 'blur' },
        ],
        smscode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
    };
  },
  created() {
    this.getGeeTestCaptcha();
  },
  methods: {
    getSmsCode() {
      const that = this;
      if (!/^1[0-9]{10}$/.test(this.loginForm.mobile)) {
        this.$message.error('请输入正确的手机号');
        return;
      }
      if (!this.captchaObj.getValidate() && !isScaffoldDevEnv) {
        this.$message.error('请先完成验证');
        return;
      }
      this.disabledCodeText = true;
      const interval = window.setInterval(function () {
        if (that.codeTime-- <= 1) {
          that.codeTime = 60;
          that.disabledCodeText = false;
          window.clearInterval(interval);
        }
      }, 1000);
      this.$http.run('authLogin', {
        mobile: that.loginForm.mobile,
      }).then(() => {

      }).catch((error) => {
        this.$message.error(error.msg);
      });
    },
    getGeeTestCaptcha() {
      const that = this;
      this.$http.run('authCaptcha', {
        t: (new Date()).getTime(),
      }).then((data) => {
        geeTest({
          width: '100%',
          gt: data.data.gt,
          challenge: data.data.challenge,
          new_captcha: data.data.new_captcha,
          product: 'embed',
          offline: !data.status,
        }, function (captchaObj) {
          that.captchaObj = captchaObj;
          captchaObj.appendTo('#embed-captcha');
        });
      }).catch((error) => {
        this.$message.error(error.msg);
      });
    },
    submitForm(formName) {
      const that = this;
      let geetest;
      try {
        geetest = this.captchaObj.getValidate();
      } catch (error) {
        throw error;
      }
      if (isScaffoldDevEnv) {
        geetest = true;
      }
      const params = Object.assign({
        mobile: this.loginForm.mobile,
        smscode: this.loginForm.smscode,
      }, geetest);
      this.$refs[formName].validate((valid) => {
        if (valid && geetest) {
          this.$http.run('authLogin', params).then(() => {
            this.$router.push({ name: 'index' });
          }).catch((error) => {
            that.captchaObj.reset();
            this.$message.error(error.msg);
          });
          // login(params).then((response) => {
          //   const code = response.data.code;
          //   if (response.data.status === 1) {
          //     this.$router.push({ name: 'index' });
          //   } else {
          //     if (code === 10051) {
          //       that.captchaObj.reset();
          //     }
          //     this.$message.error(response.data.msg);
          //   }
          // });
        }
      });
    },
  },
};
</script>

<style>
body { background-color: #eee; }
</style>
<style scoped>
.ms-title {
  padding: 100px 0 45px;
  text-align: center;
  font-size: 30px;
  color: #22a0ff;
}
.ms-login {
  width: 400px;
  height: 325px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
