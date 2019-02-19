/**
 * Generate files specific to the jade folder
 */

'use strict';

var pugFiles = function pugFiles() {
  if (this.htmlOption === 'pug') {
    this.template('src/static/pug/_layouts/base.pug', 'src/_layouts/base.pug');
    this.template('src/static/pug/_modules/link/link.pug', 'src/_modules/link/link.pug');
    this.template('src/static/pug/index.pug', 'src/index.pug');
  }
};

module.exports = pugFiles;
