/**
 * Generate files specific to the root directory
 */

'use strict';

var rootFiles = function rootFiles() {
  // Create needed Directories

  // root (/)
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
  this.template('README.md', 'README.md');

  if (this.versionControl === 'svn') {
    this.copy('svn-init.sh', 'svn-init.sh');
    this.copy('svn-init.bat', 'svn-init.bat');
  }

  this.copy('bowerrc', '.bowerrc');
  if (this.versionControl === 'git') {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  } else if (this.versionControl === 'svn') {
    this.copy('svnignore', '.svnignore');
  }

  this.copy('client/robots.txt', 'client/robots.txt');
  this.copy('client/favicon.ico', 'client/favicon.ico');

  this.copy('editorconfig', '.editorconfig');
  this.template('jshintrc', '.jshintrc');

};

module.exports = rootFiles;
