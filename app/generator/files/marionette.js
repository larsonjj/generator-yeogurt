/**
 * Generate files specific to the marionette folder
 */

'use strict';

var marionetteFiles = function marionetteFiles() {
  if (this.jsFramework === 'marionette') {
    this.directory('src/spa/marionette', 'src');
  }
};

module.exports = marionetteFiles;
