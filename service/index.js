'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var ServiceGenerator = module.exports = function ServiceGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.projectName = fileJSON.projectName;
    this.jsFramework = fileJSON.jsFramework;
    this.testFramework = fileJSON.testFramework;
    this.useTesting = fileJSON.useTesting;

};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

// Prompts
ServiceGenerator.prototype.ask = function ask() {
    if (this.jsFramework !== 'angular') {
        this.log('This subgenerator is only used for Angular Applications. It seems as though you are not using Angular');
        this.log('Operation aborted');
        this.abort = true;
        return;
    }

    var self = this;
    var done = this.async();
    var prompts = [{
        name: 'serviceFile',
        message: 'Where would you like to create this service?',
        default: 'client/scripts/services'
    }, {
        when: function() {
            return self.useTesting;
        },
        name: 'testFile',
        message: 'Where would you like to create this service\'s test?',
        default: 'test/spec/services'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.serviceFile);
        this.serviceFile = path.join(answers.serviceFile, this._.slugify(this.name.toLowerCase()));

        if (answers.testFile) {
            this.testFile = path.join(answers.testFile, this._.slugify(this.name.toLowerCase()));
        }
        done();
    }.bind(this));
};

ServiceGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }

    this.template('service.js', this.serviceFile + '.js');

    if (this.useTesting) {
        this.template('service.spec.js', this.testFile + '.spec.js');
    }

};
