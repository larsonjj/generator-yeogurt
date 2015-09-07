/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.jsPreprocessor === 'none') {
    this.template('src/shared/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/shared/_modules/link/link.js', 'src/_modules/link/link.js');
  }
  else {
    this.template('src/shared/_scripts/main.es6.js', 'src/_scripts/main.js');
    this.template('src/shared/_modules/link/link.es6.js', 'src/_modules/link/link.js');
  }
};

module.exports = styleFiles;
