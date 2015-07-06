/**
 * Generate files specific to the root directory
 */

'use strict';

var rootFiles = function rootFiles() {
  // Create needed Directories

  // root (/)
  this.template('gulpfile.js', 'gulpfile.js');
  this.template('_package.json', 'package.json');
  this.template('yeogurt.conf.js', 'yeogurt.conf.js');
  this.template('README.md', 'README.md');

  if (this.versionControl === 'svn') {
    this.copy('svn-init.sh', 'svn-init.sh');
    this.copy('svn-init.bat', 'svn-init.bat');
  }

  if (this.versionControl === 'git') {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  }
  else if (this.versionControl === 'svn') {
    this.copy('svnignore', '.svnignore');
  }

  this.copy('src/shared/robots.txt', 'src/robots.txt');
  this.copy('src/shared/favicon.ico', 'src/favicon.ico');

  this.copy('editorconfig', '.editorconfig');
  this.template('eslintrc', '.eslintrc');

};

module.exports = rootFiles;
