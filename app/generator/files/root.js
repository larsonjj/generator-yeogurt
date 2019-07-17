/**
 * Generate files specific to the root directory
 */

'use strict';

var rootFiles = function rootFiles() {
  // Create needed Directories

  // root (/)
  this.template('gulpfile.babel.js', 'gulpfile.babel.js');
  this.template('.babelrc', '.babelrc');
  this.template('_package.json', 'package.json');
  this.template('README.md', 'README.md');

  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');

  this.copy('src/shared/robots.txt', 'src/robots.txt');
  this.copy('src/shared/favicon.ico', 'src/favicon.ico');

  this.copy('editorconfig', '.editorconfig');
  this.template('eslintrc', '.eslintrc');

};

module.exports = rootFiles;
