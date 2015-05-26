/**
 * Generate files specific to the angular folder
 */

'use strict';

var ngFiles = function ngFiles() {
  if (this.jsFramework === 'angular') {
    this.directory('src/spa/angular', 'src');
  }
};

module.exports = ngFiles;
