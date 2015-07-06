/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/shared/_styles/main.less', 'src/_styles/main.less');
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/shared/_styles/main.sass', 'src/_styles/main.sass');
    }
    else {
      this.template('src/shared/_styles/main.scss', 'src/_styles/main.scss');
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/shared/_styles/main.styl', 'src/_styles/main.styl');
  }
};

module.exports = styleFiles;
