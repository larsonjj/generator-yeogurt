'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.type = this.options.type || 'page';
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

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
    this.log('You called the view subgenerator with the argument ' + this.name + '.');

    var rootPath;
    if (!this.singlePageApplication && this.useServer) {
        rootPath = 'server';
    }
    else {
        rootPath = 'client';
    }

    if (this.singlePageApplication) {
        if (this.jsTemplate !== 'react') {

            if (this.jsTemplate === 'lodash') {
                this.template('template.html', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jst');
            }
            else if (this.jsTemplate === 'handlebars') {
                this.template('template.html', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.hbs');
            }
            else if (this.jsTemplate === 'jade') {
                this.template('template.html', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }

        }
        else {
            this.log('You have chosen to use React, so this subgenerator is not available.');
            this.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            this.log('Operation aborted');
        }
    }
    else {
        if (this.useTemplate && this.type !== 'page') {
            this.log('The template option will be ignored as the type is not "page"');
        }

        if (this.htmlOption === 'jade') {
            if (this.type === 'page') {
                this.template('template.jade', rootPath + '/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.type === 'module') {
                this.template('template.jade', rootPath +'/templates/modules/' + this.cleanFolderPath(this.folder) +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.type === 'layout') {
                this.template('template.jade', rootPath +'/templates/layouts/' + this.cleanFolderPath(this.folder) +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else {
                this.log('Must use a supported type: page, template, module.\nOperation aborted');
            }
        }
        else if (this.htmlOption === 'swig') {
            if (this.type === 'page') {
                this.template('template.swig', rootPath +'/templates/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.type === 'module') {
                this.template('template.swig', rootPath +'/templates/modules/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.type === 'layout') {
                this.template('template.swig', rootPath +'/templates/layouts/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else {
                this.log('Must use a supported type: page, template, module.\nOperation aborted');
            }
        }
        else if (this.htmlOption === 'html') {
            this.log('You have chosen to use HTML, so you cannot use this sub-generator.');
            this.log('If you would like to create a new page. Just duplicate/copy your index.html.');
            this.log('Operation aborted.');
        }
    }
};
