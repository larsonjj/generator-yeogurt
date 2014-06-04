'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
var generatorUtils = require('../modules/util.js');

var StyleGenerator = module.exports = function StyleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.folder = this.options.folder || false;
    this.import = this.options.import || false;
    this.cssOption = fileJSON.cssOption;

    console.log('You called the style subgenerator with the argument ' + this.name + '.');
};

util.inherits(StyleGenerator, yeoman.generators.NamedBase);

StyleGenerator.prototype.files = function files() {
    if (!this.name) {
        console.log('Name cannot be empty. Operation aborted.');
        return;
    }
    if (this.folder) {
        if (this.cssOption === 'LESS') {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
            // write the component file as an include
            if(this.import) {
                try {
                    generatorUtils.rewriteFile({
                        file: 'dev/styles/main.less',
                        needle: '// [include:' + this.folder + ']',
                        end: '// [/include]',
                        splicable: [
                            '@import \'' + this.folder + '/_' + this._.slugify(this.name.toLowerCase()) + '\';'
                        ]
                    });
                    console.log('Added ' + this._.slugify(this.name.toLowerCase()) + ' to main.less!');
                } catch (e) {
                    console.log('Error adding ' + this._.slugify(this.name.toLowerCase()) + ' to main.less!');
                }
            }
        }
        else if (this.cssOption === 'SCSS') {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
            // write the component file as an include
            if(this.import) {
                try {
                    generatorUtils.rewriteFile({
                        file: 'dev/styles/main.scss',
                        needle: '// [include:' + this.folder + ']',
                        end: '// [/include]',
                        splicable: [
                            '@import \'' + this.folder + '/_' + this._.slugify(this.name.toLowerCase()) + '\';'
                        ]
                    });
                    console.log('Added ' + this._.slugify(this.name.toLowerCase()) + ' to main.scss!');
                } catch (e) {
                    console.log('Error adding ' + this._.slugify(this.name.toLowerCase()) + ' to main.scss!');
                }
            }
        }
        else {
            this.template('style.less', 'dev/styles/' + this.folder + '/' + '_' + this._.slugify(this.name.toLowerCase()) + '.css');
        }
    }
    else {
        if (this.cssOption === 'LESS') {
            this.template('style.less', 'dev/styles/partials/' + '_' + this._.slugify(this.name.toLowerCase()) + '.less');
            // write the component file as an include
            if(this.import) {
                try {
                    generatorUtils.rewriteFile({
                        file: 'dev/styles/main.less',
                        needle: '// [include:partials]',
                        end: '// [/include]',
                        splicable: [
                            '@import \'partials/_' + this._.slugify(this.name.toLowerCase()) + '\';'
                        ]
                    });
                    console.log('Added partials ' + this._.slugify(this.name.toLowerCase()) + ' to main.less!');
                } catch (e) {
                    console.log('Error adding partials ' + this._.slugify(this.name.toLowerCase()) + ' to main.less!');
                }
            }
        }
        else if (this.cssOption === 'SCSS') {
            this.template('style.less', 'dev/styles/partials/' + '_' + this._.slugify(this.name.toLowerCase()) + '.scss');
            // write the component file as an include
            if(this.import) {
                try {
                    generatorUtils.rewriteFile({
                        file: 'dev/styles/main.scss',
                        needle: '// [include:partials]',
                        end: '// [/include]',
                        splicable: [
                            '@import \'partials/_' + this._.slugify(this.name.toLowerCase()) + '\';'
                        ]
                    });
                    console.log('Added partials ' + this._.slugify(this.name.toLowerCase()) + ' to main.scss!');
                } catch (e) {
                    console.log('Error adding partials ' + this._.slugify(this.name.toLowerCase()) + ' to main.scss!');
                }
            }
        }
        else {
            this.template('style.less', 'dev/styles/' + this._.slugify(this.name.toLowerCase()) + '.css');
        }
    }
};
