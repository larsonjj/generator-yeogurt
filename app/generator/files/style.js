/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/default/_styles/main.less', 'src/_styles/main.less');
    if (this.singlePageApplication) {
      this.template('src/default/_styles/index/index.less', 'src/_screens/index/index.less');
    }
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/default/_styles/main.sass', 'src/_styles/main.sass');
      if (this.singlePageApplication) {
        this.template('src/default/_styles/index/index.sass', 'src/_screens/index/index.sass');
      }
    }
    else {
      this.template('src/default/_styles/main.scss', 'src/_styles/main.scss');
      if (this.singlePageApplication) {
        this.template('src/default/_styles/index/index.scss', 'src/_screens/index/index.scss');
      }
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/default/_styles/main.styl', 'src/_styles/main.styl');
    if (this.singlePageApplication) {
      this.template('src/default/_styles/index/index.styl', 'src/_screens/index/index.styl');
    }
  }
};

module.exports = styleFiles;
