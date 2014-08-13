/**
 * Generate files specific to the styleguide and JS api documentation
 */

'use strict';

var imageFiles = function imageFiles() {
    if (this.useKss) {
        this.mkdir('client/docs');
        this.mkdir('client/docs/styleguide');
        this.template('client/docs/styleguide/index.html', 'client/docs/styleguide/index.html');
        this.template('client/docs/styleguide/public/kss.js', 'client/docs/styleguide/public/kss.js');
        this.template('client/docs/styleguide/public/kss.less', 'client/docs/styleguide/public/kss.less');
        this.template('client/docs/styleguide/public/less.js', 'client/docs/styleguide/public/less.js');
        this.template('client/docs/styleguide/public/markdown.less', 'client/docs/styleguide/public/markdown.less');
        this.copy('client/docs/styleguide/public/prettify.js', 'client/docs/styleguide/public/prettify.js');
        this.copy('client/docs/styleguide/public/classlist-shim.js', 'client/docs/styleguide/public/classlist-shim.js');
        this.copy('client/images/yeogurt-logo.png', 'client/docs/styleguide/public/images/yeogurt-logo.png');
    }
    if (this.useJsdoc) {
        this.directory('client/docs/api', 'client/docs/api');
    }
};

module.exports = imageFiles;