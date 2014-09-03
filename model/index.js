'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var cleanFolderPath = require('../helpers/clean-folder-path');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.useTemplate = this.options.template || false;
    this.folder = this.options.folder || '';
    this.jsFramework = fileJSON.jsFramework;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;
    this.testFramework = fileJSON.testFramework;
    this.useTesting = fileJSON.useTesting;

    var getNumberOfPaths = [];
    this.folder.split('/').forEach(function(item) {
        if (item) {
            getNumberOfPaths.push('../');
        }
    });
    this.folderCount = getNumberOfPaths.join('');

    // Remove all leading and trailing slashes in folder path
    this.cleanFolderPath = cleanFolderPath;
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
    this.log('You called the model subgenerator with the argument ' + this.name + '.');

    if (!this.singlePageApplication && this.jsFramework !== 'react') {
        this.log('This subgenerator is not available for Static Sites.\nOperation aborted');
        return;
    }
    else if (this.jsFramework === 'react') {
        this.log('This subgenerator is not available for React application.\nOperation aborted');
    }
    else if (this.singlePageApplication) {
        this.template('model.js', 'client/scripts/models/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.js');
        if (this.useTesting) {
            this.template('model-spec.js', 'test/spec/models/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
        }
    }

};