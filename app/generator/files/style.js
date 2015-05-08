/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // src/styles

  if (this.useKss) {
    this.template('src/styles/styleguide.md', 'src/_styles/styleguide.md');
  }
  if (this.cssOption === 'less') {
    this.template('src/styles/main.less', 'src/_styles/main.less');
    if (this.singlePageApplication) {
      this.template('src/styles/index/index.less', 'src/_screens/index/index.less');
    }
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/styles/main.sass', 'src/_styles/main.sass');
      if (this.singlePageApplication) {
        this.template('src/styles/index/index.sass', 'src/_screens/index/index.sass');
      }
    }
    else {
      this.template('src/styles/main.scss', 'src/_styles/main.scss');
      if (this.singlePageApplication) {
        this.template('src/styles/index/index.scss', 'src/_screens/index/index.scss');
      }
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/styles/main.styl', 'src/_styles/main.styl');
    if (this.singlePageApplication) {
      this.template('src/styles/index/index.styl', 'src/_screens/index/index.styl');
    }
  }
};

module.exports = styleFiles;
