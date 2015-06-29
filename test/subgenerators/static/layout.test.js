/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Static Site layout sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create layout files when using Static Jade', function() {
    describe('Client layouts', function() {
      it('Handles defaults', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.jade',
          'src/_layouts/' + layout + '/' + layout + '.scss'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '/' + layout + '.jade', /extend/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create layout files when using Static Nunjucks', function() {
    describe('Client layouts', function() {
      it('Handles defaults', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.nunjucks',
          'src/_layouts/' + layout + '/' + layout + '.scss'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '/' + layout + '.nunjucks', /extends/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles Sass with sass syntax', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.sass'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          cssOption: 'sass',
          sassSyntax: 'sass'
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles Sass with sass syntax', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.sass'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          cssOption: 'sass',
          sassSyntax: 'sass'
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles Less', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.less'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          cssOption: 'less',
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles stylus', function(done) {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '/' + layout + '.styl'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          cssOption: 'stylus',
        });
        this.app.run([], function() {
          createSubGenerator('layout', layout, {path: '../../../../'}, {
            // mock prompt data
            layoutFile: 'src/_layouts'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
  });
});
