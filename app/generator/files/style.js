/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // src/styles

  if (this.cssOption !== 'css') {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/_styles/styleguide.md');
    }
    if (this.cssOption === 'less') {
      this.template('src/styles/main.less', 'src/_styles/main.less');
      this.template('src/styles/index/index.less', 'src/_screens/index/index.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/styles/main.sass', 'src/_styles/main.sass');
        this.template('src/styles/index/index.sass', 'src/_screens/index/index.sass');
      }
      else {
        this.template('src/styles/main.scss', 'src/_styles/main.scss');
        this.template('src/styles/index/index.scss', 'src/_screens/index/index.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/styles/main.styl', 'src/_styles/main.styl');
      this.template('src/styles/index/index.styl', 'src/_screens/index/index.styl');
    }
  }
  else {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/styles/styleguide.md');
    }
    this.template('src/styles/main.css', 'src/styles/main.css');
    this.template('src/styles/index/index.css', 'src/_screens/index/index.css');
  }
};

module.exports = styleFiles;
