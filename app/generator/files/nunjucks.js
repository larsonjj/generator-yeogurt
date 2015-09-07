/**
 * Generate files specific to the nunjucks folder
 */

'use strict';

var nunjucksFiles = function nunjucksFiles() {
  if (this.htmlOption === 'nunjucks') {
    this.template('src/static/nunjucks/_layouts/base.nunjucks', 'src/_layouts/base.nunjucks');
    this.template('src/static/nunjucks/_modules/link/link.nunjucks', 'src/_modules/link/link.nunjucks');
    this.template('src/static/nunjucks/index.nunjucks', 'src/index.nunjucks');
  }
};

module.exports = nunjucksFiles;
