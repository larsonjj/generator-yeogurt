/**
 * Generate files specific to the nunjucks folder
 */

'use strict';

var nunjucksFiles = function nunjucksFiles() {
  if (this.htmlOption === 'nunjucks') {
    this.template('src/static/nunjucks/_layouts/base.nunjucks', 'src/_layouts/base.nunjucks');
    this.template('src/static/nunjucks/_modules/link/link.nunjucks', 'src/_modules/link/link.nunjucks');
    this.template('src/static/nunjucks/index.nunjucks', 'src/index.nunjucks');
    this.template('src/shared/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/shared/_scripts/link/link.js', 'src/_modules/link/link.js');
  }
};

module.exports = nunjucksFiles;
