/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
    // client/styles
    this.mkdir('client/styles');

    if (this.useKss) {
        this.template('client/styles/styleguide.md', 'client/styles/styleguide.md');
    }

    if (this.cssOption !== 'CSS') {
        if (this.cssOption === 'Less') {
            this.template('client/styles/main.less', 'client/styles/main.less');
        }
        if (this.cssOption === 'Sass') {
            this.template('client/styles/main.less', 'client/styles/main.scss');
        }
    }
    else {
        this.template('client/styles/main.css', 'client/styles/main.css');
    }
};

module.exports = styleFiles;