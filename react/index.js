'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ReactGenerator = module.exports = function ReactGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.jsFramework = fileJSON.jsFramework;
    this.testFramework = fileJSON.testFramework;
    this.useJsx = fileJSON.useJsx;
    this.useTesting = fileJSON.useTesting;

};

util.inherits(ReactGenerator, yeoman.generators.NamedBase);

// Prompts
ReactGenerator.prototype.ask = function ask() {
    if (this.jsFramework !== 'react') {
        this.log('This subgenerator is only used for React Applications. It seems as though you are not using React');
        this.log('Operation aborted');
        this.abort = true;
        return;
    }

    var self = this;
    var done = this.async();
    var prompts = [{
        name: 'reactFile',
        message: 'Where would you like to create this react component?',
        default: 'client/scripts/components'
    }, {
        when: function() {
            return self.useTesting;
        },
        name: 'testFile',
        message: 'Where would you like to create this react component\'s test?',
        default: 'test/spec/components'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.reactFile);
        this.reactFile = path.join(answers.reactFile, this._.slugify(this.name.toLowerCase()));

        if (answers.testFile) {
            this.testFile = path.join(answers.testFile, this._.slugify(this.name.toLowerCase()));
        }
        done();
    }.bind(this));
};

ReactGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }

    if (this.useJsx) {
        this.template('react.jsx', this.reactFile + '.jsx');
    }
    else {
        this.template('react.js', this.reactFile + '.js');
    }
    if (this.useTesting) {
        this.template('react.spec.js', this.testFile + '.spec.js');
    }

};
