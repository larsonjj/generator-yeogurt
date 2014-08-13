/**
 * Setup extra generator options
 */

'use strict';

var handleInstall = function handleInstall() {
    if (this.options['skip-install']) {
        return;
    }

    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};

module.exports = handleInstall;