/**
 * Generate files specific to documentation
 */

'use strict';

var docFiles = function docFiles() {
  this.template('src/shared/_data/README.md', 'src/_data/README.md');
  this.template('src/shared/_modules/README.md', 'src/_modules/README.md');
  this.template('src/shared/_layouts/README.md', 'src/_layouts/README.md');
  this.template('src/shared/_scripts/README.md', 'src/_scripts/README.md');
  this.template('src/shared/_styles/README.md', 'src/_styles/README.md');
  this.template('src/shared/_images/README.md', 'src/_images/README.md');
};

module.exports = docFiles;
