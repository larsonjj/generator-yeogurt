/**
 * Create prompts for client info
 */

'use strict';

var _ = require('lodash');

var clientPrompts = function clientPrompts() {
  this.clientPrompts = {};
  var prompts = {
    htmlOption: {
      type: 'list',
      name: 'htmlOption',
      message: 'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
      choices: ['Jade', 'Nunjucks'],
      filter: function(val) {
        var filterMap = {
          'Jade': 'jade',
          'Nunjucks': 'nunjucks'
        };

        return filterMap[val];
      }
    },
    jsPreprocessor: {
      type: 'list',
      name: 'jsPreprocessor',
      message: 'What ' + 'JavaScript preprocessor'.blue + ' would you like to use?',
      choices: ['None', 'ES6 (Using Babel)'],
      filter: function(val) {
        var filterMap = {
          'None': 'none',
          'ES6 (Using Babel)': 'es6'
        };

        return filterMap[val];
      }
    },
    cssOption: {
      type: 'list',
      name: 'cssOption',
      message: 'What would you like to use to ' + 'write styles'.blue + '?',
      choices: ['Sass', 'Less', 'Stylus'],
      filter: function(val) {
        var filterMap = {
          'Sass': 'sass',
          'Less': 'less',
          'Stylus': 'stylus'
        };

        return filterMap[val];
      }
    },
    sassSyntax: {
      when: function(answers) {
        return answers.cssOption === 'sass';
      },
      type: 'list',
      name: 'sassSyntax',
      message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
      choices: ['Scss', 'Sass'],
      filter: function(val) {
        var filterMap = {
          'Scss': 'scss',
          'Sass': 'sass'
        };

        return filterMap[val];
      }
    }
  };
  var configPrompts = [];

  if (this.existingConfig) {
    var config = this.config.get('config');

    if (config.htmlOption) {
      this.clientPrompts.htmlOption = config.htmlOption;
    }
    else {
      configPrompts.push(prompts.htmlOption);
    }

    if (config.jsPreprocessor) {
      this.clientPrompts.jsPreprocessor = config.jsPreprocessor;
    }
    else {
      configPrompts.push(prompts.jsPreprocessor);
    }

    if (config.cssOption) {
      this.clientPrompts.cssOption = config.cssOption;
    }
    else {
      configPrompts.push(cssOption);
    }

    if (config.sassSyntax) {
      this.clientPrompts.sassSyntax = config.sassSyntax;
    }
    else {
      configPrompts.push(sassSyntax);
    }

    if(!configPrompts.length) return;
  }
  else {
    configPrompts = _.values(prompts);
  }

  var cb = this.async();

  this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

  this.prompt(configPrompts, function(answers) {
    this.clientPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = clientPrompts;
