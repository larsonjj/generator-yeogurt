/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {

  // if (this.useKss) {
  //   this.template('src/autodocs/styleguide/index.html', 'src/_autodocs/styleguide/index.html');
  //   this.template('src/autodocs/styleguide/public/kss.js', 'src/_autodocs/styleguide/public/kss.js');
  //   this.template('src/autodocs/styleguide/public/kss.less', 'src/_autodocs/styleguide/public/kss.less');
  //   this.template('src/autodocs/shared/scripts/less.js', 'src/_autodocs/styleguide/public/less.js');
  //   this.template('src/autodocs/shared/scripts/jquery.js', 'src/_autodocs/styleguide/public/jquery.js');
  //   this.template('src/autodocs/styleguide/public/markdown.less', 'src/_autodocs/styleguide/public/markdown.less');
  //   this.copy('src/autodocs/styleguide/public/prettify.js', 'src/_autodocs/styleguide/public/prettify.js');
  //   this.copy('src/images/yeogurt-logo.png', 'src/_autodocs/styleguide/public/images/yeogurt-logo.png');
  // }

  // if (this.useJsdoc) {
  //   this.directory('src/autodocs/jsdoc', 'src/_autodocs/jsdoc');
  //   this.template('src/autodocs/shared/scripts/less.js', 'src/_autodocs/jsdoc/theme/static/scripts/less.js');
  //   this.template('src/autodocs/shared/scripts/jquery.js', 'src/_autodocs/jsdoc/theme/static/scripts/jquery.js');
  // }

  // if (this.useDashboard) {
  //   this.template('src/autodocs/dashboard/styles/dashboard.less', 'src/_autodocs/dashboard/styles/dashboard.less');
  //   this.template('src/autodocs/shared/scripts/less.js', 'src/_autodocs/dashboard/scripts/less.js');
  //   this.template('src/autodocs/shared/scripts/jquery.js', 'src/_autodocs/dashboard/scripts/jquery.js');
  //   this.template('src/autodocs/dashboard/scripts/main.js', 'src/_autodocs/dashboard/scripts/main.js');
  //   this.copy('src/images/yeogurt-logo.png', 'src/_autodocs/dashboard/images/yeogurt-logo.png');
  //   this.copy('src/autodocs/dashboard/template.hbs', 'src/_autodocs/dashboard/template.hbs');
  // }
};

module.exports = docFiles;
