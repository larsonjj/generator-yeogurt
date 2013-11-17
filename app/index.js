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
        type: 'checkbox',
        name: 'extras',
        message: 'Select any extras you would like:',
        choices: [{
            name: 'JSHint',
            value: 'jshint',
            checked: true
        }, {
            name: 'Bootstrap',
            value: 'useBootstrap',
            checked: true
        }, {
            name: 'Font Awesome',
            value: 'useFontAwesome',
            checked: true
        }, {
            name: 'IE8 Support',
            value: 'ieSupport',
            checked: true
        }, {
            name: 'Deploy to FTP Server',
            value: 'useFTP',
            checked: true
        }]
    }];

    this.prompt(prompts, function (props) {
        this.projectName = props.projectName;
        this.versionControl = props.versionControl;
        this.cssOption = props.cssOption;
        var extras = props.extras;

        function hasFeature(feat) {
            return extras.indexOf(feat) !== -1;
        }

        this.jshint = hasFeature('jshint');
        this.useBootstrap = hasFeature('useBootstrap');
        this.useFontAwesome = hasFeature('useFontAwesome');
        this.ieSupport = hasFeature('ieSupport');
        this.useFTP = hasFeature('useFTP');

        cb();
    }.bind(this));
};

YeogurtGenerator.prototype.app = function app() {

    // Create needed Directories

    // root (/)
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('_config.json', 'config.json');
    this.template('_package.json', 'package.json');
    this.copy('.htaccess', 'dev/.htaccess');

    if (this.useFTP) {
        this.copy('.ftppass', '.ftppass');
    }

    // dev/
    this.mkdir('dev');

    this.template('dev/index.html', 'dev/index.html');

    this.copy('dev/robots.txt', 'dev/robots.txt');
    this.copy('dev/404.html', 'dev/404.html');
    this.copy('dev/favicon.ico', 'dev/favicon.ico');

    // dev/scripts
    this.mkdir('dev/scripts');
    this.mkdir('dev/scripts/components');
    this.mkdir('dev/scripts/vendor');

    this.template('dev/scripts/app.js', 'dev/scripts/app.js');
    this.template('dev/scripts/main.js', 'dev/scripts/main.js');
    this.template('dev/scripts/components/example.js', 'dev/scripts/components/example.js');

    // dev/images
    this.mkdir('dev/images');

    // docs/
    this.mkdir('docs');
    this.copy('docs/README.md', 'docs/README.md');

    // dev/markup
    this.mkdir('dev/markup');
    this.mkdir('dev/markup/templates');
    this.mkdir('dev/markup/pages');
    this.mkdir('dev/markup/components');
    this.mkdir('dev/markup/elements');
    this.mkdir('dev/markup/partials');

    this.template('dev/markup/components/all-components.jade', 'dev/markup/components/all-components.jade');
    this.template('dev/markup/components/head.jade', 'dev/markup/components/head.jade');

    this.copy('dev/markup/components/header.jade', 'dev/markup/components/header.jade');
    this.copy('dev/markup/components/footer.jade', 'dev/markup/components/footer.jade');
    this.template('dev/markup/elements/all-elements.jade', 'dev/markup/elements/all-elements.jade');
    this.copy('dev/markup/elements/heading.jade', 'dev/markup/elements/heading.jade');
    this.copy('dev/markup/pages/index.jade', 'dev/markup/pages/index.jade');
    this.template('dev/markup/templates/base.jade', 'dev/markup/templates/base.jade');
    this.copy('dev/markup/templates/one-column.jade', 'dev/markup/templates/one-column.jade');
    this.template('dev/markup/partials/all-partials.jade', 'dev/markup/partials/all-partials.jade');
    this.copy('dev/markup/partials/README.md', 'dev/markup/partials/README.md');

    // dev/styles
    this.mkdir('dev/styles');
    this.mkdir('dev/styles/fonts');
    if (this.cssOption === 'LESS') {
        this.directory('dev/styles/less/components', 'dev/styles/components');
        this.directory('dev/styles/less/elements', 'dev/styles/elements');
        this.directory('dev/styles/less/modules', 'dev/styles/modules');
        this.directory('dev/styles/less/pages', 'dev/styles/pages');
        this.directory('dev/styles/less/partials', 'dev/styles/partials');
        this.directory('dev/styles/less/templates', 'dev/styles/templates');
        this.directory('dev/styles/less/vendor', 'dev/styles/vendor');
        this.template('dev/styles/less/main.less', 'dev/styles/main.less');
    }
    if (this.cssOption === 'SASS') {
        this.directory('dev/styles/sass/components', 'dev/styles/components');
        this.directory('dev/styles/sass/elements', 'dev/styles/elements');
        this.directory('dev/styles/sass/modules', 'dev/styles/modules');
        this.directory('dev/styles/sass/pages', 'dev/styles/pages');
        this.directory('dev/styles/sass/partials', 'dev/styles/partials');
        this.directory('dev/styles/sass/templates', 'dev/styles/templates');
        this.directory('dev/styles/sass/vendor', 'dev/styles/vendor');
        this.template('dev/styles/sass/main.scss', 'dev/styles/main.scss');
    }

    // Dashboard

    // markup
    this.mkdir('dev/dashboard');
    this.mkdir('dev/dashboard/markup');
    this.mkdir('dev/dashboard/markup/components');
    this.mkdir('dev/dashboard/markup/templates');

    this.template('dev/dashboard/markup/components/all-components.jade', 'dev/dashboard/markup/components/all-components.jade');
    this.template('dev/dashboard/markup/components/head.jade', 'dev/dashboard/markup/components/head.jade');

    this.copy('dev/dashboard/markup/components/header.jade', 'dev/dashboard/markup/components/header.jade');
    this.copy('dev/dashboard/markup/components/footer.jade', 'dev/dashboard/markup/components/footer.jade');
    this.copy('dev/dashboard/markup/index.jade', 'dev/dashboard/markup/index.jade');
    this.copy('dev/dashboard/markup/templates/base.jade', 'dev/dashboard/markup/templates/base.jade');
    this.copy('dev/dashboard/markup/templates/one-column.jade', 'dev/dashboard/markup/templates/one-column.jade');

    // images
    this.mkdir('dev/dashboard/images');

    // styles
    this.mkdir('dev/dashboard/styles');
    this.directory('dev/dashboard/styles/fonts', 'dev/dashboard/styles/fonts');

    if (this.cssOption === 'LESS') {
        this.template('dev/dashboard/styles/less/main.less', 'dev/dashboard/styles/main.less');
    }
    if (this.cssOption === 'SASS') {
        this.template('dev/dashboard/styles/sass/main.scss', 'dev/dashboard/styles/main.scss');
    }

    // scripts
    this.directory('dev/dashboard/scripts', 'dev/dashboard/scripts');

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
