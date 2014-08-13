'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var ReactGenerator = module.exports = function ReactGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.folder = this.options.folder || '';
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


    console.log('You called the react subgenerator with the argument ' + this.name + '.');
};

util.inherits(ReactGenerator, yeoman.generators.NamedBase);

ReactGenerator.prototype.files = function files() {
    if (this.jsFramework !== 'React') {
        console.log('This subgenerator is only used for React Applications. It seems as though you are not using React');
        console.log('Operation aborted');
    }
    else {
        if (!this.name) {
            console.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('react.js', 'client/scripts/components/' + this.folder + '/' + this._.slugify(this.name.toLowerCase()) + '.jsx');
        this.template('react-spec.js', 'test/spec/components/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
    }

};