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
        choices: ['Git', 'SVN', 'Both', 'None (I like to live on the edge)'],
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
    }, {
        type: 'confirm',
        name: 'haveDashboard',
        message: 'Would you like to have a site dashboard?: ',
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
        this.haveDashboard = props.haveDashboard;

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
    this.mkdir('dev/styles/fonts');
    this.mkdir('docs');

    this.mkdir('dev/markup/templates');
    this.mkdir('dev/markup/pages');
    this.mkdir('dev/markup/components');
    this.mkdir('dev/markup/elements');
    this.mkdir('dev/markup/partials');

    if (this.cssOption === 'LESS') {
        this.directory('dev/styles/less/components', 'dev/styles/components');
        this.directory('dev/styles/less/elements', 'dev/styles/elements');
        this.directory('dev/styles/less/modules', 'dev/styles/modules');
        this.directory('dev/styles/less/pages', 'dev/styles/pages');
        this.directory('dev/styles/less/partials', 'dev/styles/partials');
        this.directory('dev/styles/less/vendor', 'dev/styles/vendor');
        this.template('dev/styles/less/main.less', 'dev/styles/main.less');
    }
    if (this.cssOption === 'SASS') {
        this.directory('dev/styles/sass/components', 'dev/styles/components');
        this.directory('dev/styles/sass/elements', 'dev/styles/elements');
        this.directory('dev/styles/sass/modules', 'dev/styles/modules');
        this.directory('dev/styles/sass/pages', 'dev/styles/pages');
        this.directory('dev/styles/sass/partials', 'dev/styles/partials');
        this.directory('dev/styles/sass/vendor', 'dev/styles/vendor');
        this.template('dev/styles/less/main.scss', 'dev/styles/main.scss');
    }

    this.mkdir('dev/scripts/components');
    this.mkdir('dev/scripts/vendor');

    this.template('dev/scripts/app.js', 'dev/scripts/app.js');
    this.template('dev/scripts/main.js', 'dev/scripts/main.js');
    this.template('dev/scripts/components/example.js', 'dev/scripts/components/example.js');

    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('dev/index.html', 'dev/index.html');
    this.template('dev/markup/components/all-components.jade', 'dev/markup/components/all-components.jade');
    this.template('dev/markup/components/c000-head.jade', 'dev/markup/components/c000-head.jade');
    this.copy('dev/markup/components/c001-header.jade', 'dev/markup/components/c001-header.jade');
    this.copy('dev/markup/components/c002-footer.jade', 'dev/markup/components/c002-footer.jade');
    this.copy('dev/markup/elements/all-elements.jade', 'dev/markup/elements/all-elements.jade');
    this.copy('dev/markup/elements/e000-heading.jade', 'dev/markup/elements/e000-heading.jade');
    this.copy('dev/markup/pages/p000-homepage.jade', 'dev/markup/pages/p000-homepage.jade');
    this.copy('dev/markup/templates/t000-base.jade', 'dev/markup/templates/t000-base.jade');
    this.copy('dev/markup/templates/t001-one-column.jade', 'dev/markup/templates/t001-one-column.jade');
    this.copy('dev/markup/partials/all-partials.jade', 'dev/markup/partials/all-partials.jade');
    this.copy('dev/markup/partials/README.md', 'dev/markup/partials/README.md');

    this.template('_bower.json', 'bower.json');
    this.template('_config.json', 'config.json');
    this.template('_package.json', 'package.json');

    if (this.useFTP) {
        this.copy('ftppass.json', 'ftppass.json');
    }

    this.copy('dev/robots.txt', 'dev/robots.txt');
    this.copy('dev/404.html', 'dev/404.html');
    this.copy('dev/favicon.ico', 'dev/favicon.ico');

    // Dashboard
    this.mkdir('dashboard');
    this.mkdir('dashboard/markup');
    this.mkdir('dashboard/markup/pages');
    this.mkdir('dashboard/markup/elements');
    this.mkdir('dashboard/markup/components');
    this.mkdir('dashboard/markup/templates');
    this.mkdir('dashboard/markup/partials');
    this.mkdir('dashboard/images');
    this.mkdir('dashboard/styles');
    this.mkdir('dashboard/styles/fonts');
    this.mkdir('dashboard/styles/vendor');
    this.mkdir('dashboard/styles/partials');
    this.mkdir('dashboard/styles/pages');
    this.mkdir('dashboard/styles/templates');
    this.mkdir('dashboard/styles/elements');
    this.mkdir('dashboard/scripts');
    this.mkdir('dashboard/scripts/vendor');
    this.mkdir('dashboard/scripts/components');
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
    else if (this.versionControl === 'SVN') {
        this.copy('svnignore', '.svnignore');
    }
    else if (this.versionControl === 'Both') {
        this.copy('gitignore', '.gitignore');
        this.copy('gitattributes', '.gitattributes');
        this.copy('svnignore', '.svnignore');
    }
};
