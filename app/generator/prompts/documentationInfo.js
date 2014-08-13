/**
 * Generate prompts for automated documentation info
 */

'use strict';

var documentationInfo = function documentationInfo() {
    if (this.skipConfig) {
        return;
    }

    var cb = this.async();
    var self = this;

    this.log('\n---- ' + 'Documentation'.red.underline + ' ----\n');

    this.prompt([{
        type: 'confirm',
        name: 'useJsdoc',
        message: 'Would you like to document your Javascript with ' + 'JSDoc'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'useKss',
        message: 'Would you like to generate a styleguide with ' + 'KSS (Knyle Style Sheets)'.blue + '?',
        default: true
    }, {
        when: function() {return !self.serverInfo.useServer;},
        type: 'confirm',
        name: 'useDashboard',
        message: 'Would you like to ' + 'generate a dashboard'.blue + ' for your site/app',
        default: false
    }], function(answers) {
        this.documentation = answers;

        cb();
    }.bind(this));
};

module.exports = documentationInfo;