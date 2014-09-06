'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FluxGenerator = module.exports = function FluxGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.folder = this.options.folder || '';
    this.jsFramework = fileJSON.jsFramework;
    this.useFlux = fileJSON.useFlux;
    this.testFramework = fileJSON.testFramework;
    this.useTesting = fileJSON.useTesting;

};

util.inherits(FluxGenerator, yeoman.generators.NamedBase);

FluxGenerator.prototype.files = function files() {
    this.log('You called the flux subgenerator with the argument ' + this.name + '.');

    if (this.jsFramework !== 'react') {
        this.log('This subgenerator is only used for React Applications. It seems as though you are not using React');
        this.log('Operation aborted');
    }
    else if (!this.useFlux) {
        this.log('This subgenerator is only used for React Applications using Flux. It seems as though you are not using Flux');
        this.log('Operation aborted');
    }
    else {
        // Create constant, action, and store files
        this.template('constant.js', 'client/scripts/flux/constants/' + this._.slugify(this.name.toLowerCase()) + '.js');
        this.template('action.js', 'client/scripts/flux/actions/' + this._.slugify(this.name.toLowerCase()) + '.js');
        this.template('store.js', 'client/scripts/flux/stores/' + this._.slugify(this.name.toLowerCase()) + '.js');

        if (this.useTesting) {
            this.template('constant-spec.js', 'test/spec/flux/constants/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
            this.template('action-spec.js', 'test/spec/flux/actions/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
            this.template('store-spec.js', 'test/spec/flux/stores/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
        }
    }

};