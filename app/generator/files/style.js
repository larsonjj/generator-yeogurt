/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/shared/_styles/main.less', 'src/_styles/main.less');
    this.template('src/shared/_styles/link/link.less', 'src/_modules/link/link.less');
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/shared/_styles/main.sass', 'src/_styles/main.sass');
      this.template('src/shared/_styles/link/link.sass', 'src/_modules/link/link.sass');
    }
    else {
      this.template('src/shared/_styles/main.scss', 'src/_styles/main.scss');
      this.template('src/shared/_styles/link/link.scss', 'src/_modules/link/link.scss');
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/shared/_styles/main.styl', 'src/_styles/main.styl');
    this.template('src/shared/_styles/link/link.styl', 'src/_modules/link/link.styl');
  }
};

module.exports = styleFiles;
