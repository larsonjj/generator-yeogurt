'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;

    console.log('You called the module subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.files = function files() {
    if (this.name !== "all-modules") {
        this.template('module.jade', 'dev/markup/modules/' + this._.slugify(this.name.toLowerCase()) + '.jade');
    } else {
        console.log('The all-modules file should not be overwritten. Operation aborted.');
    }
};