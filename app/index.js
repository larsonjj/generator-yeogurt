'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
require('colors');


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
        message: 'Which ' + 'version control software'.blue + ' are you using (or plan to use)?',
        choices: ['Git', 'SVN', 'None (I like to live on the edge)']
    }, {
        type: 'list',
        name: 'structure',
        message: 'What ' + 'type of application'.blue + ' will you be creating?',
        choices: ['Static Site', 'Single Page Application']
    },  {
        type: 'confirm',
        name: 'useServer',
        message: 'Would you like to use a ' + 'Node + Express Server'.blue + '?',
        default: true
    }, {
        when: function(props) { return props.useServer; },
        type: 'list',
        name: 'dbOption',
        message: 'What ' + 'database type'.blue + ' would you like to use ?',
        choices: ['MongoDB', 'MySQL', 'None']
    }, {
        when: function(props) { return props.dbOption !== 'None' && props.useServer; },
        name: 'dbHost',
        message: 'What is your ' + 'database host/url'.blue + '?',
        default: 'localhost'
    }, {
        when: function(props) { return props.dbOption === 'MySQL'; },
        name: 'dbPort',
        message: 'What ' + 'port'.blue + ' is your database running on?',
        default: '3306'
    }, {
        when: function(props) { return props.dbOption === 'MongoDB'; },
        name: 'dbPort',
        message: 'What ' + 'port'.blue + ' is your Database running on?',
        default: '27017'
    }, {
        when: function(props) { return props.dbOption !== 'None' && props.useServer; },
        name: 'dbName',
        message: 'What is the ' + 'name'.blue + ' of your database?',
        default: 'yeogurt_db'
    }, {
        when: function(props) { return props.dbOption !== 'None' && props.useServer; },
        name: 'dbUser',
        message: 'What is your ' + 'username'.blue + ' for this database?',
        default: 'root'
    }, {
        when: function(props) { return props.dbOption !== 'None' && props.useServer; },
        name: 'dbPass',
        message: 'What is your ' + 'password'.blue + ' for this database?'
    }, {
        when: function(props) { return (/Static Site/i).test(props.structure) && !props.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Swig', 'None (Vanilla HTML)']
    }, {
        when: function(props) { return (/Static Site/i).test(props.structure) && props.useServer; },
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Swig']
    }, {
        when: function(props) { return (/Single Page Application/i).test(props.structure); },
        type: 'list',
        name: 'jsFramework',
        message: 'Which ' + 'JavaScript framework and/or library'.blue + ' would you like to use?',
        choices: ['Backbone + React', 'Backbone']
    }, {
        when: function(props) {return props.jsFramework === 'Backbone' && !props.useServer || false;},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Lo-dash (Underscore)', 'Handlebars', 'Jade']
    }, {
        when: function(props) {return props.jsFramework === 'Backbone' && props.useServer || false;},
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Handlebars', 'Jade']
    }, {
        when: function(props) { return !(/React/i).test(props.jsFramework); },
        type: 'list',
        name: 'jsOption',
        message: 'Which ' + 'JavaScript module library'.blue + ' would you like to use?',
        choices: ['RequireJS', 'Browserify', 'None (Vanilla JavaScript)']
    }, {
        type: 'list',
        name: 'testFramework',
        message: 'Which JavaScript ' + 'testing framework'.blue + ' would you like to use?',
        choices: ['Jasmine', 'Mocha + Chai']
    }, {
        type: 'list',
        name: 'cssOption',
        message: 'Which ' + 'CSS preprocessor'.blue + ' would you like to use?',
        choices: ['Sass', 'Less', 'None (Vanilla CSS)']
    }, {
        when: function(props) { return (/Sass/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useBourbon',
        message: 'Would you like to use the ' + 'Bourbon Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(props) { return (/Less/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useLesshat',
        message: 'Would you like to use the ' + 'Lesshat Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(props) { return (/Sass/i).test(props.cssOption) || (/None/i).test(props.cssOption); },
        type: 'list',
        name: 'cssFramework',
        message: 'Which CSS ' + 'framework'.blue + ' would you like to use?',
        choices: ['Bootstrap', 'Foundation', 'None']
    }, {
        when: function(props) { return (/Less/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useBootstrap',
        message: 'Would you like to use the ' + 'Bootstrap'.blue + ' CSS framework?',
        default: true
    }, {
        when: function(props) { return !(/Foundation/i).test(props.cssFramework); },
        type: 'confirm',
        name: 'ieSupport',
        message: 'Do you need to ' + 'support IE8+'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'useGA',
        message: 'Will you be using ' + 'Google Analytics'.blue + '?',
        default: true
    }, {
        when: function(props) { return !props.useServer; },
        type: 'confirm',
        name: 'useFTP',
        message: 'Will you be deploying code to an ' + 'FTP server'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'jshint',
        message: 'Would you like to lint your Javascript with ' + 'JSHint'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'useJsdoc',
        message: 'Would you like to document your Javascript with ' + 'JSDoc'.blue + '?',
        default: true
    }, {
        type: 'confirm',
        name: 'useKss',
        message: 'Would you like to generate a styleguide with ' + 'KSS (Knyle Style Sheets)'.blue + '?',
        default: true
    }, {
        when: function(props) { return (/Static Site/i).test(props.structure); },
        type: 'checkbox',
        name: 'extras',
        message: 'Select any extras you would like:',
        choices: [{
            name: 'Font Awesome',
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
        },{
            name: 'Dynamic Dashboard: Generate a dashboard for your site/app',
            value: 'useDashboard',
            checked: false
        }]
    }, {
        when: function(props) { return (/Single Page Application/i).test(props.structure); },
        type: 'checkbox',
        name: 'extras',
        message: 'Select any extras you would like:',
        choices: [{
            name: 'Font Awesome',
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
            name: '.htaccess',
            value: 'htaccess',
            checked: false
        }]
    }];

    this.prompt(prompts, function(props) {

        this.projectName = props.projectName;
        this.versionControl = props.versionControl;
        this.htmlOption = props.htmlOption;
        this.structure = props.structure;
        this.jsFramework = props.jsFramework;
        this.jsTemplate = props.jsTemplate;
        this.testFramework = props.testFramework;
        this.cssOption = props.cssOption;
        this.jsOption = props.jsOption;
        this.useServer = props.useServer;
        this.ieSupport = props.ieSupport;
        this.extras = props.extras;
        this.jshint = props.jshint;
        this.useJsdoc = props.useJsdoc;
        this.dbOption = props.dbOption ? props.dbOption : 'None';
        this.useKss = props.useKss;
        this.useGA = props.useGA;
        this.useFTP = props.useFTP;
        this.useDashboard = props.useDashboard;
        this.useBourbon = props.useBourbon;
        this.useLesshat = props.useLesshat;
        this.cssFramework = props.cssFramework;

        // Default Overwrites
        if (this.jsFramework === 'Backbone + React') {
            this.jsTemplate = props.jsTemplate = 'React';
        }

        this. jsOption = props.jsOption = props.jsOption ? props.jsOption : 'Browserify';

        var extras = this.extras;

        function hasFeature(feat, obj) {
            return obj.indexOf(feat) !== -1;
        }

        // Intially set flags to false
        this.useBootstrap = props.useBootstrap ? props.useBootstrap : false;
        this.responsive = false;
        this.useFoundation = false;
        this.htaccess = false;


        if (this.cssFramework === 'Bootstrap') {
            this.useBootstrap = true;
            if (this.ieSupport) {
                this.responsive = true;
            }
        }
        else if (this.cssFramework === 'Foundation') {
            this.useFoundation = true;
        }

        this.useFontAwesome = hasFeature('useFontAwesome', extras);
        this.useDashboard = hasFeature('useDashboard', extras);
        this.useBorderBox = hasFeature('useBorderBox', extras);
        this.useModernizr = hasFeature('useModernizr', extras);
        this.htaccess = hasFeature('htaccess', extras);

        // Setup Database URLs
        var username = props.dbUser;
        var password = props.dbPass ? ':' + props.dbPass : '';
        var port = props.dbPort;
        var host = props.dbUser ? '@' + props.dbHost : props.dbHost;
        var name = props.dbName ? props.dbName : '';

        if (this.dbOption === 'MongoDB') {
            this.dbURL = process.env.MONGODB || 'mongodb://' +
            username +
            password +
            host + ':' +
            port + '/' +
            name;
        }
        else if (this.dbOption === 'MySQL') {
            this.dbURL = process.env.MYSQL || 'mysql://' +
            username +
            password +
            host + ':' +
            port + '/' +
            name;
        }
        else {
            this.dbURL = '';
        }

        this.props = props;

        cb();
    }.bind(this));
};

YeogurtGenerator.prototype.app = function app() {

    // Create .yo-rc.json file
    this.config.set('config', this.props);
    this.config.set('version', this.pkg.version);
    this.config.save();

    // Create needed Directories

    // root (/)
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('README.md', 'README.md');

    if (this.useFTP) {
        this.copy('.ftppass', '.ftppass');
    }

    if (this.versionControl === 'SVN') {
        this.copy('svn-init.sh', 'svn-init.sh');
        this.copy('svn-init.bat', 'svn-init.bat');
    }

    // client/
    this.mkdir('client');

    // client/images
    this.copy('client/images/yeogurt-swirl.png', 'client/images/yeogurt-swirl.png');

};

YeogurtGenerator.prototype.docs = function docs() {
    if (this.useKss) {
        this.mkdir('client/docs');
        this.mkdir('client/docs/styleguide');
        this.template('client/docs/styleguide/index.html', 'client/docs/styleguide/index.html');
        this.template('client/docs/styleguide/public/kss.js', 'client/docs/styleguide/public/kss.js');
        this.template('client/docs/styleguide/public/kss.less', 'client/docs/styleguide/public/kss.less');
        this.template('client/docs/styleguide/public/less.js', 'client/docs/styleguide/public/less.js');
        this.template('client/docs/styleguide/public/markdown.less', 'client/docs/styleguide/public/markdown.less');
        this.copy('client/docs/styleguide/public/prettify.js', 'client/docs/styleguide/public/prettify.js');
        this.copy('client/docs/styleguide/public/classlist-shim.js', 'client/docs/styleguide/public/classlist-shim.js');
        this.copy('client/images/yeogurt-logo.png', 'client/docs/styleguide/public/images/yeogurt-logo.png');
    }
    if (this.useJsdoc) {
        this.directory('client/docs/api', 'client/docs/api');
    }
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
    if (this.useJsdoc) {
        this.template('grunt/config/jsdoc.js', 'grunt/config/jsdoc.js');
    }
    this.template('grunt/config/clean.js', 'grunt/config/clean.js');
    this.template('grunt/config/compress.js', 'grunt/config/compress.js');
    if (!this.useServer) {
        this.template('grunt/config/connect.js', 'grunt/config/connect.js');
    }
    else {
        this.template('grunt/config/open.js', 'grunt/config/open.js');
    }
    this.template('grunt/config/concurrent.js', 'grunt/config/concurrent.js');
    this.template('grunt/config/copy.js', 'grunt/config/copy.js');
    this.template('grunt/config/concat.js', 'grunt/config/concat.js');
    if (this.useDashboard) {
        this.template('grunt/config/dashboard.js', 'grunt/config/dashboard.js');
    }
    if (this.useFTP) {
        this.template('grunt/config/ftpush.js', 'grunt/config/ftpush.js');
    }
    if (this.useKss) {
        this.template('grunt/config/kss.js', 'grunt/config/kss.js');
    }
    this.template('grunt/config/htmlmin.js', 'grunt/config/htmlmin.js');
    this.template('grunt/config/imagemin.js', 'grunt/config/imagemin.js');
    this.template('grunt/config/pngmin.js', 'grunt/config/pngmin.js');
    if (this.htmlOption === 'Jade' || this.jsTemplate === 'Jade') {
        this.template('grunt/config/jade.js', 'grunt/config/jade.js');
    }
    else if (this.htmlOption === 'Swig' ) {
        this.template('grunt/config/swig.js', 'grunt/config/swig.js');
    }
    if (this.jshint) {
        this.template('grunt/config/jshint.js', 'grunt/config/jshint.js');
    }
    this.template('grunt/config/karma.js', 'grunt/config/karma.js');
    if (this.cssOption === 'Less') {
        this.template('grunt/config/less.js', 'grunt/config/less.js');
    }
    if (this.jsOption === 'RequireJS') {
        this.template('grunt/config/requirejs.js', 'grunt/config/requirejs.js');
    }
    if (this.cssOption === 'Sass') {
        this.template('grunt/config/sass.js', 'grunt/config/sass.js');
    }
    if (this.jsTemplate === 'Lo-dash (Underscore)') {
        this.template('grunt/config/jst.js', 'grunt/config/jst.js');
    }
    else if (this.jsTemplate === 'Handlebars') {
        this.template('grunt/config/handlebars.js', 'grunt/config/handlebars.js');
    }
    this.template('grunt/config/svgmin.js', 'grunt/config/svgmin.js');
    this.template('grunt/config/uglify.js', 'grunt/config/uglify.js');
    if (this.cssOption === 'None (Vanilla CSS)' && this.structure === 'Static Site') {
        this.template('grunt/config/cssmin.js', 'grunt/config/cssmin.js');
    }
    this.template('grunt/config/usemin.js', 'grunt/config/usemin.js');
    this.template('grunt/config/watch.js', 'grunt/config/watch.js');
    if (this.useServer) {
        this.template('grunt/config/express.js', 'grunt/config/express.js');
        this.template('grunt/config/env.js', 'grunt/config/env.js');
    }
    this.template('grunt/config/injector.js', 'grunt/config/injector.js');

    // Tasks
    this.template('grunt/tasks/build.js', 'grunt/tasks/build.js');
    this.template('grunt/tasks/default.js', 'grunt/tasks/default.js');
    if (this.useFTP) {
        this.template('grunt/tasks/deploy.js', 'grunt/tasks/deploy.js');
    }
    this.template('grunt/tasks/serve.js', 'grunt/tasks/serve.js');
    this.template('grunt/tasks/test.js', 'grunt/tasks/test.js');
    this.template('grunt/tasks/zip.js', 'grunt/tasks/zip.js');
    if (this.useServer) {
        this.template('grunt/tasks/keepalive.js', 'grunt/tasks/keepalive.js');
        this.template('grunt/tasks/wait.js', 'grunt/tasks/wait.js');
    }
};

YeogurtGenerator.prototype.views = function views() {
    var viewRoot = this.useServer ? 'server/' : 'client/';

    if (this.htmlOption === 'Jade') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/jade/index.jade', viewRoot + 'templates/index.jade');
        this.template('client/templates/jade/layouts/base.jade', viewRoot + 'templates/layouts/base.jade');
    }
    else if (this.htmlOption === 'Swig') {
        this.mkdir(viewRoot + 'templates');
        this.mkdir(viewRoot + 'templates/layouts');
        this.template('client/templates/swig/index.swig', viewRoot + 'templates/index.swig');
        this.template('client/templates/swig/layouts/base.swig', viewRoot + 'templates/layouts/base.swig');
    }
    else if (this.htmlOption === 'None (Vanilla HTML)') {
        this.template('client/templates/html/index.html', 'client/index.html');
    }

    if (this.structure === 'Single Page Application') {
        if (!this.useServer) {
            this.template('client/templates/html/index.html', 'client/index.html');
        }
    }

};

YeogurtGenerator.prototype.scripts = function scripts() {
    // client/scripts
    this.mkdir('client/scripts');

    this.template('client/scripts/app.js', 'client/scripts/app.js');

    if (this.jsOption === 'RequireJS') {
        this.template('client/scripts/main.js', 'client/scripts/main.js');
    }

    if (this.jsFramework === 'Backbone') {
        this.mkdir('client/templates');
        this.mkdir('client/scripts/views');

        this.template('client/scripts/backbone/routes.js', 'client/scripts/routes.js');
        if (this.jsTemplate === 'Lo-dash (Underscore)') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.jst');
        }
        else if (this.jsTemplate === 'Handlebars') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.hbs');
        }
        else if (this.jsTemplate === 'Jade') {
            this.template('client/scripts/backbone/templates/main.html', 'client/templates/main.jade');
        }

        this.template('client/scripts/backbone/views/main.js', 'client/scripts/views/main.js');
    }
    else if (this.jsFramework === 'Backbone + React') {
        this.mkdir('client/scripts/views');

        this.template('client/scripts/backbone/routes.js', 'client/scripts/routes.js');
        this.template('client/scripts/react/main.jsx', 'client/scripts/views/main.jsx');
        this.template('test/helpers/phantomjs-shims.js', 'test/helpers/phantomjs-shims.js');
    }
};

YeogurtGenerator.prototype.styles = function styles() {
    // client/styles
    this.mkdir('client/styles');

    if (this.useKss) {
        this.template('client/styles/styleguide.md', 'client/styles/styleguide.md');
    }

    if (this.cssOption !== 'None (Vanilla CSS)') {
        if (this.cssOption === 'Less') {
            this.template('client/styles/main.less', 'client/styles/main.less');
        }
        if (this.cssOption === 'Sass') {
            this.template('client/styles/main.less', 'client/styles/main.scss');
        }
    }
    else {
        this.template('client/styles/main.css', 'client/styles/main.css');
    }

};

YeogurtGenerator.prototype.server = function server() {
    if (this.useServer) {
        this.mkdir('server');
        this.mkdir('server/controllers');
        this.mkdir('server/config');
        this.mkdir('server/config/env');
        if (this.useServer && this.structure === 'Single Page Application') {
            this.mkdir('server/templates');
            this.mkdir('server/layouts');
            this.mkdir('server/modules');
        }
        if (this.structure === 'Single Page Application') {
            if (this.jsTemplate === 'React') {
                this.template('server/modules/reactRender.js','server/modules/reactRender.js');
            }
            else if (this.jsTemplate === 'Jade') {
                this.template('server/modules/jadeRender.js','server/modules/jadeRender.js');
            }
            else if (this.jsTemplate === 'Handlebars') {
                this.template('server/modules/hbsRender.js','server/modules/hbsRender.js');
            }
            this.template('client/templates/html/index.html', 'server/templates/index.html');
        }

        if (this.dbOption !== 'None') {
            this.template('server/config/database.js', 'server/config/database.js');
        }

        this.template('server/config/express.js', 'server/config/express.js');
        this.template('server/config/secrets.js', 'server/config/secrets.js');
        this.template('server/config/security.js', 'server/config/security.js');

        this.template('server/config/env/default.js', 'server/config/env/default.js');
        this.template('server/config/env/development.js', 'server/config/env/development.js');
        this.template('server/config/env/production.js', 'server/config/env/production.js');

        this.template('server/server.js', 'server.js');
        this.template('server/controllers/main.js', 'server/controllers/main.js');
        this.template('server/routes.js', 'server/routes.js');

    }
};

YeogurtGenerator.prototype.dashboard = function dashboard() {
    if (this.useDashboard) {
        this.mkdir('client/dashboard');
        this.mkdir('client/dashboard/images');
        this.copy('client/images/yeogurt-logo.png', 'client/dashboard/images/yeogurt-logo.png');
        this.copy('client/dashboard/template.hbs', 'client/dashboard/template.hbs');
    }
};

YeogurtGenerator.prototype.testing = function testing() {
    this.mkdir('test');
    this.mkdir('test/spec');
    if (this.jsOption === 'RequireJS') {
        this.copy('test/test-main.js', 'test/test-main.js');
    }
    this.template('test/spec/app-spec.js', 'test/spec/app-spec.js');
    this.template('karma.conf.js', 'karma.conf.js');
};

YeogurtGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    if (this.jshint) {
        this.template('jshintrc', '.jshintrc');
    }
};

YeogurtGenerator.prototype.extras = function extras() {

    if (this.htaccess) {
        this.copy('client/.htaccess', 'client/.htaccess');
    }

    this.copy('client/robots.txt', 'client/robots.txt');
    this.copy('client/humans.txt', 'client/humans.txt');
    this.copy('client/favicon.ico', 'client/favicon.ico');

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
