'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var deleteFile = require('../helpers/delete-file');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var TemplateGenerator = module.exports = function TemplateGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.delete = this.options.delete || '';
    this.useDashboard = fileJSON.useDashboard;
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.testFramework = fileJSON.testFramework;
    this.htmlOption = fileJSON.htmlOption;
    this.useServer = fileJSON.useServer;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;

};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

// Prompts
TemplateGenerator.prototype.ask = function ask() {

    if (this.singlePageApplication) {
        if (this.jsTemplate === 'react') {
            this.log('You have chosen to use React, so this subgenerator is not available.');
            this.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            this.log('Operation aborted');
            this.abort = true;
            return;
        }
    }

    var self = this;
    var createOrDelete = this.delete ? 'delete' : 'create';
    var rootPath;
    if (!this.singlePageApplication && this.useServer) {
        rootPath = 'server';
    }
    else {
        rootPath = 'client';
    }

    var done = this.async();
    var prompts = [{
        when: function() {
            return self.htmlOption === 'jade' || self.htmlOption === 'swig';
        },
        type: 'list',
        name: 'type',
        message: 'What type of template do you want to create?',
        choices: ['Page', 'Layout', 'Module'],
        filter: function(val) {
            var filterMap = {
                'Page': 'page',
                'Layout': 'layout',
                'Module': 'module'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) {
            return answers.type === 'page';
        },
        name: 'useLayout',
        message: 'What template you you like to extend from?',
        default: 'layouts/base'
    }, {
        when: function(answers) {
            return answers.type === 'module';
        },
        name: 'templateFile',
        message: 'Where would you like to ' + createOrDelete + ' this template?',
        default: rootPath + '/templates/modules'
    }, {
        when: function(answers) {
            return answers.type === 'layout';
        },
        name: 'templateFile',
        message: 'Where would you like to ' + createOrDelete + ' this template?',
        default: rootPath + '/templates/layouts'
    }, {
        when: function() {
            return self.singlePageApplication;
        },
        name: 'templateFile',
        message: 'Where would you like to ' + createOrDelete + ' this template?',
        default: rootPath + '/templates'
    }];

    this.prompt(prompts, function(answers) {
        if (answers.type === 'page') {
            answers.templateFile = rootPath + '/templates';
        }

        // Get root directory
        this.rootDir = getRootDir(answers.templateFile);

        this.type = answers.type;
        this.useLayout = answers.useLayout || false;
        this.templateFile = path.join(answers.templateFile, this._.slugify(this.name.toLowerCase()));
        done();
    }.bind(this));
};

// Create Files
TemplateGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }

    if (this.singlePageApplication) {
        if (!this.delete) {
            if (this.jsTemplate === 'lodash') {
                this.template('template.html', this.templateFile + '.jst');
            }
            else if (this.jsTemplate === 'handlebars') {
                this.template('template.html', this.templateFile + '.hbs');
            }
            else if (this.jsTemplate === 'jade') {
                this.template('template.html', this.templateFile + '.jade');
            }
        }
        else {
            if (this.jsTemplate === 'lodash') {
                deleteFile(this.templateFile + '.jst', this);
            }
            else if (this.jsTemplate === 'handlebars') {
                deleteFile(this.templateFile + '.hbs', this);
            }
            else if (this.jsTemplate === 'jade') {
                deleteFile(this.templateFile + '.jade', this);
            }
        }
    }
    else {
        if (this.useLayout && this.type !== 'page') {
            this.log('The template option will be ignored as the type is not "page"');
        }

        if (this.htmlOption === 'jade') {
            if (!this.delete) {
                if (this.type === 'page') {
                    this.template('template.jade', this.templateFile + '.jade');
                }
                else if (this.type === 'module') {
                    this.template('template.jade', this.templateFile + '.jade');
                }
                else if (this.type === 'layout') {
                    this.template('template.jade', this.templateFile + '.jade');
                }
            }
            else {
                if (this.type === 'page') {
                    deleteFile(this.templateFile + '.jade', this);
                }
                else if (this.type === 'module') {
                    deleteFile(this.templateFile + '.jade', this);
                }
                else if (this.type === 'layout') {
                    deleteFile(this.templateFile + '.jade', this);
                }
            }
        }
        else if (this.htmlOption === 'swig') {
            if (!this.delete) {
                if (this.type === 'page') {
                    this.template('template.swig', this.templateFile + '.swig');
                }
                else if (this.type === 'module') {
                    this.template('template.swig', this.templateFile + '.swig');
                }
                else if (this.type === 'layout') {
                    this.template('template.swig', this.templateFile + '.swig');
                }
            }
            else {
                if (this.type === 'page') {
                    deleteFile(this.templateFile + '.swig', this);
                }
                else if (this.type === 'module') {
                    deleteFile(this.templateFile + '.swig', this);
                }
                else if (this.type === 'layout') {
                    deleteFile(this.templateFile + '.swig', this);
                }
            }
        }
    }
};
