/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // src/styles

  var stylesFolder = this.singlePageApplication ? '' : '_styles';

  if (this.cssOption !== 'css') {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/' + stylesFolder + '/styleguide.md');
    }
    if (this.cssOption === 'less') {
      this.template('src/styles/main.less', 'src/' + stylesFolder + '/main.less');
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/styles/main.sass', 'src/' + stylesFolder + '/main.sass');
      }
      else {
        this.template('src/styles/main.scss', 'src/' + stylesFolder + '/main.scss');
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/styles/main.styl', 'src/' + stylesFolder + '/main.styl');
    }
  }
  else {
    if (this.useKss) {
      this.template('src/styles/styleguide.md', 'src/' + stylesFolder + '/styleguide.md');
    }
    this.template('src/styles/main.css', 'src/' + stylesFolder + '/main.css');
  }
};

module.exports = styleFiles;
