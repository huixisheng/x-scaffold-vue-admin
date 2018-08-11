const fs = require('fs');
const path = require('path');
const signale = require('signale');
const IP = require('ip').address();
const configDeploy = require('x-config-deploy');
const pkg = require('../package.json');


function showErrorHint() {
  if (process.env.NODE_ENV === 'development') {
    signale.info('如需配置.env。例如下\nopsBase=http://ykq.example.net\nmzxdBase=http://ykq.example.com');
  }
}

function getEnvConfig(envKey, defaultEnvValue) {
  let envValue = defaultEnvValue;
  if (fs.existsSync('.env')) {
    const result = require('dotenv').config().parsed;
    if (!result[envKey]) {
      showErrorHint();
    } else {
      envValue = result[envKey];
    }
  } else {
    showErrorHint();
  }
  if (!envValue) {
    signale.error('检查配置是否出错');
  }
  return envValue;
}

const qiniuDomain = configDeploy.get('qiniuDeploy.domain');
const publicPath = qiniuDomain + '/' + pkg.name + '/';
// 跟laravel业务相关, Modules下的模块名
const requestAssetsModule = 'OpsV2';


exports.requestAssetsModule = requestAssetsModule;
exports.getEnvConfig = getEnvConfig;
exports.IP = IP;
exports.pkg = pkg;
exports.publicPath = publicPath;