/**
 * Generate Yeogurt Logo
 */

'use strict';

var documentationInfo = function documentationInfo() {
    if (this.skipConfig) {
        return;
    }

    var cb = this.async();

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
    },], function(answers) {
        this.documentation = answers;

        cb();
    }.bind(this));
};

module.exports = documentationInfo;