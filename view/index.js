'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
// var generatorUtils = require('../modules/util.js');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.noImport = this.options.noImport || false;
    this.useTemplate = this.options.template || false;
    this.folder = this.options.folder || '';
    this.useDashboard = fileJSON.useDashboard
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.htmlOption = fileJSON.htmlOption;
    this.useBootstrap = fileJSON.extras.indexOf('useBootstrap') > -1 ? true : false;
    this.cssOption = fileJSON.cssOption;
    this.useServer = fileJSON.useServer;
    this.jsOption = fileJSON.jsOption;
    this.useGA = fileJSON.useGA;
    this.ieSupport = fileJSON.ieSupport;
    this.useModernizr = fileJSON.extras.indexOf('useModernizr') > -1 ? true : false;
    this.ieSupport = fileJSON.ieSupport;
    this.responsive = fileJSON.responsive;
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

    console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
    var rootPath;
    if (!this.singlePageApplication && this.useServer) {
        rootPath = 'server';
    }
    else {
        rootPath = 'client';
    }

    if (!this.singlePageApplication) {
        if (this.useTemplate && this.view !== 'page') {
            console.log('The template option will be ignored as the type is not "page"');
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
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, module. Operation aborted');
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
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, module. Operation aborted');
            }
        }
        else if (this.htmlOption === 'html') {
            console.log('You have chosen to use HTML, so you cannot use this sub-generator.');
            console.log('If you would like to create a new page. Just duplicate your index.html');
            console.log('Operation aborted');
        }
    }
    else if (this.singlePageApplication) {
        if (this.jsTemplate !== 'react') {

            if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
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
            console.log('You have chosen to use React, so this subgenerator is not available to use.');
            console.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            console.log('Operation aborted');
        }
    }
};
