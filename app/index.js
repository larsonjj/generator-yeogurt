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
        when: function(props) { return (/Single Page Application/i).test(props.structure); },
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
        when: function(props) { return (/Static Site/i).test(props.structure); },
        type: 'list',
        name: 'htmlOption',
        message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Swig', 'None (Vanilla HTML)']
    }, {
        when: function(props) { return (/Single Page Application/i).test(props.structure); },
        type: 'list',
        name: 'jsFramework',
        message: 'Which ' + 'JavaScript framework and/or library'.blue + ' would you like to use?',
        choices: ['Backbone + React', 'Backbone']
    }, {
        when: function(props) {
            if (props.jsFramework === 'Backbone' && !props.useServer) {
                return true;
            }
            else {
                return false;
            }
        },
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Lo-dash (Underscore)', 'Handlebars', 'Jade']
    }, {
        when: function(props) {
            if (props.jsFramework === 'Backbone' && props.useServer) {
                return true;
            }
            else {
                return false;
            }
        },
        type: 'list',
        name: 'jsTemplate',
        message: 'Which ' + 'JavaScript templating library'.blue + ' would you like to use?',
        choices: ['Handlebars', 'Jade']
    }, {
        when: function(props) {
            if ((/Single Page Application/i).test(props.structure) && props.useServer && props.jsFramework !== 'Backbone + React' || (/Single Page Application/i).test(props.structure) && !props.useServer) {
                return true;
            }
            else {
                return false;
            }
        },
        type: 'list',
        name: 'jsOption',
        message: 'Which ' + 'JavaScript module library'.blue + ' would you like to use?',
        choices: ['RequireJS', 'Browserify']
    }, {
        when: function(props) { return (/Static Site/i).test(props.structure); },
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
        choices: ['SASS', 'LESS', 'None (Vanilla CSS)']
    }, {
        when: function(props) { return (/SASS/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useBourbon',
        message: 'Would you like to use the ' + 'Bourbon Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(props) { return (/LESS/i).test(props.cssOption); },
        type: 'confirm',
        name: 'useLesshat',
        message: 'Would you like to use the ' + 'Lesshat Mixin Library'.blue + '?',
        default: true
    }, {
        when: function(props) { return (/SASS/i).test(props.cssOption) || (/None/i).test(props.cssOption); },
        type: 'list',
        name: 'cssFramework',
        message: 'Which CSS ' + 'framework'.blue + ' would you like to use?',
        choices: ['Bootstrap', 'Foundation', 'None']
    }, {
        when: function(props) { return (/LESS/i).test(props.cssOption); },
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
        this.html5Addons = props.html5Addons;
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
        var html5Addons = this.html5Addons;

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

    // dev/
    this.mkdir('dev');

    // dev/images
    this.copy('dev/images/yeogurt-swirl.png', 'dev/images/yeogurt-swirl.png');

};

YeogurtGenerator.prototype.docs = function docs() {
    if (this.useKss) {
        this.mkdir('dev/docs');
        this.mkdir('dev/docs/styleguide');
        this.template('dev/docs/styleguide/index.html', 'dev/docs/styleguide/index.html');
        this.template('dev/docs/styleguide/public/kss.js', 'dev/docs/styleguide/public/kss.js');
        this.template('dev/docs/styleguide/public/kss.less', 'dev/docs/styleguide/public/kss.less');
        this.template('dev/docs/styleguide/public/less.js', 'dev/docs/styleguide/public/less.js');
        this.template('dev/docs/styleguide/public/markdown.less', 'dev/docs/styleguide/public/markdown.less');
        this.copy('dev/docs/styleguide/public/prettify.js', 'dev/docs/styleguide/public/prettify.js');
        this.copy('dev/docs/styleguide/public/classlist-shim.js', 'dev/docs/styleguide/public/classlist-shim.js');
        this.copy('dev/images/yeogurt-logo.png', 'dev/docs/styleguide/public/images/yeogurt-logo.png');
    }
    if (this.useJsdoc) {
        this.directory('dev/docs/api', 'dev/docs/api');
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
    if (this.cssOption === 'SASS') {
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
        this.template('grunt/config/uncss.js', 'grunt/config/uncss.js');
        this.template('grunt/config/cssmin.js', 'grunt/config/cssmin.js');
    }
    this.template('grunt/config/usemin.js', 'grunt/config/usemin.js');
    this.template('grunt/config/watch.js', 'grunt/config/watch.js');
    if (this.useServer) {
        this.template('grunt/config/express.js', 'grunt/config/express.js');
    }

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

    if (this.htmlOption === 'Jade') {
        this.mkdir('dev/templates');
        this.mkdir('dev/templates/layouts');
        this.template('dev/templates/jade/index.jade', 'dev/templates/index.jade');
        this.template('dev/templates/jade/layouts/base.jade', 'dev/templates/layouts/base.jade');
    }
    else if (this.htmlOption === 'Swig') {
        this.mkdir('dev/templates');
        this.mkdir('dev/templates/layouts');
        this.template('dev/templates/swig/index.swig', 'dev/templates/index.swig');
        this.template('dev/templates/swig/layouts/base.swig', 'dev/templates/layouts/base.swig');
    }
    else if (this.htmlOption === 'None (Vanilla HTML)') {
        this.template('dev/templates/html/index.html', 'dev/index.html');
    }

    if (this.structure === 'Single Page Application') {
        if (!this.useServer) {
            this.template('dev/templates/html/index.html', 'dev/index.html');
        }
    }

};

YeogurtGenerator.prototype.scripts = function scripts() {
    // dev/scripts
    this.mkdir('dev/scripts');

    this.template('dev/scripts/app.js', 'dev/scripts/app.js');

    if (this.jsOption === 'Browserify' || this.jsOption === 'RequireJS') {
        this.template('dev/scripts/main.js', 'dev/scripts/main.js');
    }

    if (this.jsFramework === 'Backbone') {
        this.mkdir('dev/scripts/routes');
        this.mkdir('dev/templates');
        this.mkdir('dev/scripts/views');

        this.template('dev/scripts/backbone/routes/home.js', 'dev/scripts/routes/home.js');
        if (this.jsTemplate === 'Lo-dash (Underscore)') {
            this.template('dev/scripts/backbone/templates/home.html', 'dev/templates/home.jst');
        }
        else if (this.jsTemplate === 'Handlebars') {
            this.template('dev/scripts/backbone/templates/home.html', 'dev/templates/home.hbs');
        }
        else if (this.jsTemplate === 'Jade') {
            this.template('dev/scripts/backbone/templates/home.html', 'dev/templates/home.jade');
        }

        this.template('dev/scripts/backbone/views/home.js', 'dev/scripts/views/home.js');
    }
    else if (this.jsFramework === 'Backbone + React') {
        this.mkdir('dev/scripts/routes');
        this.mkdir('dev/scripts/views');

        this.template('dev/scripts/backbone/routes/home.js', 'dev/scripts/routes/home.js');
        this.template('dev/scripts/react/home.jsx', 'dev/scripts/views/home.jsx');
    }
};

YeogurtGenerator.prototype.styles = function styles() {
    // dev/styles
    this.mkdir('dev/styles');

    if (this.useKss) {
        this.template('dev/styles/styleguide.md', 'dev/styles/styleguide.md');
    }

    if (this.cssOption !== 'None (Vanilla CSS)') {
        if (this.cssOption === 'LESS') {
            this.mkdir('dev/styles/base');

            this.template('dev/styles/base/_global.less', 'dev/styles/base/_global.less');
            this.template('dev/styles/base/_mixins.less', 'dev/styles/base/_mixins.less');
            this.template('dev/styles/base/_variables.less', 'dev/styles/base/_variables.less');
            this.template('dev/styles/base/_reset.less', 'dev/styles/base/_reset.less');

            this.template('dev/styles/main.less', 'dev/styles/main.less');
            if (this.ieSupport) {
                this.template('dev/styles/base/_print.less', 'dev/styles/print.less');
                this.template('dev/styles/base/_ie8.less', 'dev/styles/base/_ie8.less');
            }
            else if (!this.useBootstrap) {
                this.template('dev/styles/base/_print.less', 'dev/styles/base/_print.less');
            }
        }
        if (this.cssOption === 'SASS') {
            this.mkdir('dev/styles/base');
            this.template('dev/styles/base/_mixins.less', 'dev/styles/base/_mixins.scss');
            this.template('dev/styles/base/_variables.less', 'dev/styles/base/_variables.scss');
            this.template('dev/styles/base/_reset.less', 'dev/styles/base/_reset.scss');

            this.template('dev/styles/base/_global.less', 'dev/styles/base/_global.scss');

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

YeogurtGenerator.prototype.server = function server() {
    if (this.useServer) {
        this.mkdir('lib');
        this.mkdir('lib/controllers');
        this.mkdir('lib/views');
        // this.mkdir('lib/models');
        this.mkdir('lib/routes');
        if (this.useServer) {
            this.mkdir('lib/modules');
        }
        if (this.jsTemplate === 'React') {
            this.template('server/lib/modules/reactRender.js','lib/modules/reactRender.js');
        }
        else if (this.jsTemplate === 'Jade') {
            this.template('server/lib/modules/jadeRender.js','lib/modules/jadeRender.js');
        }
        else if (this.jsTemplate === 'Handlebars') {
            this.template('server/lib/modules/hbsRender.js','lib/modules/hbsRender.js');
        }

        if (this.dbOption !== 'None') {
            this.template('server/lib/config/database.js', 'lib/config/database.js');
        }

        this.template('dev/templates/html/index.html', 'lib/views/index.html');

        this.template('server/lib/config/express.js', 'lib/config/express.js');
        this.template('server/lib/config/passport.js', 'lib/config/passport.js');
        this.template('server/lib/config/secrets.js', 'lib/config/secrets.js');
        this.template('server/lib/config/security.js', 'lib/config/security.js');
        this.template('server/lib/config/settings.js', 'lib/config/settings.js');

        this.template('server/app.js', 'app.js');
        this.template('server/lib/controllers/home.js', 'lib/controllers/home.js');
        this.template('server/lib/routes/home.js', 'lib/routes/home.js');

    }
};

YeogurtGenerator.prototype.dashboard = function dashboard() {
    if (this.useDashboard) {
        this.mkdir('dev/dashboard');
        this.mkdir('dev/dashboard/images');
        this.copy('dev/images/yeogurt-logo.png', 'dev/dashboard/images/yeogurt-logo.png');
        this.copy('dev/dashboard/template.hbs', 'dev/dashboard/template.hbs');
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
        this.copy('dev/.htaccess', 'dev/.htaccess');
    }

    this.copy('dev/robots.txt', 'dev/robots.txt');
    this.copy('dev/humans.txt', 'dev/humans.txt');
    this.copy('dev/favicon.ico', 'dev/favicon.ico');

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
