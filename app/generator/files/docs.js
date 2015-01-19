/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var docFiles = function docFiles() {
  if (this.useKss) {
    this.template('client/docs/styleguide/index.html', 'client/docs/styleguide/index.html');
    this.template('client/docs/styleguide/public/kss.js', 'client/docs/styleguide/public/kss.js');
    this.template('client/docs/styleguide/public/kss.less', 'client/docs/styleguide/public/kss.less');
    this.template('client/docs/shared/scripts/less.js', 'client/docs/styleguide/public/less.js');
    this.template('client/docs/shared/scripts/jquery.js', 'client/docs/styleguide/public/jquery.js');
    this.template('client/docs/styleguide/public/markdown.less', 'client/docs/styleguide/public/markdown.less');
    this.copy('client/docs/styleguide/public/prettify.js', 'client/docs/styleguide/public/prettify.js');
    this.copy('client/images/yeogurt-logo.png', 'client/docs/styleguide/public/images/yeogurt-logo.png');
  }
  if (this.useJsdoc) {
    this.directory('client/docs/api', 'client/docs/api');
    this.template('client/docs/shared/scripts/less.js', 'client/docs/api/theme/static/scripts/less.js');
    this.template('client/docs/shared/scripts/jquery.js', 'client/docs/api/theme/static/scripts/jquery.js');
  }
  if (this.useDashboard) {
    this.template('client/docs/dashboard/styles/dashboard.less', 'client/docs/dashboard/styles/dashboard.less');
    this.template('client/docs/shared/scripts/less.js', 'client/docs/dashboard/scripts/less.js');
    this.template('client/docs/shared/scripts/jquery.js', 'client/docs/dashboard/scripts/jquery.js');
    this.template('client/docs/dashboard/scripts/main.js', 'client/docs/dashboard/scripts/main.js');
    this.copy('client/images/yeogurt-logo.png', 'client/docs/dashboard/images/yeogurt-logo.png');
    this.copy('client/docs/dashboard/template.hbs', 'client/docs/dashboard/template.hbs');
  }
};

module.exports = docFiles;
