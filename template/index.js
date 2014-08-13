'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
// var generatorUtils = require('../modules/util.js');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.noImport = this.options.noImport || false;
    this.useTemplate = this.options.template || false;
    this.folder = this.options.folder || '';
    this.useDashboard = fileJSON.extras.indexOf('useDashboard') > -1 ? true : false;
    this.structure = fileJSON.structure;
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


    console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
    var rootPath;
    if (this.structure !== 'Single Page Application') {
        rootPath = this.useServer ? 'server' : rootPath +'';
    }
    else {
        rootPath = 'client';
    }

    if (!this.singlePageApplication) {
        if (this.useTemplate && this.view !== 'page') {
            console.log('The template option will be ignored as the type is not "page"');
        }

        if (this.htmlOption === 'Jade') {
            if (this.view === 'page') {
                this.template('view.jade', rootPath + '/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.view === 'module') {
                this.template('view.jade', rootPath +'/templates/' + this.folder +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (this.view === 'layout') {
                this.template('view.jade', rootPath +'/templates/' + this.folder +'/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, module. Operation aborted');
            }
        }
        else if (this.htmlOption === 'Swig') {
            if (this.view === 'page') {
                this.template('view.swig', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.view === 'module') {
                this.template('view.swig', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (this.view === 'template') {
                this.template('view.swig', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, module. Operation aborted');
            }
        }
        else if (this.htmlOption === 'HTML') {
            console.log('You have chosen to use HTML, so you cannot use this sub-generator.');
            console.log('If you would like to create a new page. Just duplicate your index.html');
            console.log('Operation aborted');
        }
    }
    else if (this.singlePageApplication) {
        if (this.jsTemplate !== 'React') {

            if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
                return;
            }
            this.template('view.js', rootPath +'/scripts/views/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.js');
            this.template('view-spec.js', 'test/spec/views/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
            if (this.jsTemplate === 'Lo-dash') {
                this.template('template.html', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.jst');
            }
            else if (this.jsTemplate === 'Handlebars') {
                this.template('template.html', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.hbs');
            }
            else if (this.jsTemplate === 'Jade') {
                this.template('template.html', rootPath +'/templates/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }

        }
        else {
            console.log('You have chosen to use React, so this subgenerator is not available to use.');
            console.log('Try the following to generate a new react component: yo yeogurt:react myreact');
            console.log('Operation aborted');
        }
    }
};
