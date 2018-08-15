# x-scaffold-vue-admin

> 根据`vue init webpack`生成的模块修改用于后台项目构建


## 安装 ##
### vue/cli  ###

``` shell
$ sudo npm install -g @vue/cli
$ sudo npm install -g @vue/cli-service
$ sudo sudo npm install -g @vue/cli-init
```

### 项目初始化 ###

``` bash
$ vue init huixisheng/x-scaffold-vue-admin my-project
```

### 安装依赖 ###

``` bash
$ npm install
```

**ps:** 如果出现权限问题，加`sudo`

### 预览 ###

``` bash
$ npm run dev
```

## 配置 ##
### 配置资源文件上传七牛 ###
> [配置参考](https://github.com/huixisheng/x-config-deploy)，可以是.env或者.xconfig.js

```
module.exports = {
  "qiniuDeploy": {
    "accessKey": "",
    "secretKey": "",
    "bucket": "",
    "domain": "",
  },
  // 跟laravel业务相关, Modules下的模块名
  laravelModuleName=OpsV2
}
```

## 参考以下项目
- https://github.com/vuejs-templates/webpack
- https://github.com/PanJiaChen/vue-element-admin
