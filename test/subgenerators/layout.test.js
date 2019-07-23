/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Static Site layout sub-generator', function() {
  describe('Create layout files when using Static Jade', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'jade'
      });
    });
    describe('Client layouts', function() {
      it('Handles defaults', function() {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '.jade'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '.jade', /extend/i]
        ];

        return createSubGenerator('layout')
          .withArguments([layout])
          .withPrompts({
            htmlOption: 'jade',
            cssOption: 'sass',
            sassSyntax: 'scss'
          })
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('Handles custom layout', function() {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '.jade'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '.jade', /extend/i],
          ['src/_layouts/' + layout + '.jade', /mylayout/i]
        ];

        return createSubGenerator('layout')
          .withArguments([layout])
          .withPrompts({
            htmlOption: 'jade',
            cssOption: 'sass',
            sassSyntax: 'scss'
          })
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
    });
  });

  describe('Create layout files when using Static Nunjucks', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'nunjucks'
      });
    });
    describe('Client layouts', function() {
      it('Handles defaults', function() {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '.nunjucks'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '.nunjucks', /extends/i]
        ];

        return createSubGenerator('layout')
          .withArguments([layout])
          .withPrompts({
            htmlOption: 'nunjucks',
            cssOption: 'sass',
            sassSyntax: 'scss'
          })
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      it('Handles custom layout', function() {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '.nunjucks'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '.nunjucks', /extend/i],
          ['src/_layouts/' + layout + '.nunjucks', /mylayout/i]
        ];

        return createSubGenerator('layout')
          .withArguments([layout])
          .withPrompts({
            htmlOption: 'nunjucks',
            cssOption: 'sass',
            sassSyntax: 'scss'
          })
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
    });
  });
});
