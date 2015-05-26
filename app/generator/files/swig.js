/**
 * Generate files specific to the swig folder
 */

'use strict';

var swigFiles = function swigFiles() {
  if (this.htmlOption === 'swig') {
    this.directory('src/static/swig', 'src');
  }
};

module.exports = swigFiles;
