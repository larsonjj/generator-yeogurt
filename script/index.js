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

    // Will look for dashes (-) or periods (.) and the following letter.
    // If any are found, it will remove them and replace the following letter with it's uppercase form.
    // ex. two-test.tester => twoTestTester
    this.camelCase = function camelCase(input) {
        input = input.toLowerCase().replace(/-(.)/g, function(match, group1) {
            if (group1) {
                return group1.toUpperCase();
            }
        });

        input = input.toLowerCase().replace(/\.(.)/g, function(match, group1) {
            if (group1) {
                return group1.toUpperCase();
            }
        });

        return input;
    };

    console.log('You called the script subgenerator with the argument ' + this.name + '.');
};

util.inherits(ScriptGenerator, yeoman.generators.NamedBase);

ScriptGenerator.prototype.files = function files() {
    if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
        return;
    }
    if (this.jsOption !== 'None (Vanilla JavaScript)') {
        this.template('script.js', 'dev/scripts/modules/' + this._.slugify(this.name.toLowerCase()) + '.js');
    }
    else {
        this.template('script.js', 'dev/scripts/' + this._.slugify(this.name.toLowerCase()) + '.js');
    }

    this.template('scriptSpec.js', 'test/spec/' + this._.slugify(this.name.toLowerCase()) + 'Spec.js');
};