/**
 * Save configuration to yo-rc.json file
 */

'use strict';

var saveConfig = function saveConfig() {
  // If user chooses to use exsiting yo-rc file, then skip prompts
  if (!this.existingConfig) {
    // Create .yo-rc.json file
    this.config.set('config', this.answers);
  }

  this.config.set('version', this.pkg.version);
  this.config.forceSave();
};

module.exports = saveConfig;
