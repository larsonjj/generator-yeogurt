/**
 * Setup extra generator options
 */

'use strict';

var installConfig = function installConfig() {

    this.on('end', function() {
        this.installDependencies({ skipInstall: this.options['skip-install'] });
    });
};

module.exports = installConfig;
