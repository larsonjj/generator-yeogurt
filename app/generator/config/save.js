/**
 * Save configuration to yo-rc.json file
 */

'use strict';

var saveConfig = function saveConfig() {
  this.config.set('config', this.answers);

  this.config.set('version', this.pkg.version);
  this.config.forceSave();
};

module.exports = saveConfig;
