/**
 * Generate Yeogurt Logo
 */

'use strict';

var clientInfo = function clientInfo() {
    if (this.skipConfig) {
        return;
    }

    var cb = this.async();
    var self = this;

    this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

    this.prompt([{
        type: 'confirm',
        name: 'singlePageApplication',
        message: 'Will this be a ' + 'Backbone Application'.blue + '?',
        default: true
    }, {
        when: function(answers) { return !answers.singlePageApplication && !self.serverInfo.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'What would you like to use to ' + 'write markup'.blue + '?',
        choices: ['Jade', 'Swig', 'HTML']
    }, {
        when: function(answers) { return !answers.singlePageApplication && self.serverInfo.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Swig']
    }, {
        when: function(answers) { return answers.singlePageApplication; },
        type: 'list',
        name: 'jsFramework',
        message: 'Which ' + 'JavaScript framework and/or library'.blue + ' would you like to use?',
        choices: ['Backbone + React', 'Backbone']
    }, {
        when: function(answers) {return answers.jsFramework === 'Backbone' && !self.serverInfo.useServer || false;},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Lo-dash (Underscore)', 'Handlebars', 'Jade']
    }, {
        when: function(answers) {return answers.jsFramework === 'Backbone' && self.serverInfo.useServer || false;},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Handlebars', 'Jade']
    }, {
        when: function(answers) { return !(/React/i).test(answers.jsFramework); },
        type: 'list',
        name: 'jsOption',
        message: 'Which ' + 'JavaScript module library'.blue + ' would you like to use?',
        choices: ['RequireJS', 'Browserify', 'None']
    }, {
        type: 'list',
        name: 'testFramework',
        message: 'Which JavaScript ' + 'testing framework'.blue + ' would you like to use?',
        choices: ['Jasmine', 'Mocha + Chai']
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'What would you like to use to ' + 'write styles'.blue + '?',
        choices: ['Sass', 'Less', 'CSS']
    }, {
        when: function(answers) { return (/Sass/i).test(answers.cssOption); },
        type: 'confirm',
        name: 'useBourbon',
        message: 'Would you like to use the ' + 'Bourbon Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(answers) { return (/Less/i).test(answers.cssOption); },
        type: 'confirm',
        name: 'useLesshat',
        message: 'Would you like to use the ' + 'Lesshat Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(answers) { return (/Sass/i).test(answers.cssOption) || (/None/i).test(answers.cssOption); },
        type: 'list',
        name: 'cssFramework',
        message: 'Which CSS ' + 'framework'.blue + ' would you like to use?',
        choices: ['Bootstrap', 'Foundation', 'None']
    }, {
        when: function(answers) { return (/Less/i).test(answers.cssOption); },
        type: 'confirm',
        name: 'useBootstrap',
        message: 'Would you like to use the ' + 'Bootstrap'.blue + ' CSS framework?',
        default: true
    }, {
        when: function(answers) { return !(/Foundation/i).test(answers.cssFramework); },
        type: 'confirm',
        name: 'ieSupport',
        message: 'Do you need to ' + 'support IE8+'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'useGA',
        message: 'Will you be using ' + 'Google Analytics'.blue + '?',
        default: true
    }, {
        when: function() { return !self.serverInfo.useServer; },
        type: 'confirm',
        name: 'useFTP',
        message: 'Will you be deploying code to an ' + 'FTP server'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'jshint',
        message: 'Would you like to lint your Javascript with ' + 'JSHint'.blue + '?',
        default: true
    }, {
        type: 'checkbox',
        name: 'extras',
        message: 'Select any extras you would like:',
        choices: [{
            name: 'Font Awesome',
            value: 'useFontAwesome',
            checked: true
        },  {
            name: 'Modernizr',
            value: 'useModernizr',
            checked: true
        }]
    }], function(answers) {
        this.clientInfo = answers;

        cb();
    }.bind(this));
};

module.exports = clientInfo;