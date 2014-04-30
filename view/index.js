'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.useTemplate = this.options.template || false;
    this.useDashboard = fileJSON.extras.indexOf('useDashboard');
    this.toTitleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
    if (this.useTemplate && this.view !== 'page') {
        console.log('The template option will be ignored as the type is not "page"');
    }

    if (this.view === 'page') {
        this.template('view.jade', 'dev/views/' + this._.slugify(this.name.toLowerCase()) + '.jade');
    }
    else if (this.view === 'component' || this.view === 'template' || this.view === 'helper') {
        this.template('view.jade', 'dev/views/' + this.view +'s/' + this._.slugify(this.name.toLowerCase()) + '.jade');
    }
    else if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
    }
    else {
        console.log('Must use a supported type: page, template, helper, component. Operation aborted');
    }
};