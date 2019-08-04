'use strict';

var path = require('path');
var Generator = require('yeoman-generator');
var _ = require('lodash');
var commandExists = require('command-exists').sync;
var copyTpl = require('../helpers/copy').copyTpl;
var copy = require('../helpers/copy').copy;
require('colors');

module.exports = class extends Generator {
  initializing() {
    this.pkg = require(path.join(__dirname, '../../package.json'));
    // Setup copy helpers
    this.copy = copy.bind(this);
    this.copyTpl = copyTpl.bind(this);
  }

  prompting() {
    var yeogurtLogo =
      '' +
      '                                    _   \n'.red +
      '  ' +
      'Welcome to'.green +
      '                       | |  \n'.red +
      '  _   _  ___  ___   __ _ _   _ _ __| |_ \n'.red +
      " | | | |/ _ \\/ _ \\ / _` | | | | '__| __|\n".red +
      ' | |_| |  __/ (_) | (_| | |_| | |  | |_ \n'.red +
      '  \\__, |\\___|\\___/ \\__, |\\__,_|_|   \\__|\n'.red +
      '   __/ |            __/ |\n'.red +
      '  |___/            |___/  '.red +
      '               \n';

    // have Yeogurt greet the user.
    this.log(yeogurtLogo);

    const existingYoConfig = this.config.get('config');

    return this.prompt([
      {
        type: 'confirm',
        name: 'existingConfig',
        message:
          'Existing .yo-rc configuration found, would you like to use it?',
        default: true,
        when: function() {
          return Boolean(existingYoConfig);
        }
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What would you like to' + ' name your project'.blue + '?',
        default: 'Sample',
        when: function(answers) {
          return !answers.existingConfig;
        }
      },
      {
        type: 'list',
        name: 'htmlOption',
        message:
          'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Nunjucks'],
        when: function(answers) {
          return !answers.existingConfig;
        },
        filter: function(val) {
          var filterMap = {
            Jade: 'jade',
            Nunjucks: 'nunjucks'
          };

          return filterMap[val];
        }
      },
      {
        type: 'list',
        name: 'cssOption',
        message: 'What would you like to use to ' + 'write styles'.blue + '?',
        choices: ['Sass', 'Less', 'Stylus'],
        when: function(answers) {
          return !answers.existingConfig;
        },
        filter: function(val) {
          var filterMap = {
            Sass: 'sass',
            Less: 'less',
            Stylus: 'stylus'
          };

          return filterMap[val];
        }
      },
      {
        when: function(answers) {
          return answers.cssOption === 'sass' && !answers.existingConfig;
        },
        type: 'list',
        name: 'sassSyntax',
        message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
        choices: ['Scss', 'Sass'],
        when: function(answers) {
          return !answers.existingConfig;
        },
        filter: function(val) {
          var filterMap = {
            Scss: 'scss',
            Sass: 'sass'
          };

          return filterMap[val];
        }
      },
      {
        type: 'list',
        name: 'testFramework',
        message:
          'Which JavaScript ' +
          'testing framework'.blue +
          ' would you like to use?',
        choices: ['Jasmine', 'Mocha', 'None'],
        when: function(answers) {
          return !answers.existingConfig;
        },
        filter: function(val) {
          var filterMap = {
            Jasmine: 'jasmine',
            Mocha: 'mocha',
            None: 'none'
          };

          return filterMap[val];
        }
      }
    ]).then(answers => {
      let _answers = answers.existingConfig
        ? this.config.get('config')
        : answers;

      // Assign each answer property to `this` context to give the generator access to it

      // Project Info
      this.projectName = _answers.projectName;

      // Client
      this.htmlOption = _answers.htmlOption;
      this.jsFramework = _answers.jsFramework;
      this.jsOption = _answers.jsOption;
      this.cssOption = _answers.cssOption;
      this.sassSyntax = _answers.sassSyntax;
      this.extras = _answers.extras;

      // Default to mocha for testing (cannot use jasmine server-side)
      _answers.testFramework = _answers.testFramework || 'mocha';

      // Testing
      this.testFramework = _answers.testFramework;

      // Default jsOption to Browserify
      this.jsOption = _answers.jsOption || 'browserify';

      // If user chooses to use exsiting yo-rc file, then skip prompts
      if (!answers.existingConfig) {
        // Create .yo-rc.json file
        this.config.set('config', _answers);
      }

      this.config.set('version', this.pkg.version);
      this.config.save();
    });
  }

  writing() {
    const templateData = {
      _: _,
      appname: this.appname,
      date: new Date().toISOString().split('T')[0],
      pkg: this.pkg,
      projectName: this.projectName,
      htmlOption: this.htmlOption,
      jsFramework: this.jsFramework,
      jsOption: this.jsOption,
      cssOption: this.cssOption,
      sassSyntax: this.sassSyntax,
      extras: this.extras,
      testFramework: this.testFramework,
      jsOption: this.jsOption
    };

    // Root files
    this.copyTpl('gulpfile.babel.js', 'gulpfile.babel.js', templateData);
    this.copyTpl('.babelrc', '.babelrc', templateData);
    this.copyTpl('_package.json', 'package.json', templateData);
    this.copyTpl('README.md', 'README.md', templateData);
    this.copy(
      'src/shared/_images/yeogurt-swirl.png',
      'src/_images/yeogurt-swirl.png'
    );

    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');

    this.copy('src/shared/robots.txt', 'src/robots.txt');
    this.copy('src/shared/favicon.ico', 'src/favicon.ico');

    this.copy('editorconfig', '.editorconfig');
    this.copyTpl('eslintrc', '.eslintrc', templateData);

    // README files
    this.copyTpl(
      'src/shared/_data/README.md',
      'src/_data/README.md',
      templateData
    );
    this.copyTpl(
      'src/shared/_modules/README.md',
      'src/_modules/README.md',
      templateData
    );
    this.copyTpl(
      'src/shared/_layouts/README.md',
      'src/_layouts/README.md',
      templateData
    );
    this.copyTpl(
      'src/shared/_scripts/README.md',
      'src/_scripts/README.md',
      templateData
    );
    this.copyTpl(
      'src/shared/_styles/README.md',
      'src/_styles/README.md',
      templateData
    );
    this.copyTpl(
      'src/shared/_images/README.md',
      'src/_images/README.md',
      templateData
    );
    this.copyTpl('src/shared/README.md', 'src/README.md', templateData);

    // Scripts (JS)
    this.copyTpl(
      'src/shared/_scripts/main.js',
      'src/_scripts/main.js',
      templateData
    );
    this.copyTpl(
      'src/shared/_modules/link/link.js',
      'src/_modules/link/link.js',
      templateData
    );

    // Gulp Tasks
    this.copyTpl('gulp/browserify.js', 'gulp/browserify.js', templateData);
    this.copyTpl('gulp/browserSync.js', 'gulp/browserSync.js', templateData);
    this.copyTpl('gulp/clean.js', 'gulp/clean.js', templateData);
    this.copyTpl('gulp/copy.js', 'gulp/copy.js', templateData);
    this.copyTpl('gulp/eslint.js', 'gulp/eslint.js', templateData);
    this.copyTpl('gulp/imagemin.js', 'gulp/imagemin.js', templateData);
    this.copyTpl('gulp/watch.js', 'gulp/watch.js', templateData);

    if (this.htmlOption === 'jade') {
      this.copyTpl('gulp/jade.js', 'gulp/jade.js', templateData);
    } else if (this.htmlOption === 'nunjucks') {
      this.copyTpl('gulp/nunjucks.js', 'gulp/nunjucks.js', templateData);
    }

    if (this.cssOption === 'sass') {
      this.copyTpl('gulp/sass.js', 'gulp/sass.js', templateData);
    } else if (this.cssOption === 'less') {
      this.copyTpl('gulp/less.js', 'gulp/less.js', templateData);
    }
    if (this.cssOption === 'stylus') {
      this.copyTpl('gulp/stylus.js', 'gulp/stylus.js', templateData);
    }

    // Markup (HTML Preprocessors)
    if (this.htmlOption === 'jade') {
      this.copyTpl(
        'src/static/jade/_layouts/base.jade',
        'src/_layouts/base.jade',
        templateData
      );
      this.copyTpl(
        'src/static/jade/_modules/link/link.jade',
        'src/_modules/link/link.jade',
        templateData
      );
      this.copyTpl(
        'src/static/jade/index.jade',
        'src/index.jade',
        templateData
      );
    }
    if (this.htmlOption === 'nunjucks') {
      this.copyTpl(
        'src/static/nunjucks/_layouts/base.nunjucks',
        'src/_layouts/base.nunjucks',
        templateData
      );
      this.copyTpl(
        'src/static/nunjucks/_modules/link/link.nunjucks',
        'src/_modules/link/link.nunjucks',
        templateData
      );
      this.copyTpl(
        'src/static/nunjucks/index.nunjucks',
        'src/index.nunjucks',
        templateData
      );
    }

    // Styling (CSS Preprocessors)
    if (this.cssOption === 'less') {
      this.copyTpl(
        'src/shared/_styles/main.less',
        'src/_styles/main.less',
        templateData
      );
      this.copyTpl(
        'src/shared/_styles/link/link.less',
        'src/_modules/link/link.less',
        templateData
      );
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.copyTpl(
          'src/shared/_styles/main.sass',
          'src/_styles/main.sass',
          templateData
        );
        this.copyTpl(
          'src/shared/_styles/link/link.sass',
          'src/_modules/link/link.sass',
          templateData
        );
      } else {
        this.copyTpl(
          'src/shared/_styles/main.scss',
          'src/_styles/main.scss',
          templateData
        );
        this.copyTpl(
          'src/shared/_styles/link/link.scss',
          'src/_modules/link/link.scss',
          templateData
        );
      }
    }
    if (this.cssOption === 'stylus') {
      this.copyTpl(
        'src/shared/_styles/main.styl',
        'src/_styles/main.styl',
        templateData
      );
      this.copyTpl(
        'src/shared/_styles/link/link.styl',
        'src/_modules/link/link.styl',
        templateData
      );
    }

    // Testing
    if (this.testFramework !== 'none') {
      this.copyTpl('test/karma/karma.conf.js', 'karma.conf.js', templateData);
      this.copyTpl(
        'src/shared/_modules/link/tests/link.test.js',
        'src/_modules/link/tests/link.test.js',
        templateData
      );
    }

    // Install dependencies
    const hasYarn = commandExists('yarn');
    this.installDependencies({
      npm: !hasYarn,
      yarn: hasYarn,
      bower: false,
      skipInstall: this.options['skip-install'],
      callback: function() {
        self.log(
          '\n' +
            'Everything looks ready!'.blue +
            ' Get started by running "' +
            'gulp serve'.green +
            '".\n'
        );
      }
    });
  }
};
