'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var deleteFile = require('../helpers/delete-file');
var getRootDir = require('../helpers/get-root-dir');
var path = require('path');

var CollectionGenerator = module.exports = function CollectionGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useModel = this.options.model || false;
    this.delete = this.options.delete || false;
    this.jsFramework = fileJSON.jsFramework;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;
    this.testFramework = fileJSON.testFramework;
    this.useTesting = fileJSON.useTesting;

};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

// Prompts
CollectionGenerator.prototype.ask = function ask() {
    if (!this.singlePageApplication) {
        this.log('This subgenerator is not available for Static Sites.\nOperation aborted');
        this.abort = true;
        return;
    }
    else if (this.jsFramework === 'react') {
        this.log('This subgenerator is not available for React application.\nOperation aborted');
        this.abort = true;
        return;
    }

    var createOrDelete = this.delete ? 'delete' : 'create';

    var self = this;
    var done = this.async();
    var prompts = [{
        name: 'collectionFile',
        message: 'Where would you like to ' + createOrDelete + ' this collection?',
        default: 'client/scripts/collections'
    }, {
        name: 'existingModelName',
        message: 'What is the name of the model you would like to use with this collection?',
        default: this.name + '-model'
    }, {
        name: 'existingModelLocation',
        message: 'What folder is the model file located in?',
        default: 'client/scripts/models'
    }, {
        when: function() {
            return self.useTesting;
        },
        name: 'testFile',
        message: 'Where would you like to ' + createOrDelete + ' this collection\'s test?',
        default: 'test/spec/collections'
    }];

    this.prompt(prompts, function(answers) {
        // Get root directory
        this.rootDir = getRootDir(answers.collectionFile);
        this.modelName = answers.existingModelName;

        this.collectionFile = path.join(answers.collectionFile, this._.slugify(this.name.toLowerCase()));
        this.modelFile = path.join(answers.existingModelLocation, this._.slugify(answers.existingModelName.toLowerCase()));

        if (this.testFile) {
            this.testFile = path.join(answers.testFile, this._.slugify(this.name.toLowerCase()));
        }
        done();
    }.bind(this));
};

// Create files
CollectionGenerator.prototype.files = function files() {
    if (this.abort) {
        return;
    }
    if (!this.delete) {
        this.template('collection.js', this.collectionFile + '.js');
        if (this.useTesting) {
            this.template('collection-spec.js', this.testFile + '-spec.js');
        }
    }
    else {
        deleteFile(this.collectionFile + '.js', this);
        if (this.useTesting) {
            deleteFile(this.testFile + '-spec.js', this);
        }
    }

};
