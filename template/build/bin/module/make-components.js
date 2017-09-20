const path = require('path');
const walkSync = require('walk-sync');
const fs = require('fs');
const plusString = require('node-plus-string');
const nunjucks = require('nunjucks');

function init(componentsPath) {

  const directorys = walkSync(componentsPath, { directories: true, globs: ['**/'] });
  const list = [];
  directorys.forEach((value, key) => {
    const sublist = walkSync(path.join(componentsPath, value), { directories: true, globs: ['*.vue'] });
    const componentName = plusString.capitalize(value.replace('/', ''));
    const result = sublist.map((sub) => {
      let subComponentName = plusString.capitalize(sub.replace('.vue', ''))
      let subName = sub.replace('.vue', '');
      return {
        componentName: subComponentName,
        path: path.join(componentsPath, value, sub),
        name: subName,
      };
    });
    const item = {
      path: path.join(componentsPath, value),
      name: value.replace('/', ''),
      componentName,
      list: result
    }
    list.push(item);
  });
  // console.log(JSON.stringify(list));
  list.forEach((value) => {
    const componentIndexPath = path.join(value.path, 'index.js');
    const indexTpl = path.join(__dirname, 'template/index.tpl');
    const componentIndexHtml = nunjucks.render(indexTpl, value);
    fs.writeFileSync(componentIndexPath, componentIndexHtml);
  });

  const packagesPath = path.join(componentsPath, 'packages.js');
  const packagesTpl = path.join(__dirname, 'template/packages.tpl');
  const componentPackagesHtml = nunjucks.render(packagesTpl, { list });
  fs.writeFileSync(packagesPath, componentPackagesHtml);
}


module.exports = init;
