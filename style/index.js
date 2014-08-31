'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var StyleGenerator = module.exports = function StyleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    var fileJSON = this.config.get('config');

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || '';
    this.cssOption = fileJSON.cssOption;
    this.testFramework = fileJSON.testFramework;

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

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
    this.log('You called the style subgenerator with the argument ' + this.name + '.');

    if (this.cssOption === 'less') {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
    }
    else if (this.cssOption === 'sass') {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
    }
    else {
        this.template('style.less', 'client/styles/' + this.cleanFolderPath(this.folder) + '/' + this._.slugify(this.name.toLowerCase()) + '.css');
    }
};
