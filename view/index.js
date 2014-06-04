'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fileJSON = require(process.cwd() + '/.yo-rc.json')['generator-yeogurt'].config;
var generatorUtils = require('../modules/util.js');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    // options
    this.useDashboard = this.options.dashboard || false;
    this.view = this.options.type || 'page';
    this.import = this.options.import || false;
    this.useTemplate = this.options.template || false;
    this.useDashboard = fileJSON.extras.indexOf('useDashboard') > -1 ? true : false;
    this.structure = fileJSON.structure;
    this.projectName = fileJSON.projectName;
    this.jsTemplate = fileJSON.jsTemplate;
    this.htmlOption = fileJSON.htmlOption;
    this.useBootstrap = fileJSON.extras.indexOf('useBootstrap') > -1 ? true : false;
    this.cssOption = fileJSON.cssOption;
    this.jsOption = fileJSON.jsOption;
    this.useGA = fileJSON.useGA;
    this.ieSupport = fileJSON.ieSupport;
    this.useModernizr = fileJSON.extras.indexOf('useModernizr') > -1 ? true : false;
    this.ieSupport = fileJSON.ieSupport;
    this.responsive = fileJSON.responsive;

    this.toTitleCase = function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    console.log('You called the view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
    if (this.structure === 'Static Site') {
        if (this.useTemplate && this.view !== 'page') {
            console.log('The template option will be ignored as the type is not "page"');
        }

        if (this.htmlOption === 'Jade') {
            if (this.view === 'page') {
                this.template('view.jade', 'dev/views/' + this._.slugify(this.name) + '.jade');
            }
            else if (this.view === 'component') {
                this.template('view.jade', 'dev/views/' + this.view +'s/' + this._.slugify(this.name.toLowerCase()) + '.jade');
                // write the component file as an include
                if(this.import) {
                    try {
                        generatorUtils.rewriteFile({
                            file: 'dev/views/templates/base.jade',
                            needle: '//- [include:component]',
                            end: '//- [/include]',
                            splicable: [
                                'include ../components/' + this._.slugify(this.name.toLowerCase())
                            ]
                        });
                        console.log('Added ' + this._.slugify(this.name.toLowerCase()) + ' to base.jade!');
                    } catch (e) {
                        console.log('Error adding ' + this._.slugify(this.name.toLowerCase()) + ' to base.jade!');
                    }
                }
            }
            else if (this.view === 'template') {
                this.template('view.jade', 'dev/views/' + this.view +'s/' + this._.slugify(this.name.toLowerCase()) + '.jade');
            }
            else if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, component. Operation aborted');
            }
        }
        else if (this.htmlOption === 'Swig') {
            if (this.view === 'page') {
                this.template('view.swig', 'dev/views/' + this._.slugify(this.name) + '.swig');
            }
            else if (this.view === 'component') {
                this.template('view.swig', 'dev/views/' + this.view +'s/' + this._.slugify(this.name.toLowerCase()) + '.swig');
                // write the component file as an include
                if(this.import) {
                    try {
                        generatorUtils.rewriteFile({
                            file: 'dev/views/templates/base.swig',
                            needle: '{# [/include:component] #}',
                            end: '{# [/include] #}',
                            splicable: [
                                '{% import \'../components/' + this._.slugify(this.name.toLowerCase()) + '.swig\' as ' + this._.slugify(this.name.toLowerCase()) + ' %}'
                            ]
                        });
                        console.log('Added ' + this._.slugify(this.name.toLowerCase()) + ' to base.jade!');
                    } catch (e) {
                        console.log('Error adding ' + this._.slugify(this.name.toLowerCase()) + ' to base.jade!');
                    }
                }
            }
            else if (this.view === 'template') {
                this.template('view.swig', 'dev/views/' + this.view +'s/' + this._.slugify(this.name.toLowerCase()) + '.swig');
            }
            else if (!this.name) {
                console.log('Name cannot be empty. Operation aborted.');
            }
            else {
                console.log('Must use a supported type: page, template, component. Operation aborted');
            }
        }
        else if (this.htmlOption === 'None (Vanilla HTML)') {
            console.log(this.useDashboard);
            if (this.view === 'page') {
                this.template('view.html', 'dev/views/' + this._.slugify(this.name) + '.html');
            }
            else {
                console.log('You have chosen to use Vanilla HTML, so only pages can be generated.');
                console.log('Try the following to generate a page: yo yeogurt:view mypage');
                console.log('Operation aborted');
            }
        }
    }
    else if (this.structure === 'Single Page Application') {
        if (!this.name) {
            console.log('Name cannot be empty. Operation aborted.');
            return;
        }
        this.template('view.js', 'dev/scripts/views/' + this._.slugify(this.name) + '.js');
        this.template('view-spec.js', 'test/spec/views/' + this._.slugify(this.name) + '-spec.js');
        if (this.jsTemplate === 'Lo-dash (Underscore)') {
            this.template('template.html', 'dev/scripts/templates/' + this._.slugify(this.name) + '.jst');
        }
        else if (this.jsTemplate === 'Handlebars') {
            this.template('template.html', 'dev/scripts/templates/' + this._.slugify(this.name) + '.hbs');
        }
        else if (this.jsTemplate === 'Swig') {
            this.template('template.html', 'dev/scripts/templates/' + this._.slugify(this.name) + '.swig');
        }
        else if (this.jsTemplate === 'Jade') {
            this.template('template.html', 'dev/scripts/templates/' + this._.slugify(this.name) + '.jade');
        }
    }
};
