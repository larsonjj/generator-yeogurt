/**
 * Sub-generator for creating Backbone Views
 */

'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var deleteFile = require('../helpers/delete-file');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ViewGenerator = module.exports = function ViewGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.view = this.options.type || 'page';
    this.delete = this.options.delete || '';
    this.useDashboard = fileJSON.useDashboard;
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.useTesting = fileJSON.useTesting;
    this.testFramework = fileJSON.testFramework;
    this.htmlOption = fileJSON.htmlOption;
    this.useServer = fileJSON.useServer;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;

    this.path = path;
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

// Prompts
ViewGenerator.prototype.ask = function ask() {
    if (this.singlePageApplication) {
        if (this.jsTemplate === 'react') {
            this.log('You have chosen to use React, so this subgenerator is not available.');
            this.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            this.log('Operation aborted');
            this.abort = true;
            return;
        }
    }
    else {
        this.log('You have chosen to create a static site, so this subgenerator is not available.');
        this.log('If you were trying to create a new template, try the following: yo yeogurt:template mytemplate');
        this.log('Operation aborted');
        this.abort = true;
        return;
    }

    var createOrDelete = this.delete ? 'delete' : 'create';

    var self = this;
    var done = this.async();
    var prompts = [{
        name: 'viewFile',
        message: 'Where would you like to ' + createOrDelete + ' this view?',
        default: 'client/scripts/views'
    },
    {
        name: 'templateFile',
        message: 'Where would you like to ' + createOrDelete + ' this view\'s template?',
        default: 'client/templates'
    },
    {
        when: function() {
            return self.useTesting;
        },
        name: 'testFile',
        message: 'Where would you like to ' + createOrDelete + ' this view\'s test?',
        default: 'test/spec/views'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.testFile);

        this.viewFile = path.join(answers.viewFile, this._.slugify(this.name.toLowerCase()));
        this.templateFile = path.join(answers.templateFile, this._.slugify(this.name.toLowerCase()));
        if (this.useTesting) {
            this.testFile = path.join(answers.testFile, this._.slugify(this.name.toLowerCase()));
        }
        done();
    }.bind(this));
};

// Create Files
ViewGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }
    if (!this.delete) {
        this.template('view.js', this.viewFile + '.js');
        if (this.useTesting) {
            this.template('view-spec.js', this.testFile + '-spec.js');
        }
        if (this.jsTemplate === 'lodash') {
            this.template('view.html', this.templateFile + '.jst');
        }
        else if (this.jsTemplate === 'handlebars') {
            this.template('view.html', this.templateFile + '.hbs');
        }
        else if (this.jsTemplate === 'jade') {
            this.template('view.html', this.templateFile + '.jade');
        }
    }
    else {
        deleteFile(this.viewFile + '.js', this);
        if (this.useTesting) {
            deleteFile(this.testFile + '-spec.js', this);
        }
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
};
