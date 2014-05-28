'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.useTemplate = this.options.template || false;
    this.useDashboard = fileJSON.extras.indexOf('useDashboard') > -1 ? true : false;
    this.structure = fileJSON.structure;
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.jsFramework = fileJSON.jsFramework;
    this.htmlOption = fileJSON.htmlOption;
    this.useBootstrap = fileJSON.extras.indexOf('useBootstrap') > -1 ? true : false;
    this.cssOption = fileJSON.cssOption;
    this.jsOption = fileJSON.jsOption;
    this.testFramework = fileJSON.testFramework;
    this.useGA = fileJSON.useGA;
    this.ieSupport = fileJSON.ieSupport;
    this.useModernizr = fileJSON.extras.indexOf('useModernizr') > -1 ? true : false;
    this.ieSupport = fileJSON.ieSupport;
    this.responsive = fileJSON.responsive;

    this.toTitleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    console.log('You called the component subgenerator with the argument ' + this.name + '.');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
    if (this.jsFramework !== 'Backbone + React') {
        console.log('This subgenerator is only used for React components. It seems as though you are not using React');
        console.log('Operation aborted');
    }
    else {
        if (!this.name) {
            console.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('component.js', 'dev/scripts/components/' + this._.slugify(this.name) + '.jsx');
        this.template('component-spec.js', 'test/spec/components/' + this._.slugify(this.name) + '-spec.js');
    }

};