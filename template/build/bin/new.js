#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const path = require('path');

/**
 * Usage
 */
program
  // .usage('<component-folder> [folder-name]')
  .usage('')
  .option('-p, --peppers', 'Add peppers')
  .option('-n, --name', '组件名')
  .option('-c, --clone', '测试')

/**
 * help
 */
program.on('--help', () => {
  console.log('Examples:');
});


function help () {
  program.parse(process.argv)
  if (program.args.length < 1) return program.help()
}
help()

const args = program.args;
const folder = args[0];
const name = program.name;
console.log('args', args);
console.log('folder', folder);
console.log('name', name);
console.log('program.peppers: ', program.peppers);

// single-file-components
// vue new view --folder coupon --single-file EditTry
// vue new component --folder coupon --single-file EditTry
// vue new page
// vue new filter/minin/store/directive
