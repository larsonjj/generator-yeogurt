'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var DirectiveGenerator = module.exports = function DirectiveGenerator() {
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

util.inherits(DirectiveGenerator, yeoman.generators.NamedBase);

// Prompts
DirectiveGenerator.prototype.ask = function ask() {
    if (this.jsFramework !== 'angular') {
        this.log('This subgenerator is only used for Angular Applications. It seems as though you are not using Angular');
        this.log('Operation aborted');
        this.abort = true;
        return;
    }

    var done = this.async();
    var prompts = [{
        name: 'routeFile',
        message: 'Where would you like to create this route?',
        default: 'client/app'
    }, {
        name: 'routeURL',
        message: 'URL of new route?',
        default: '/someurl'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.routeFile);
        this.routeFile = path.join(answers.routeFile, this._.slugify(this.name.toLowerCase()), this._.slugify(this.name.toLowerCase()));
        this.testFile = path.join(answers.routeFile, this._.slugify(this.name.toLowerCase()), this._.slugify(this.name.toLowerCase()));
        this.routeURL = answers.routeURL;
        this.htmlURL = path.join(answers.routeFile.replace('client', ''), this._.slugify(this.name.toLowerCase()), this._.slugify(this.name.toLowerCase())) + '.html';

        done();
    }.bind(this));
};

DirectiveGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }

    this.template('route.js', this.routeFile + '.js');
    this.template('route.controller.js', this.routeFile + '.controller.js');
    this.template('route.html', this.routeFile + '.html');

    if (this.useTesting) {
        this.template('route.spec.js', this.testFile + '.controller.spec.js');
    }


};
