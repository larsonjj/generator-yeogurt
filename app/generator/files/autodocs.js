/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {

  if (this.useKss) {
    this.template('src/autodocs/styleguide/index.html', 'src/autodocs/styleguide/index.html');
    this.template('src/autodocs/styleguide/public/kss.js', 'src/autodocs/styleguide/public/kss.js');
    this.template('src/autodocs/styleguide/public/kss.less', 'src/autodocs/styleguide/public/kss.less');
    this.template('src/autodocs/shared/scripts/less.js', 'src/autodocs/styleguide/public/less.js');
    this.template('src/autodocs/shared/scripts/jquery.js', 'src/autodocs/styleguide/public/jquery.js');
    this.template('src/autodocs/styleguide/public/markdown.less', 'src/autodocs/styleguide/public/markdown.less');
    this.copy('src/autodocs/styleguide/public/prettify.js', 'src/autodocs/styleguide/public/prettify.js');
    this.copy('src/images/yeogurt-logo.png', 'src/autodocs/styleguide/public/images/yeogurt-logo.png');
  }

  if (this.useJsdoc) {
    this.directory('src/autodocs/jsdoc', 'src/autodocs/jsdoc');
    this.template('src/autodocs/shared/scripts/less.js', 'src/autodocs/jsdoc/theme/static/scripts/less.js');
    this.template('src/autodocs/shared/scripts/jquery.js', 'src/autodocs/jsdoc/theme/static/scripts/jquery.js');
  }

  if (this.useDashboard) {
    this.template('src/autodocs/dashboard/styles/dashboard.less', 'src/autodocs/dashboard/styles/dashboard.less');
    this.template('src/autodocs/shared/scripts/less.js', 'src/autodocs/dashboard/scripts/less.js');
    this.template('src/autodocs/shared/scripts/jquery.js', 'src/autodocs/dashboard/scripts/jquery.js');
    this.template('src/autodocs/dashboard/scripts/main.js', 'src/autodocs/dashboard/scripts/main.js');
    this.copy('src/images/yeogurt-logo.png', 'src/autodocs/dashboard/images/yeogurt-logo.png');
    this.copy('src/autodocs/dashboard/template.hbs', 'src/autodocs/dashboard/template.hbs');
  }
};

module.exports = docFiles;
