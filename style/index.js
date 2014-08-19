'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
// var generatorUtils = require('../modules/util.js');

var StyleGenerator = module.exports = function StyleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || '';
    this.cssOption = fileJSON.cssOption;

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

    console.log('You called the style subgenerator with the argument ' + this.name + '.');
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
    if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
        return;
    }
    if (this.cssOption === 'less') {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
    }
    else if (this.cssOption === 'sass') {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
    }
    else {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.css');
    }
};
