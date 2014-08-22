/**
 * Setup extra generator options
 */

'use strict';

var installConfig = function installConfig() {
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

module.exports = installConfig;