'use strict';

var path = require('path');
var Generator = require('yeoman-generator');
var _ = require('lodash');
const commandExists = require('command-exists').sync;
require('colors');

module.exports = class extends Generator {
  initializing() {
    this.pkg = require(path.join(__dirname, '../package.json'));
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
        default: 'Sample'
      },
      {
        type: 'list',
        name: 'htmlOption',
        message:
          'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
        choices: ['Jade', 'Nunjucks'],
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
          return answers.cssOption === 'sass';
        },
        type: 'list',
        name: 'sassSyntax',
        message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
        choices: ['Scss', 'Sass'],
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

    const copy = (input, output) => {
      this.fs.copy(this.templatePath(input), this.destinationPath(output));
    };

    const copyTpl = (input, output, data) => {
      this.fs.copyTpl(
        this.templatePath(input),
        this.destinationPath(output),
        data
      );
    };

    // Root files
    copyTpl('gulpfile.babel.js', 'gulpfile.babel.js', templateData);
    copyTpl('.babelrc', '.babelrc', templateData);
    copyTpl('_package.json', 'package.json', templateData);
    copyTpl('README.md', 'README.md', templateData);
    copy(
      'src/shared/_images/yeogurt-swirl.png',
      'src/_images/yeogurt-swirl.png'
    );

    copy('gitignore', '.gitignore');
    copy('gitattributes', '.gitattributes');

    copy('src/shared/robots.txt', 'src/robots.txt');
    copy('src/shared/favicon.ico', 'src/favicon.ico');

    copy('editorconfig', '.editorconfig');
    copyTpl('eslintrc', '.eslintrc', templateData);

    // README files
    copyTpl('src/shared/_data/README.md', 'src/_data/README.md', templateData);
    copyTpl(
      'src/shared/_modules/README.md',
      'src/_modules/README.md',
      templateData
    );
    copyTpl(
      'src/shared/_layouts/README.md',
      'src/_layouts/README.md',
      templateData
    );
    copyTpl(
      'src/shared/_scripts/README.md',
      'src/_scripts/README.md',
      templateData
    );
    copyTpl(
      'src/shared/_styles/README.md',
      'src/_styles/README.md',
      templateData
    );
    copyTpl(
      'src/shared/_images/README.md',
      'src/_images/README.md',
      templateData
    );
    copyTpl('src/shared/README.md', 'src/README.md', templateData);

    // Scripts (JS)
    copyTpl(
      'src/shared/_scripts/main.js',
      'src/_scripts/main.js',
      templateData
    );
    copyTpl(
      'src/shared/_modules/link/link.js',
      'src/_modules/link/link.js',
      templateData
    );

    // Gulp Tasks
    copyTpl('gulp/browserify.js', 'gulp/browserify.js', templateData);
    copyTpl('gulp/browserSync.js', 'gulp/browserSync.js', templateData);
    copyTpl('gulp/clean.js', 'gulp/clean.js', templateData);
    copyTpl('gulp/copy.js', 'gulp/copy.js', templateData);
    copyTpl('gulp/eslint.js', 'gulp/eslint.js', templateData);
    copyTpl('gulp/imagemin.js', 'gulp/imagemin.js', templateData);
    copyTpl('gulp/watch.js', 'gulp/watch.js', templateData);

    if (this.htmlOption === 'jade') {
      copyTpl('gulp/jade.js', 'gulp/jade.js', templateData);
    } else if (this.htmlOption === 'nunjucks') {
      copyTpl('gulp/nunjucks.js', 'gulp/nunjucks.js', templateData);
    }

    if (this.cssOption === 'sass') {
      copyTpl('gulp/sass.js', 'gulp/sass.js', templateData);
    } else if (this.cssOption === 'less') {
      copyTpl('gulp/less.js', 'gulp/less.js', templateData);
    }
    if (this.cssOption === 'stylus') {
      copyTpl('gulp/stylus.js', 'gulp/stylus.js', templateData);
    }

    // Markup (HTML Preprocessors)
    if (this.htmlOption === 'jade') {
      copyTpl(
        'src/static/jade/_layouts/base.jade',
        'src/_layouts/base.jade',
        templateData
      );
      copyTpl(
        'src/static/jade/_modules/link/link.jade',
        'src/_modules/link/link.jade',
        templateData
      );
      copyTpl('src/static/jade/index.jade', 'src/index.jade', templateData);
    }
    if (this.htmlOption === 'nunjucks') {
      copyTpl(
        'src/static/nunjucks/_layouts/base.nunjucks',
        'src/_layouts/base.nunjucks',
        templateData
      );
      copyTpl(
        'src/static/nunjucks/_modules/link/link.nunjucks',
        'src/_modules/link/link.nunjucks',
        templateData
      );
      copyTpl(
        'src/static/nunjucks/index.nunjucks',
        'src/index.nunjucks',
        templateData
      );
    }

    // Styling (CSS Preprocessors)
    if (this.cssOption === 'less') {
      copyTpl(
        'src/shared/_styles/main.less',
        'src/_styles/main.less',
        templateData
      );
      copyTpl(
        'src/shared/_styles/link/link.less',
        'src/_modules/link/link.less',
        templateData
      );
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        copyTpl(
          'src/shared/_styles/main.sass',
          'src/_styles/main.sass',
          templateData
        );
        copyTpl(
          'src/shared/_styles/link/link.sass',
          'src/_modules/link/link.sass',
          templateData
        );
      } else {
        copyTpl(
          'src/shared/_styles/main.scss',
          'src/_styles/main.scss',
          templateData
        );
        copyTpl(
          'src/shared/_styles/link/link.scss',
          'src/_modules/link/link.scss',
          templateData
        );
      }
    }
    if (this.cssOption === 'stylus') {
      copyTpl(
        'src/shared/_styles/main.styl',
        'src/_styles/main.styl',
        templateData
      );
      copyTpl(
        'src/shared/_styles/link/link.styl',
        'src/_modules/link/link.styl',
        templateData
      );
    }

    // Testing
    if (this.testFramework !== 'none') {
      copyTpl('test/karma/karma.conf.js', 'karma.conf.js', templateData);
      copyTpl(
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
