/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;
describe('Static Site page sub-generator', function() {
  describe('Create page files when using Static Jade', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'jade',
        testFramework: 'jasmine',
        jsOption: 'browserify',
        cssOption: 'stylus'
      });
    });
    describe('Using Browserify', function() {
      it('Using Jasmine', function() {
        // Filename
        var pageName = 'mypage';

        var filesToTest = ['src/' + pageName + '/' + 'index.jade'];
        var fileContentToTest = [
          ['src/' + pageName + '/' + 'index.jade', /extends/i]
        ];

        return createSubGenerator('page')
          .withArguments([pageName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('With custom layout', function() {
        // Filename
        var pageName = 'mypage';

        var filesToTest = ['src/' + pageName + '/' + 'index.jade'];
        var fileContentToTest = [
          ['src/' + pageName + '/' + 'index.jade', /extends/i],
          ['src/' + pageName + '/' + 'index.jade', /mypage/i]
        ];

        return createSubGenerator('page', { layout: pageName })
          .withArguments([pageName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
    });
  });

  describe('Create page files when using Static Nunjucks', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'nunjucks',
        testFramework: 'jasmine',
        jsOption: 'browserify',
        cssOption: 'stylus'
      });
    });
    describe('Using Browserify', function() {
      it('Using Jasmine', function() {
        // Filename
        var pageName = 'mypage';

        var filesToTest = ['src/' + pageName + '/' + 'index.nunjucks'];
        var fileContentToTest = [
          ['src/' + pageName + '/' + 'index.nunjucks', /extends/i],
          ['src/' + pageName + '/' + 'index.nunjucks', /mypage/i]
        ];

        return createSubGenerator('page')
          .withArguments([pageName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('With custom layout', function() {
        // Filename
        var pageName = 'mypage';

        var filesToTest = ['src/' + pageName + '/' + 'index.nunjucks'];
        var fileContentToTest = [
          ['src/' + pageName + '/' + 'index.nunjucks', /extends/i],
          ['src/' + pageName + '/' + 'index.nunjucks', /mypage/i]
        ];

        return createSubGenerator('page', { layout: pageName })
          .withArguments([pageName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          testFramework: 'jasmine',
          jsOption: 'browserify',
          cssOption: 'stylus'
        });
      });
    });
  });
});
