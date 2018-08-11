# x-scaffold-vue-admin

> 根据`vue init webpack`生成的模块修改，支持多页面配置


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

### 项目构建 ###

统一项目路径

``` bash
$ ln -s ~/Mzxd/** ~/ProjectRoot/
```

``` bash
$ npm run build
```

### 项目构建支持生成图表依赖分析 ###

```bash
$ npm run build --report
```

### run unit tests ###

```bash
$ npm run unit
```

### run e2e tests ###

```bash
$ npm run e2e
```

### run all tests
```bash
$ npm test
```


## 问题记录 ##

/Users/huixisheng/x/x-scaffold-vue-webpack/template/node_modules/_webpack@3.6.0@webpack/lib/HotModuleReplacementPlugin.js:59
                    records.chunkModuleIds[chunk.id] = chunk.mapModules(m => m.id);
                                                             ^

TypeError: chunk.mapModules is not a function

使用npm5 安装会报错
- https://github.com/JeffreyWay/laravel-mix/issues/985