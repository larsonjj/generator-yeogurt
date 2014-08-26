'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.view = this.options.type || 'page';
    this.useTemplate = this.options.template || false;
    this.folder = this.options.folder || '';
    this.useDashboard = fileJSON.useDashboard;
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.testFramework = fileJSON.testFramework;
    this.htmlOption = fileJSON.htmlOption;
    this.useServer = fileJSON.useServer;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;

    var getNumberOfPaths = [];
    this.folder.split('/').forEach(function(item) {
        if (item) {
            getNumberOfPaths.push('../');
        }
    });
    this.folderCount = getNumberOfPaths.join('');

    // Remove all leading and trailing slashes in folder path
    this.cleanFolderPath = function(folder) {
        if (folder) {
            var tempArray = [];
            var cleanedStr = folder.replace(/^\/+|\/+$/g, '');
            cleanedStr.split('/').forEach(function(item) {
                if (item) {
                    tempArray.push(item);
                }
            });
            return tempArray.join('/');
        }
        else {
            return '';
        }
    };

};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
    this.log('You called the view subgenerator with the argument ' + this.name + '.');

    var rootPath;
    if (!this.singlePageApplication && this.useServer) {
        rootPath = 'server';
    }
    else {
        rootPath = 'client';
    }

    if (!this.singlePageApplication) {
        if (this.useTemplate && this.view !== 'page') {
            this.log('The template option will be ignored as the type is not "page"');
        }

        if (this.htmlOption === 'jade') {
            if (this.view === 'page') {
                this.template('view.jade', rootPath + '/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.view === 'module') {
                this.template('view.jade', rootPath +'/templates/' + this.cleanFolderPath(this.folder) +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.view === 'layout') {
                this.template('view.jade', rootPath +'/templates/' + this.cleanFolderPath(this.folder) +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (!this.name) {
                this.log('Name cannot be empty.\nOperation aborted.');
            }
            else {
                this.log('Must use a supported type: page, template, module.\nOperation aborted');
            }
        }
        else if (this.htmlOption === 'swig') {
            if (this.view === 'page') {
                this.template('view.swig', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.view === 'module') {
                this.template('view.swig', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.view === 'template') {
                this.template('view.swig', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (!this.name) {
                this.log('Name cannot be empty.\nOperation aborted.');
            }
            else {
                this.log('Must use a supported type: page, template, module.\nOperation aborted');
            }
        }
        else if (this.htmlOption === 'html') {
            this.log('You have chosen to use HTML, so you cannot use this sub-generator.');
            this.log('If you would like to create a new page. Just duplicate/copy your index.html');
            this.log('Operation aborted');
        }
    }
    else if (this.singlePageApplication) {
        if (this.jsTemplate !== 'react') {

            if (!this.name) {
                this.log('Name cannot be empty.\nOperation aborted.');
                return;
            }
            this.template('view.js', rootPath +'/scripts/views/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.js');
            this.template('view-spec.js', 'test/spec/views/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
            if (this.jsTemplate === 'lodash') {
                this.template('view.html', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jst');
            }
            else if (this.jsTemplate === 'handlebars') {
                this.template('view.html', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.hbs');
            }
            else if (this.jsTemplate === 'jade') {
                this.template('view.html', rootPath +'/views/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }

        }
        else {
            this.log('You have chosen to use React, so this subgenerator is not available.');
            this.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            this.log('Operation aborted');
        }
    }
};
