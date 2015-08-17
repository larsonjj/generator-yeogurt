/**
 * Generate files specific to the styles folder
 */

'use strict';

var docFiles = function docFiles() {
  this.template('src/shared/_data/README.md', 'src/_data/README.md');
  this.template('src/shared/_modules/README.md', 'src/_modules/README.md');
};

module.exports = docFiles;
