/**
 * Generate files specific to the swig folder
 */

'use strict';

var swigFiles = function swigFiles() {
  if (this.htmlOption === 'swig') {
    this.template('src/static/swig/_layouts/base.swig', 'src/_layouts/base.swig');
    this.template('src/static/swig/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/static/swig/index.swig', 'src/index.swig');

    if (this.useDashboard) {
      this.template('src/static/swig/index.dash.json', 'src/index.dash.json');
    }
  }
};

module.exports = swigFiles;
