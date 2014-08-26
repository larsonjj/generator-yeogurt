'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useModel = this.options.model || false;
    this.folder = this.options.folder || '';
    this.jsFramework = fileJSON.jsFramework;
    this.jsOption = fileJSON.jsOption;
    this.singlePageApplication = fileJSON.singlePageApplication;
    this.testFramework = fileJSON.testFramework;

    var getNumberOfPaths = [];
    this.folder.split('/').forEach(function(item) {
        if (item) {
            getNumberOfPaths.push('../');
        }
    });
    this.folderCount = getNumberOfPaths.join('');

    // Remove all leading and trailing slashes in folder path
    this.cleanFolderPath = function(folder) {
        if (folder) {
            var tempArray = [];
            var cleanedStr = folder.replace(/^\/+|\/+$/g, '');
            cleanedStr.split('/').forEach(function(item) {
                if (item) {
                    tempArray.push(item);
                }
            });
            return tempArray.join('/');
        }
        else {
            return '';
        }
    };
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
    this.log('You called the collection subgenerator with the argument ' + this.name + '.');

    if (!this.singlePageApplication && this.jsFramework !== 'react') {
        this.log('This subgenerator is not available for Static Sites.\nOperation aborted');
        return;
    }
    else if (this.jsFramework === 'react') {
        this.log('This subgenerator is not available for React application.\nOperation aborted');
    }
    else if (this.singlePageApplication) {
        if (!this.name) {
            this.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('collection.js', 'client/scripts/collections/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.js');
        this.template('collection-spec.js', 'test/spec/collections/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
    }

};