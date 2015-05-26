/**
 * Generate files specific to the react folder
 */

'use strict';

var reactFiles = function reactFiles() {
  if (this.jsFramework === 'react') {
    this.directory('src/spa/react', 'src');
  }
};

module.exports = reactFiles;
