'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.useTemplate = this.options.template || false;
    this.useDashboard = fileJSON.extras.indexOf('useDashboard') > -1 ? true : false;
    this.structure = fileJSON.structure;
    this.jsTemplate = fileJSON.jsTemplate;
    this.htmlOption = fileJSON.htmlOption;
    this.useBootstrap = fileJSON.extras.indexOf('useBootstrap') > -1 ? true : false;
    this.cssOption = fileJSON.cssOption;
    this.jsOption = fileJSON.jsOption;
    this.useGA = fileJSON.useGA;
    this.ieSupport = fileJSON.ieSupport;
    this.useModernizr = fileJSON.extras.indexOf('useModernizr') > -1 ? true : false;
    this.ieSupport = fileJSON.ieSupport;
    this.responsive = fileJSON.responsive;

    this.toTitleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    console.log('You called the router subgenerator with the argument ' + this.name + '.');
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
    if (this.structure === 'Static Site') {
        console.log('This subgenerator is not available for Static Sites. Please choose another.');
        return;
    }
    else if (this.structure === 'Single Page Application') {
        if (!this.name) {
            console.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('router.js', 'dev/scripts/routers/' + this._.slugify(this.name) + '.js');
        this.template('router-spec.js', 'test/spec/routers/' + this._.slugify(this.name) + '-spec.js');
    }

};