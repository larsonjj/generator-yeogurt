/**
 * Create prompts for client info
 */

'use strict';

var deploymentPrompts = function deploymentPrompts() {
    if (this.existingConfig || this.serverPrompts.useServer) {
        return;
    }

    var cb = this.async();
    var self = this;

    this.log('\n---- ' + 'Deployment'.red.underline + ' ----\n');

    this.prompt([{
        when: function() { return !self.serverPrompts.useServer; },
        type: 'confirm',
        name: 'useFTP',
        message: 'Will you be deploying code to an ' + 'FTP server'.blue + '?',
        default: true
    }], function(answers) {
        this.deploymentPrompts = answers;

        cb();
    }.bind(this));
};

module.exports = deploymentPrompts;