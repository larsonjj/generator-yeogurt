'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;

    console.log('You called the component subgenerator with the argument ' + this.name + '.');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
    if (this.name !== "all-components") {
        this.template('component.jade', 'dev/markup/components/' + this._.slugify(this.name.toLowerCase()) + '.jade');
    } else {
        console.log('The all-components file should not be overwritten. Operation aborted.');
    }
};