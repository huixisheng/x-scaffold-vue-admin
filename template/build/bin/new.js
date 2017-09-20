#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const plusString = require('node-plus-string');
const makeComponents = require('./module/make-components');
const nunjucks = require('nunjucks');
const CMD_ARRAY = ['view', 'component', 'page', 'filter'];
const CMD_FOLDER = {
  'view': 'views',
  'component': 'components'
};
/**
 * Usage
 */
program
  // .usage('<component-folder> [folder-name]')
  .usage('<command> [options]')
  // .command('view', '创建入口的view模板')
  // .command('component', 'create common component')
  // .option('-n, --name', '组件名') // name 为[关键字]，设置为方法
  .option('-f, --file [value]', 'Vue组件名')
  .option('-p, --path [value]', 'Vue组件路径')
  .parse(process.argv);

/**
 * help
 */
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  // single-file-components
  // vue new view --folder coupon --single-file EditTry
  // vue new component --folder coupon --single-file EditTry
  // vue new page
  // vue new filter/minin/store/directive
});


const args = program.args;
if (program.args.length < 1) {
  return program.help();
}
const doCommand = args[0];
if (CMD_ARRAY.indexOf(doCommand) < 0) {
  console.log(chalk.red('输入命令有误'));
  return program.help();
}

const componentFile = program.file;
const componentFolder = program.path;
const componentName = plusString.capitalize(componentFile);


const componentPath = path.join(__dirname, `../../src/${CMD_FOLDER[doCommand]}/${createComponentFolder(componentFolder)}${componentFile}.vue`);

if (fs.existsSync(componentPath)) {
  console.error('组件已经存在');
  process.exit(1);
}

const tplPath = path.join(__dirname, `template/${doCommand}.tpl`);
const tplComponent = fs.readFileSync(tplPath, 'utf-8');


fse.outputFile(componentPath, tplComponent, (error) => {
  if (error) {
    console.error('写入失败');
    return;
  }
  if (doCommand === 'view') {
    const routerPath = path.join(__dirname, '../../src/routers/index.js');
    const routerContent = fs.readFileSync(routerPath, 'utf-8');
    const routerContentAfter = routerContent.replace('Vue.use(Router);', function() {
      const insertImport = `const ${componentFolder}${plusString.capitalize(componentFile)} = () => import('views/${componentFolder}/${componentFile}');\n\nVue.use(Router);`;
      console.log(insertImport);
      return insertImport;
    });
    fs.writeFileSync(routerPath, routerContentAfter, 'utf-8');
  } else if (doCommand) {
    const componentsPath = path.join(__dirname, '../../src/components');
    makeComponents(componentsPath);
  }
  console.log('创建成功');
});


function createComponentFolder(folder) {
  if (folder) {
    return folder + '/';
  }
  return '';
}
