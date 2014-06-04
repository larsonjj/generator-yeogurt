'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var colors = require('colors');


var YeogurtGenerator = module.exports = function YeogurtGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.options = options;

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(YeogurtGenerator, yeoman.generators.Base);

YeogurtGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var yeogurtLogo = '' +
        '                                    _   \n'.red +
        '                  ' + 'Welcome to'.green + '       | |  \n'.red +
        '  _   _  ___  ___   __ _ _   _ _ __| |_ \n'.red +
        ' | | | |/ _ \\\/ _ \\ \/ _` | | | | \'__| __|\n'.red +
        ' | |_| |  __/ (_) | (_| | |_| | |  | |_ \n'.red +
        '  \\__, |\\___|\\___/ \\__, |\\__,_|_|   \\__|\n'.red +
        '   __/ |            __/ |               \n'.red +
        '  |___/            |___/     \n'.red +
        '                                      ';

    // have Yeogurt greet the user.
    console.log(yeogurtLogo);

    var prompts = [{
        name: 'projectName',
        message: 'What would you like to' + ' name your project'.blue + '?',
        default: 'Sample'
    }, {
        type: 'list',
        name: 'versionControl',
        message: 'Which version control software are you using (or plan to use)?',
        choices: ['Git', 'SVN', 'None (I like to live on the edge)']
    }, {
        type: 'list',
        name: 'htmlOption',
        message: 'Which HTML preprocessor would you like to use?',
        choices: ['Jade', 'Swig', 'None (Vanilla HTML)']
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'Which CSS preprocessor would you like to use?',
        choices: ['SCSS', 'LESS', 'None (Vanilla CSS)']
    }, {
        when: function(props) { return (/SCSS/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useBourbon',
        message: 'Would you like to use the Bourbon Mixin Library?',
        default: true
    }, {
        when: function(props) { return (/LESS/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useLesshat',
        message: 'Would you like to use the Lesshat Mixin Library?',
        default: true
    }, {
        type: 'list',
        name: 'jsOption',
        message: 'Which JavaScript module library would you like to use?',
        choices: ['RequireJS', 'Browserify', 'None (Vanilla JavaScript)']
    }, {
        type: 'confirm',
        name: 'ieSupport',
        message: 'Do you need to support IE8+?',
        default: true
    }, {
        type: 'confirm',
        name: 'responsive',
        message: 'Will the site be responsive (Use CSS3 media queries)?',
        default: true
    }, {
        type: 'confirm',
        name: 'useGA',
        message: 'Will you be using Google Analytics?',
        default: true
    }, {
        type: 'confirm',
        name: 'useFTP',
        message: 'Will you be deploying code to an FTP server?',
        default: true
    }, {
        type: 'confirm',
        name: 'jshint',
        message: 'Would you like to lint your Javascript with JSHint?',
        default: true
    }, {
        type: 'checkbox',
        name: 'extras',
        message: 'Select any extras you would like:',
        choices: [{
            name: 'Twitter Bootstrap 3.x',
            value: 'useBootstrap',
            checked: true
        }, {
            name: 'Font Awesome 4.x',
            value: 'useFontAwesome',
            checked: true
        },  {
            name: 'Modernizr',
            value: 'useModernizr',
            checked: true
        }, {
            name: 'Box Sizing: Border-Box',
            value: 'useBorderBox',
            checked: true
        }, {
            name: 'HTML5 Boilerplate extras (.htaccess, Apple homescreen icon, etc)',
            value: 'htaccess',
            checked: false
        }, {
            name: 'Dynamic Dashboard: Generate a dashboard for your site/app',
            value: 'useDashboard',
            checked: false
        }]
    }];

    this.prompt(prompts, function(props) {
        this.projectName = props.projectName;
        this.versionControl = props.versionControl;
        this.htmlOption = props.htmlOption;
        this.cssOption = props.cssOption;
        this.jsOption = props.jsOption;
        this.ieSupport = props.ieSupport;
        this.responsive = props.responsive;
        this.extras = props.extras;
        this.jshint = props.jshint;
        this.useGA = props.useGA;
        this.useFTP = props.useFTP;
        this.useDashboard = props.useDashboard;
        this.useBourbon = props.useBourbon;
        this.useLesshat = props.useLesshat;
        var extras = this.extras;

        function hasFeature(feat) {
            return extras.indexOf(feat) !== -1;
        }

        this.htaccess = hasFeature('htaccess');
        this.useBootstrap = hasFeature('useBootstrap');
        this.useFontAwesome = hasFeature('useFontAwesome');
        this.useDashboard = hasFeature('useDashboard');
        this.useBorderBox = hasFeature('useBorderBox');
        this.useModernizr = hasFeature('useModernizr');

        if (this.htaccess) {
            this.ieIcons = true;
            this.adobeXdomain = true;
            this.appleIcon = true;
        }

        this.props = props;

        cb();
    }.bind(this));
};

YeogurtGenerator.prototype.app = function app() {

    // Create .yo-rc.json file
    this.config.set('config', this.props);
    this.config.save();

    // Create needed Directories

    // root (/)
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');

    this.copy('dev/robots.txt', 'dev/robots.txt');
    this.copy('dev/humans.txt', 'dev/humans.txt');
    this.copy('dev/favicon.ico', 'dev/favicon.ico');

    if (this.useFTP) {
        this.copy('.ftppass', '.ftppass');
    }

    if (this.versionControl === 'SVN') {
        this.copy('svn-init.sh', 'svn-init.sh');
        this.copy('svn-init.bat', 'svn-init.bat');
    }

    // dev/
    this.mkdir('dev');

    // dev/images
    this.mkdir('dev/images');

};

YeogurtGenerator.prototype.tasks = function tasks() {
    // Folders
    this.mkdir('grunt');
    this.mkdir('grunt/config');
    this.mkdir('grunt/tasks');

    // Config
    if (this.jsOption === 'Browserify') {
        this.template('grunt/config/browserify.js', 'grunt/config/browserify.js');
        this.template('grunt/config/exorcise.js', 'grunt/config/exorcise.js');
    }
    this.template('grunt/config/clean.js', 'grunt/config/clean.js');
    this.template('grunt/config/compress.js', 'grunt/config/compress.js');
    this.template('grunt/config/connect.js', 'grunt/config/connect.js');
    this.template('grunt/config/concurrent.js', 'grunt/config/concurrent.js');
    this.template('grunt/config/copy.js', 'grunt/config/copy.js');
    this.template('grunt/config/concat.js', 'grunt/config/concat.js');
    if (this.useDashboard) {
        this.template('grunt/config/dashboard.js', 'grunt/config/dashboard.js');
    }
    if (this.useFTP) {
        this.template('grunt/config/ftpush.js', 'grunt/config/ftpush.js');
    }
    this.template('grunt/config/htmlmin.js', 'grunt/config/htmlmin.js');
    this.template('grunt/config/imagemin.js', 'grunt/config/imagemin.js');
    if (this.htmlOption === 'Jade') {
        this.template('grunt/config/jade.js', 'grunt/config/jade.js');
    }
    else if (this.htmlOption === 'Swig') {
        this.template('grunt/config/swig.js', 'grunt/config/swig.js');
    }
    if (this.jshint) {
        this.template('grunt/config/jshint.js', 'grunt/config/jshint.js');
    }
    this.template('grunt/config/karma.js', 'grunt/config/karma.js');
    if (this.cssOption === 'LESS') {
        this.template('grunt/config/less.js', 'grunt/config/less.js');
    }
    if (this.jsOption === 'RequireJS') {
        this.template('grunt/config/requirejs.js', 'grunt/config/requirejs.js');
    }
    if (this.cssOption === 'SCSS') {
        this.template('grunt/config/sass.js', 'grunt/config/sass.js');
    }
    this.template('grunt/config/svgmin.js', 'grunt/config/svgmin.js');
    this.template('grunt/config/uglify.js', 'grunt/config/uglify.js');
    if (this.cssOption === 'None (Vanilla CSS)') {
        this.template('grunt/config/uncss.js', 'grunt/config/uncss.js');
        this.template('grunt/config/cssmin.js', 'grunt/config/cssmin.js');
    }
    this.template('grunt/config/usemin.js', 'grunt/config/usemin.js');
    this.template('grunt/config/watch.js', 'grunt/config/watch.js');

    // Tasks
    this.template('grunt/tasks/build.js', 'grunt/tasks/build.js');
    this.template('grunt/tasks/default.js', 'grunt/tasks/default.js');
    if (this.useFTP) {
        this.template('grunt/tasks/deploy.js', 'grunt/tasks/deploy.js');
    }
    this.template('grunt/tasks/serve.js', 'grunt/tasks/serve.js');
    this.template('grunt/tasks/test.js', 'grunt/tasks/test.js');
    this.template('grunt/tasks/zip.js', 'grunt/tasks/zip.js');
};

YeogurtGenerator.prototype.views = function views() {
    // dev/views
    this.mkdir('dev/views');

    if (this.htmlOption === 'Jade') {
        this.mkdir('dev/views/templates');
        this.mkdir('dev/views/components');
        this.template('dev/views/jade/components/heading.jade', 'dev/views/components/heading.jade');
        this.template('dev/views/jade/index.jade', 'dev/views/index.jade');
        this.template('dev/views/jade/templates/base.jade', 'dev/views/templates/base.jade');
    }
    else if (this.htmlOption === 'Swig') {
        this.mkdir('dev/views/templates');
        this.mkdir('dev/views/components');
        this.template('dev/views/swig/components/heading.swig', 'dev/views/components/heading.swig');
        this.template('dev/views/swig/index.swig', 'dev/views/index.swig');
        this.template('dev/views/swig/templates/base.swig', 'dev/views/templates/base.swig');
    }
    else if (this.htmlOption === 'None (Vanilla HTML)') {
        this.template('dev/views/html/index.html', 'dev/views/index.html');
    }
};

YeogurtGenerator.prototype.scripts = function scripts() {
    // dev/scripts
    this.mkdir('dev/scripts');
    this.mkdir('dev/scripts/vendor');
    this.mkdir('dev/scripts/modules');

    this.template('dev/scripts/app.js', 'dev/scripts/app.js');

    if (this.jsOption === 'Browserify' || this.jsOption === 'RequireJS') {
        this.template('dev/scripts/main.js', 'dev/scripts/main.js');
        this.template('dev/scripts/modules/module.js', 'dev/scripts/modules/module.js');
    }
};

YeogurtGenerator.prototype.styles = function styles() {
    // dev/styles
    this.mkdir('dev/styles');
    this.mkdir('dev/styles/fonts');

    if (this.cssOption !== 'None (Vanilla CSS)') {
        if (this.cssOption === 'LESS') {
            this.mkdir('dev/styles/base');
            this.mkdir('dev/styles/vendor');
            if (this.useFontAwesome) {
                this.template('dev/styles/vendor/_font-awesome.less', 'dev/styles/vendor/_font-awesome.less');
            }
            if (this.useBootstrap) {
                this.template('dev/styles/vendor/_bootstrap.less', 'dev/styles/vendor/_bootstrap.less');
            }
            if (this.useBorderBox) {
                this.template('dev/styles/base/_box-sizing.less', 'dev/styles/base/_box-sizing.less');
            }
            this.template('dev/styles/base/_mixins.less', 'dev/styles/base/_mixins.less');
            this.template('dev/styles/base/_variables.less', 'dev/styles/base/_variables.less');
            this.template('dev/styles/base/_reset.less', 'dev/styles/base/_reset.less');
            if (this.useLesshat) {
                this.template('dev/styles/vendor/_lesshat.less', 'dev/styles/vendor/_lesshat.less');
            }
            if (!this.useBootstrap) {
                this.template('dev/styles/vendor/_normalize.less', 'dev/styles/vendor/_normalize.less');
            }
            this.template('dev/styles/main.less', 'dev/styles/main.less');
            if (this.ieSupport) {
                this.template('dev/styles/base/_print.less', 'dev/styles/print.less');
                this.template('dev/styles/base/_ie8.less', 'dev/styles/base/_ie8.less');
            }
            else if (!this.useBootstrap) {
                this.template('dev/styles/base/_print.less', 'dev/styles/base/_print.less');
            }
        }
        if (this.cssOption === 'SCSS') {
            this.mkdir('dev/styles/base');
            this.template('dev/styles/base/_mixins.less', 'dev/styles/base/_mixins.scss');
            this.template('dev/styles/base/_variables.less', 'dev/styles/base/_variables.scss');
            this.template('dev/styles/base/_reset.less', 'dev/styles/base/_reset.scss');
            if (this.useBorderBox) {
                this.template('dev/styles/base/_box-sizing.less', 'dev/styles/base/_box-sizing.scss');
            }
            this.mkdir('dev/styles/vendor');
            if (this.useFontAwesome) {
                this.template('dev/styles/vendor/_font-awesome.less', 'dev/styles/vendor/_font-awesome.scss');
            }
            if (this.useBootstrap) {
                this.template('dev/styles/vendor/_bootstrap.less', 'dev/styles/vendor/_bootstrap.scss');
            }
            if (this.useBourbon) {
                this.template('dev/styles/vendor/_bourbon.scss', 'dev/styles/vendor/_bourbon.scss');
            }
            if (!this.useBootstrap) {
                this.template('dev/styles/vendor/_normalize.less', 'dev/styles/vendor/_normalize.scss');
            }
            if (this.ieSupport) {
                this.template('dev/styles/base/_print.less', 'dev/styles/print.scss');
                this.template('dev/styles/base/_ie8.less', 'dev/styles/base/_ie8.scss');
            }
            else if (!this.useBootstrap) {
                this.template('dev/styles/base/_print.less', 'dev/styles/base/_print.scss');
            }
            this.template('dev/styles/main.less', 'dev/styles/main.scss');
        }
    }
    else {
        this.template('dev/styles/main.css', 'dev/styles/main.css');
        this.template('dev/styles/print.css', 'dev/styles/print.css');
    }

};

YeogurtGenerator.prototype.dashboard = function dashboard() {
    if (this.useDashboard) {
        this.mkdir('dev/dashboard');
        this.mkdir('dev/dashboard/images');
        this.copy('dev/dashboard/images/yeogurt-logo.png', 'dev/dashboard/images/yeogurt-logo.png');
    }
};

YeogurtGenerator.prototype.testing = function testing() {
    this.mkdir('test');
    this.mkdir('test/spec');
    if (this.jsOption === 'RequireJS') {
        this.copy('test/test-main.js', 'test/test-main.js');
    }
    this.template('test/spec/appSpec.js', 'test/spec/appSpec.js');
    this.template('karma.conf.js', 'karma.conf.js');
};

YeogurtGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    if (this.jshint) {
        this.copy('jshintrc', '.jshintrc');
    }
};

YeogurtGenerator.prototype.extras = function extras() {
    if (this.adobeXdomain) {
        this.copy('dev/crossdomain.xml', 'dev/crossdomain.xml');
    }

    if (this.ieIcons) {
        this.copy('dev/browserconfig.xml', 'dev/browserconfig.xml');
        this.copy('dev/tile.png', 'dev/tile.png');
        this.copy('dev/tile-wide.png', 'dev/tile-wide.png');
    }

    if (this.htaccess) {
        this.copy('dev/.htaccess', 'dev/.htaccess');
    }

    if (this.appleIcon) {
        this.copy('dev/apple-touch-icon-precomposed.png', 'dev/apple-touch-icon-precomposed.png');
    }
};

YeogurtGenerator.prototype.runtime = function runtime() {
    this.copy('bowerrc', '.bowerrc');
    if (this.versionControl === 'Git') {
        this.copy('gitignore', '.gitignore');
        this.copy('gitattributes', '.gitattributes');
    } else if (this.versionControl === 'SVN') {
        this.copy('svnignore', '.svnignore');
    }
};

YeogurtGenerator.prototype.install = function() {
    if (this.options['skip-install']) {
        return;
    }

    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};
