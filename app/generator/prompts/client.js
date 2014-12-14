/**
 * Create prompts for client info
 */

'use strict';

var clientPrompts = function clientPrompts() {
    if (this.existingConfig) {
        return;
    }

    var cb = this.async();

    this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

    this.prompt([{
        type: 'confirm',
        name: 'singlePageApplication',
        message: 'Will this be a ' + 'Single Page Application'.blue + '?',
        default: true
    }, {
        when: function(answers) { return !answers.singlePageApplication; },
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
        when: function(answers) { return answers.jsFramework === 'react'; },
        type: 'confirm',
        name: 'useJsx',
        message: 'Would you like to use ' + 'React\'s JSX syntax'.blue + '?',
        default: true
    }, {
        when: function(answers) { return answers.jsFramework === 'react'; },
        type: 'confirm',
        name: 'useFlux',
        message: 'Would you like to use ' + 'Flux'.blue + ' with your React application?',
        default: true
    }, {
        when: function(answers) {return answers.jsFramework === 'backbone';},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Underscore', 'Handlebars', 'Jade'],
        filter: function(val) {
            var filterMap = {
                'Underscore': 'underscore',
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
        choices: ['Sass', 'Less', 'Stylus', 'CSS'],
        filter: function(val) {
            var filterMap = {
                'Sass': 'sass',
                'Less': 'less',
                'Stylus': 'stylus',
                'CSS': 'css'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.cssOption === 'sass'; },
        type: 'list',
        name: 'sassSyntax',
        message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
        choices: ['Scss', 'Sass'],
        filter: function(val) {
            var filterMap = {
                'Scss': 'scss',
                'Sass': 'sass'
            };

            return filterMap[val];
        }
    }], function(answers) {
        this.clientPrompts = answers;

        cb();
    }.bind(this));
};

module.exports = clientPrompts;
