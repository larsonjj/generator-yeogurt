/**
 * Generate files specific to the jade folder
 */

'use strict';

var jadeFiles = function jadeFiles() {
  if (this.htmlOption === 'jade') {
    this.directory('src/static/jade', 'src');
  }
};

module.exports = jadeFiles;
