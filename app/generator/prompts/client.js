/**
 * Create prompts for client info
 */

'use strict';

var clientPrompts = function clientPrompts() {
    if (this.existingConfig) {
        return;
    }

    var cb = this.async();
    var self = this;

    this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

    this.prompt([{
        type: 'confirm',
        name: 'singlePageApplication',
        message: 'Will this be a ' + 'Single Page Application'.blue + '?',
        default: true
    }, {
        when: function(answers) { return !answers.singlePageApplication && !self.serverPrompts.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'What would you like to use to ' + 'write markup'.blue + '?',
        choices: ['Jade', 'Swig', 'HTML'],
        filter: function(val) {
            var filterMap = {
                'Jade': 'jade',
                'Swig': 'swig',
                'HTML': 'html'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return !answers.singlePageApplication && self.serverPrompts.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Swig'],
        filter: function(val) {
            var filterMap = {
                'Jade': 'jade',
                'Swig': 'swig'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.singlePageApplication; },
        type: 'list',
        name: 'jsFramework',
        message: 'Which ' + 'JavaScript framework/library'.blue + ' would you like to use?',
        choices: ['React', 'Backbone'],
        filter: function(val) {
            var filterMap = {
                'React': 'react',
                'Backbone': 'backbone'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return self.serverPrompts.useServer && answers.jsFramework === 'react'; },
        type: 'confirm',
        name: 'useServerTemplates',
        message: 'Would you like to render ' + 'templates on the server'.blue + '?',
        default: true
    }, {
        when: function(answers) {return answers.jsFramework === 'backbone' || false;},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Lo-dash', 'Handlebars', 'Jade'],
        filter: function(val) {
            var filterMap = {
                'Lo-dash': 'lodash',
                'Handlebars': 'handlebars',
                'Jade': 'jade'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.jsFramework !== 'react'; },
        type: 'list',
        name: 'jsOption',
        message: 'Which ' + 'JavaScript module library'.blue + ' would you like to use?',
        choices: ['Browserify', 'RequireJS', 'None'],
        filter: function(val) {
            var filterMap = {
                'Browserify': 'browserify',
                'RequireJS': 'requirejs',
                'None': 'none'
            };

            return filterMap[val];
        }
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'What would you like to use to ' + 'write styles'.blue + '?',
        choices: ['Sass', 'Less', 'CSS'],
        filter: function(val) {
            var filterMap = {
                'Sass': 'sass',
                'Less': 'less',
                'CSS': 'css'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.cssOption === 'sass'; },
        type: 'confirm',
        name: 'useBourbon',
        message: 'Would you like to use the ' + 'Bourbon Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(answers) { return answers.cssOption === 'less'; },
        type: 'confirm',
        name: 'useLesshat',
        message: 'Would you like to use the ' + 'Lesshat Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(answers) { return answers.cssOption === 'sass' || answers.cssOption === 'none'; },
        type: 'list',
        name: 'cssFramework',
        message: 'Which CSS ' + 'framework'.blue + ' would you like to use?',
        choices: ['Bootstrap', 'Foundation', 'None'],
        filter: function(val) {
            var filterMap = {
                'Bootstrap': 'bootstrap',
                'Foundation': 'foundation',
                'None': 'none'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.cssOption === 'less'; },
        type: 'confirm',
        name: 'useBootstrap',
        message: 'Would you like to use the ' + 'Bootstrap'.blue + ' CSS framework?',
        default: true
    }, {
        when: function(answers) { return answers.cssFramework !== 'foundation'; },
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
        when: function() { return !self.serverPrompts.useServer; },
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
        }],
    }], function(answers) {
        this.clientPrompts = answers;

        cb();
    }.bind(this));
};

module.exports = clientPrompts;