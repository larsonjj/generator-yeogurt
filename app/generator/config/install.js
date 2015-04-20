/**
 * Setup extra generator options
 */

'use strict';

var installConfig = function installConfig() {

  this.on('end', function() {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install'],
      callback: function() {
        console.log('Everything looks ready! Get started by running "grunt serve".');
      }
    });
  });
};

module.exports = installConfig;
