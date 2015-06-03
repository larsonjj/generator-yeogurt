/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {

  if (this.useDashboard) {
    this.template('src/docs/dashboard/styles/dashboard.less', 'src/_docs/dashboard/styles/dashboard.less');
    this.template('src/docs/dashboard/styles/module-syntax.less', 'src/_docs/dashboard/styles/module-syntax.less');
    this.template('src/docs/dashboard/scripts/less.js', 'src/_docs/dashboard/scripts/less.js');
    this.template('src/docs/dashboard/scripts/jquery.js', 'src/_docs/dashboard/scripts/jquery.js');
    this.template('src/docs/dashboard/scripts/highlight.js', 'src/_docs/dashboard/scripts/highlight.js');
    this.template('src/docs/dashboard/scripts/main.js', 'src/_docs/dashboard/scripts/main.js');
    this.copy('src/docs/dashboard/template.hbs', 'src/_docs/dashboard/template.hbs');
    this.copy('src/docs/dashboard/module-template.hbs', 'src/_docs/dashboard/module-template.hbs');
    this.copy('src/docs/dashboard/_images/yeogurt-logo.png', 'src/_docs/dashboard/images/yeogurt-logo.png');
  }

};

module.exports = docFiles;
