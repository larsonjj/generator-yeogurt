/**
 * Generate files specific to the jade folder
 */

'use strict';

var jadeFiles = function jadeFiles() {
  if (this.htmlOption === 'jade') {
    this.template('src/static/jade/_layouts/base.jade', 'src/_layouts/base.jade');
    this.template('src/static/jade/index.jade', 'src/index.jade');
    this.template('src/shared/_scripts/main.js', 'src/_scripts/main.js');
  }
};

module.exports = jadeFiles;
