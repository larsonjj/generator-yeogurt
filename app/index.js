'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var colors = require('colors');
var _ = require('lodash');


var YeogurtGenerator = module.exports = function YeogurtGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(YeogurtGenerator, yeoman.generators.Base);

YeogurtGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var yeogurtLogo = '' +
        ' __     __                         _   \n'.red +
        ' \\ \\   / /        '.red + 'Welcome To'.green + '      | |  \n'.red +
        '  \\ \\_/ /__  ___   __ _ _   _ _ __| |_ \n'.red +
        '   \\   / _ \\/ _ \\ / _` | | | | \\\'__| __|\n'.red +
        '    | |  __/ (_) | (_| | |_| | |  | |_ \n'.red +
        '    |_|\\___|\\___/ \\__, |\\__,_|_|   \\__|\n'.red +
        '                   __/ |               \n'.red +
        '                  |___/                  '.red;

    // have Yeogurt greet the user.
    console.log(yeogurtLogo);

    var prompts = [{
        name: 'projectName',
        message: 'What would you like to' + ' name your project'.blue + '?',
        default: 'sample'
    }, {
        type: 'list',
        name: 'versionControl',
        message: 'Which version control software are you using?',
        choices: ['Git', 'SVN', 'None (I like to live on the edge)'],
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'Which CSS preprocessor would you like to use?',
        choices: ['LESS', 'SASS'],
    }, {
        type: 'confirm',
        name: 'jshint',
        message: 'Would you like to lint your JavaScript with JSHint?: ',
    }, {
        type: 'confirm',
        name: 'useBootstrap',
        message: 'Would you like to include Bootstrap?: ',
    }, {
        type: 'confirm',
        name: 'useFontAwesome',
        message: 'Would you like to include Font Awesome?: ',
    }, {
        type: 'confirm',
        name: 'ieSupport',
        message: 'Do you need to support IE8?: ',
    }, {
        type: 'confirm',
        name: 'useFTP',
        message: 'Will you deploying code to an FTP server?: ',
    }];

    this.prompt(prompts, function (props) {
        this.projectName = props.projectName;
        this.versionControl = props.versionControl;
        this.cssOption = props.cssOption;
        this.jshint = props.jshint;
        this.useBootstrap = props.useBootstrap;
        this.useFontAwesome = props.useFontAwesome;
        this.ieSupport = props.ieSupport;
        this.useFTP = props.useFTP;

        cb();
    }.bind(this));
};

YeogurtGenerator.prototype.app = function app() {

    // Create needed Directories
    this.mkdir('dev');
    this.mkdir('dev/markup');
    this.mkdir('dev/styles');
    this.mkdir('dev/scripts');
    this.mkdir('dev/images');
    this.mkdir('dev/fonts');
    this.mkdir('docs');

    this.mkdir('dev/markup/templates');
    this.mkdir('dev/markup/pages');
    this.mkdir('dev/markup/components');
    this.mkdir('dev/markup/mixins');

    if (this.cssOption === 'LESS') {
        this.directory('dev/styles/less', 'dev/styles/less');
    }
    if (this.cssOption === 'SASS') {
        this.directory('dev/styles/sass', 'dev/styles/sass');
    }

    this.mkdir('dev/scripts/components');
    this.mkdir('dev/scripts/vendor');

    this.template('dev/scripts/app.js', 'dev/scripts/app.js');
    this.template('dev/scripts/main.js', 'dev/scripts/main.js');
    this.template('dev/scripts/components/example.js', 'dev/scripts/components/example.js');

    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('dev/index.html', 'dev/index.html');
    this.template('dev/markup/components/c000-head.jade', 'dev/markup/components/c000-head.jade');
    this.copy('dev/markup/components/c001-header.jade', 'dev/markup/components/c001-header.jade');
    this.copy('dev/markup/components/c002-footer.jade', 'dev/markup/components/c002-footer.jade');
    this.copy('dev/markup/mixins/m000-all-mixins.jade', 'dev/markup/mixins/m000-all-mixins.jade');
    this.copy('dev/markup/mixins/m001-heading.jade', 'dev/markup/mixins/m001-heading.jade');
    this.copy('dev/markup/pages/p000-homepage.jade', 'dev/markup/pages/p000-homepage.jade');
    this.copy('dev/markup/templates/t000-one-column.jade', 'dev/markup/templates/t000-one-column.jade');

    this.template('_bower.json', 'bower.json');
    this.template('_config.json', 'config.json');
    this.template('_package.json', 'package.json');

    if (this.useFTP) {
        this.copy('ftppass.json', 'ftppass.json');
    }

    this.copy('dev/robots.txt', 'dev/robots.txt');
    this.copy('dev/404.html', 'dev/404.html');
    this.copy('dev/favicon.ico', 'dev/favicon.ico');
};

YeogurtGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    if (this.jshint) {
        this.copy('jshintrc', '.jshintrc');
    }
};

YeogurtGenerator.prototype.runtime = function runtime() {
    this.copy('bowerrc', '.bowerrc');
    if (this.versionControl === 'Git') {
        this.copy('gitignore', '.gitignore');
        this.copy('gitattributes', '.gitattributes');
    }
    if (this.versionControl === 'SVN') {
        this.copy('svnignore', '.svnignore');
    }
};
