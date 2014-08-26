'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ReactGenerator = module.exports = function ReactGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.folder = this.options.folder || '';
    this.jsFramework = fileJSON.jsFramework;
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

util.inherits(ReactGenerator, yeoman.generators.NamedBase);

ReactGenerator.prototype.files = function files() {
    this.log('You called the react subgenerator with the argument ' + this.name + '.');

    if (this.jsFramework !== 'react') {
        this.log('This subgenerator is only used for React Applications. It seems as though you are not using React');
        this.log('Operation aborted');
    }
    else {
        if (!this.name) {
            this.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('react.js', 'client/scripts/components/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.jsx');
        this.template('react-spec.js', 'test/spec/components/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '-spec.js');
    }

};