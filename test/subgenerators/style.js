/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Style sub-generator', function() {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create style files with Scss', function() {
    it('Handles defaults', function(done) {
      // Filename
      var style = 'mystyle';
      var filesToTest = [
        'client/styles/_' + style + '.scss'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'sass',
        sassSyntax: 'scss'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with .sass syntax', function(done) {
      // Filename
      var style = 'mystyle';
      var filesToTest = [
        'client/styles/_' + style + '.sass'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = 'folder/';
      var filesToTest = [
        'client/styles/folder/_' + style + '.scss'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = '/////folder/////';
      var filesToTest = [
        'client/styles/folder/_' + style + '.scss'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create style files with Less', function() {
    it('Handles defaults', function(done) {
      // Filename
      var style = 'mystyle';
      var filesToTest = [
        'client/styles/_' + style + '.less'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = 'folder/';
      var filesToTest = [
        'client/styles/folder/_' + style + '.less'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = '/////folder/////';
      var filesToTest = [
        'client/styles/folder/_' + style + '.less'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
  describe('Create style files with Stylus', function() {
    it('Handles defaults', function(done) {
      // Filename
      var style = 'mystyle';
      var filesToTest = [
        'client/styles/_' + style + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = 'folder/';
      var filesToTest = [
        'client/styles/folder/_' + style + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = '/////folder/////';
      var filesToTest = [
        'client/styles/folder/_' + style + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create style files with CSS', function() {
    it('Handles defaults', function(done) {
      // Filename
      var style = 'mystyle';
      var filesToTest = [
        'client/styles/' + style + '.css'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'css'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = 'folder/';
      var filesToTest = [
        'client/styles/folder/' + style + '.css'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'css'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var style = 'mystyle';
      var folder = '/////folder/////';
      var filesToTest = [
        'client/styles/folder/' + style + '.css'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'css'
      });
      this.app.run([], function() {
        createSubGenerator('style', style, {}, {
          // mock prompt data
          styleFile: 'client/styles/' + folder,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
