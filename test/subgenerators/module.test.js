/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;

describe('Static Site module sub-generator', function() {
  describe('Create module files when using Static Pug', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'pug',
        testFramework: 'jasmine',
        jsOption: 'browserify',
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
    });
    describe('Using Browserify', function() {
      it('Using Jasmine', function() {
        // Filename
        var moduleName = 'mymodule';

        var filesToTest = [
          'src/_modules/' + moduleName + '/tests/' + moduleName + '.test.js',
          'src/_modules/' + moduleName + '/' + moduleName + '.js',
          'src/_modules/' + moduleName + '/' + moduleName + '.pug',
          'src/_modules/' + moduleName + '/' + moduleName + '.sass'
        ];
        var fileContentToTest = [
          ['src/_modules/' + moduleName + '/' + moduleName + '.js', /export/i],
          [
            'src/_modules/' + moduleName + '/tests/' + moduleName + '.test.js',
            /describe/i
          ]
        ];

        return createSubGenerator('module')
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('is Atomic', function() {
        // Filename
        var moduleName = 'mymodule';

        var filesToTest = [
          'src/_modules/atoms/' +
            moduleName +
            '/tests/' +
            moduleName +
            '.test.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.pug',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
        ];
        var fileContentToTest = [
          [
            'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
            /export/i
          ],
          [
            'src/_modules/atoms/' +
              moduleName +
              '/tests/' +
              moduleName +
              '.test.js',
            /describe/i
          ]
        ];

        return createSubGenerator('module', { atomic: 'atom' })
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('is Atomic but not valid', function() {
        // Filename
        var moduleName = 'mymodule';

        var filesToTest = [
          'src/_modules/atoms/' +
            moduleName +
            '/tests/' +
            moduleName +
            '.test.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.pug',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
        ];

        return createSubGenerator('module', { atomic: '' })
          .withArguments([moduleName])
          .then(function() {
            assert.noFile(filesToTest);
          });
      });
      it('is Atomic and has multiple directories', function() {
        // Filename
        var moduleName = 'really/cool/mymodule';

        var filesToTest = [
          'src/_modules/atoms/' +
            moduleName +
            '/tests/' +
            moduleName +
            '.test.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.pug',
          'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
        ];

        return createSubGenerator('module', { atomic: 'atom' })
          .withArguments([moduleName])
          .then(function() {
            assert.noFile(filesToTest);
          });
      });
    });
  });

  describe('Create module files when using Static Nunjucks', function() {
    describe('Using Browserify', function() {
      beforeEach(function() {
        return createAppGenerator().withPrompts({
          existingConfig: true,
          htmlOption: 'nunjucks',
          testFramework: 'jasmine',
          jsOption: 'browserify',
          cssOption: 'sass'
        });
      });
      it('Using Jasmine', function() {
        // Filename
        var moduleName = 'mymodule';

        var filesToTest = [
          'src/_modules/' + moduleName + '/tests/' + moduleName + '.test.js',
          'src/_modules/' + moduleName + '/' + moduleName + '.js',
          'src/_modules/' + moduleName + '/' + moduleName + '.nunjucks',
          'src/_modules/' + moduleName + '/' + moduleName + '.scss'
        ];
        var fileContentToTest = [
          ['src/_modules/' + moduleName + '/' + moduleName + '.js', /export/i],
          [
            'src/_modules/' + moduleName + '/tests/' + moduleName + '.test.js',
            /describe/i
          ]
        ];

        return createSubGenerator('module')
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
    });
  });
  describe('Handles Stylesheet Preprocessors', function() {
    describe('Handles Sass', function() {
      beforeEach(function() {
        return createAppGenerator().withPrompts({
          existingConfig: true,
          htmlOption: 'nunjucks',
          jsOption: 'browserify',
          cssOption: 'sass'
        });
      });
      it('With .scss extension', function() {
        // Filename
        var moduleName = 'mymodule';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_modules/' + moduleName + '/' + moduleName + '.scss'
        ];

        createAppGenerator().withPrompts({
          existingConfig: true,
          htmlOption: 'nunjucks',
          jsOption: 'browserify',
          cssOption: 'sass',
          sassSyntax: 'scss'
        });

        return createSubGenerator('module')
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
          });
      });
    });
    describe('Handles Sass', function() {
      beforeEach(function() {
        return createAppGenerator().withPrompts({
          existingConfig: true,
          htmlOption: 'nunjucks',
          jsOption: 'browserify',
          cssOption: 'sass',
          sassSyntax: 'sass'
        });
      });
      it('With .sass extension', function() {
        // Filename
        var moduleName = 'mymodule';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_modules/' + moduleName + '/' + moduleName + '.sass'
        ];

        return createSubGenerator('module')
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
          });
      });
    });
    describe('Handles Less', function() {
      beforeEach(function() {
        return createAppGenerator().withPrompts({
          existingConfig: true,
          htmlOption: 'nunjucks',
          jsOption: 'browserify',
          cssOption: 'less'
        });
      });
      it('With .less extension', function() {
        // Filename
        var moduleName = 'mymodule';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_modules/' + moduleName + '/' + moduleName + '.less'
        ];

        return createSubGenerator('module')
          .withArguments([moduleName])
          .then(function() {
            assert.file(filesToTest);
          });
      });
      describe('Handles stylus', function() {
        beforeEach(function() {
          return createAppGenerator().withPrompts({
            existingConfig: true,
            htmlOption: 'nunjucks',
            jsOption: 'browserify',
            cssOption: 'stylus'
          });
        });
        it('With .styl extension', function() {
          // Filename
          var moduleName = 'mymodule';
          var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'src/_modules/' + moduleName + '/' + moduleName + '.styl'
          ];

          return createSubGenerator('module')
            .withArguments([moduleName])
            .then(function() {
              assert.file(filesToTest);
            });
        });
      });
    });
  });
});
