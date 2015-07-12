/**
 * Setup extra generator options
 */

'use strict';

var installConfig = function installConfig() {
  var self = this;

  this.on('end', function() {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install'],
      callback: function() {
        self.log('\n' + 'Everything looks ready!'.blue +
          ' Get started by running "' + 'gulp serve'.green + '".\n'
        );
      }
    });
  });
};

module.exports = installConfig;
