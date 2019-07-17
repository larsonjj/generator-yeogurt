/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  this.template('src/shared/_scripts/main.js', 'src/_scripts/main.js');
  this.template('src/shared/_modules/link/link.js', 'src/_modules/link/link.js');
};

module.exports = styleFiles;
