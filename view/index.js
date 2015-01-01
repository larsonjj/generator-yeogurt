/**
 * Sub-generator for creating Backbone Views
 */

'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ViewGenerator = module.exports = function ViewGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.view = this.options.type || 'page';
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

    var self = this;
    var done = this.async();
    var prompts = [{
        name: 'viewFile',
        message: 'Where would you like to create this view?',
        default: 'client/scripts/views'
    },
    {
        name: 'templateFile',
        message: 'Where would you like to create this view\'s template?',
        default: 'client/templates'
    },
    {
        when: function() {
            return self.useTesting;
        },
        name: 'testFile',
        message: 'Where would you like to create this view\'s test?',
        default: 'test/spec/views'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.viewFile);

        this.viewFile = path.join(answers.viewFile, this._.slugify(this.name.toLowerCase()));
        this.templateFile = path.join(answers.templateFile, this._.slugify(this.name.toLowerCase()));
        if (answers.testFile) {
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

    if (this.jsOption === 'none') {
        this.template('js/view.js', this.viewFile + '.js');
        if (this.useTesting) {
            this.template('js/view.spec.js', this.testFile + '.spec.js');
        }
    }
    else if (this.jsOption === 'requirejs') {
        this.template('requirejs/view.js', this.viewFile + '.js');
        if (this.useTesting) {
            this.template('requirejs/view.spec.js', this.testFile + '.spec.js');
        }
    }
    else if (this.jsOption === 'browserify') {
        this.template('browserify/view.js', this.viewFile + '.js');
        if (this.useTesting) {
            this.template('browserify/view.spec.js', this.testFile + '.spec.js');
        }
    }
    else {
        return;
    }

    if (this.jsTemplate === 'underscore') {
        this.template('view.html', this.templateFile + '.jst');
    }
    else if (this.jsTemplate === 'handlebars') {
        this.template('view.html', this.templateFile + '.hbs');
    }
    else if (this.jsTemplate === 'jade') {
        this.template('view.html', this.templateFile + '.jade');
    }

};
