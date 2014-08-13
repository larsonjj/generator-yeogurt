/**
 * Check for existing yo-rc.json configuration file
 */

'use strict';

var configCheck = function configCheck() {
    var cb = this.async();

    if (this.config.get('config')) {
        this.prompt([{
            type: 'confirm',
            name: 'skipConfig',
            message: 'Existing .yo-rc configuration found, would you like to use it?',
            default: true,
        }], function(answers) {
            this.skipConfig = answers.skipConfig;
            cb();
        }.bind(this));
    } else {
        cb();
    }
};

module.exports = configCheck;