/**
 * Save configuration to yo-rc.json file
 */

'use strict';

var saveConfig = function saveConfig() {
    // If user chooses to use exsiting yo-rc file, then skip prompts
    if (!this.existingConfig) {
        if (this.answers.dbUser === 'nouser') { this.answers.dbUser = ''; }
        if (this.answers.dbPass === 'nopass') { this.answers.dbPass = ''; }
        if (this.answers.ftpUser === 'nouser') { this.answers.ftpUser = ''; }
        if (this.answers.ftpPass === 'nopass') { this.answers.ftpPass = ''; }
        // Create .yo-rc.json file
        this.config.set('config', this.answers);
        this.config.set('version', this.pkg.version);
        this.config.forceSave();
    }
};

module.exports = saveConfig;
