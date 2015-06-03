/**
 * Generate files specific to the jade folder
 */

'use strict';

var jadeFiles = function jadeFiles() {
  if (this.htmlOption === 'jade') {
    this.template('src/static/jade/_layouts/base.jade', 'src/_layouts/base.jade');
    this.template('src/static/jade/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/static/jade/index.jade', 'src/index.jade');

    if (this.useDashboard) {
      this.template('src/static/jade/index.dash.json', 'src/index.dash.json');
    }
  }
};

module.exports = jadeFiles;
