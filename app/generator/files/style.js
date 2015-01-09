/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
    // client/styles

    if (this.useKss) {
        this.template('client/styles/styleguide.md', 'client/styles/styleguide.md');
    }

    if (this.cssOption !== 'css') {
        if (this.cssOption === 'less') {
            this.template('client/styles/main.less', 'client/styles/main.less');
        }
        if (this.cssOption === 'sass') {
            if (this.sassSyntax === 'sass') {
                this.template('client/styles/main.sass', 'client/styles/main.sass');
            }
            else {
                this.template('client/styles/main.less', 'client/styles/main.scss');
            }
        }
        if (this.cssOption === 'stylus') {
            this.template('client/styles/main.styl', 'client/styles/main.styl');
        }
    }
    else {
        this.template('client/styles/main.css', 'client/styles/main.css');
    }
};

module.exports = styleFiles;
