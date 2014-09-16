'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var cleanFolderPath = require('../helpers/clean-folder-path');
var deleteFile = require('../helpers/delete-file');

var ScriptGenerator = module.exports = function ScriptGenerator() {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || '';
    this.delete = this.options.delete || '';
    this.jsOption = fileJSON.jsOption;
    this.useTesting = fileJSON.useTesting;
    this.testFramework = fileJSON.testFramework;

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

util.inherits(ScriptGenerator, yeoman.generators.NamedBase);

ScriptGenerator.prototype.files = function files() {
    this.log('You called the script subgenerator with the argument ' + this.name + '.');
    if (!this.delete) {
        this.template('script.js', 'client/scripts/' + this.cleanFolderPath(this.folder) + this._.slugify(this.name.toLowerCase()) + '.js');
        if (this.useTesting) {
            this.template('script-spec.js', 'test/spec/' + this.cleanFolderPath(this.folder) + this._.slugify(this.name.toLowerCase()) + '-spec.js');
        }
    }
    else {
        deleteFile('client/scripts/' + this.cleanFolderPath(this.folder) + this._.slugify(this.name.toLowerCase()) + '.js', this);
        if (this.useTesting) {
            deleteFile('test/spec/' + this.cleanFolderPath(this.folder) + this._.slugify(this.name.toLowerCase()) + '-spec.js', this);
        }
    }

};