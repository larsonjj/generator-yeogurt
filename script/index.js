'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;

var ScriptGenerator = module.exports = function ScriptGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.jsOption = fileJSON.jsOption;

    console.log('You called the script subgenerator with the argument ' + this.name + '.');
};

util.inherits(ScriptGenerator, yeoman.generators.NamedBase);

ScriptGenerator.prototype.files = function files() {
    if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
        return;
    }
    if (this.jsOption !== 'None (Vanilla JavaScript)') {
        this.template('script.js', 'client/scripts/modules/' + this._.slugify(this.name.toLowerCase()) + '.js');
        this.template('script-spec.js', 'test/spec/modules/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
    }
    else {
        this.template('script.js', 'client/scripts/' + this._.slugify(this.name.toLowerCase()) + '.js');
        this.template('script-spec.js', 'test/spec/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
    }

};