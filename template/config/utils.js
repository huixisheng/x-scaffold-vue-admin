const fs = require('fs');
const path = require('path');
const signale = require('signale');
const IP = require('ip').address();
const pkg = require('../package.json');


function showErrorHint() {
  if (process.env.NODE_ENV === 'development') {
    signale.error('如何自定义请配置.env\nopsBase=http://ykq.example.net\nmzxdBase=http://ykq.example.com');
  }
}

function getEnvConfig(envKey, defaultEnvValue) {
  let envValue = defaultEnvValue;
  if (fs.existsSync('.env')) {
    const result = require('dotenv').config().parsed;
    if (!result[envKey]) {
      showErrorHint();
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

const qiniuDomain = 'https://p1.cosmeapp.com';
const qiniuBucket = 'deploy';
const publicPath = qiniuDomain + '/' + pkg.name + '/';


exports.getEnvConfig = getEnvConfig;
exports.IP = IP;
exports.pkg = pkg;
exports.publicPath = publicPath;
exports.qiniuDomain = qiniuDomain;
exports.qiniuBucket = qiniuBucket;