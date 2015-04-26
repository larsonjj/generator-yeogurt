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
        console.log('\n' + 'Everything looks ready!'.blue +
          ' Get started by running "' + 'grunt serve'.green + '".\n'
        );
      }
    });
  });
};

module.exports = installConfig;
