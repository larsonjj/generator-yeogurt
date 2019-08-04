/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Static Site layout sub-generator', function() {
  describe('Create layout files when using Static Pug', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'pug'
      });
    });
    it('Handles defaults', function() {
      // Filename
      var layout = 'mylayout';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_layouts/' + layout + '.pug'
      ];
      var fileContentToTest = [['src/_layouts/' + layout + '.pug', /extend/i]];

      return createSubGenerator('layout')
        .withArguments([layout])
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
        'src/_layouts/' + layout + '.pug'
      ];
      var fileContentToTest = [
        ['src/_layouts/' + layout + '.pug', /extend/i],
        ['src/_layouts/' + layout + '.pug', /mylayout/i]
      ];

      return createSubGenerator('layout')
        .withArguments([layout])
        .then(function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
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
        .then(function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
        });
    });
  });
});
