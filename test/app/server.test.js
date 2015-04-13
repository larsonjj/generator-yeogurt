/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Server', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With Defaults', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'grunt/config/util/open.js',
        'grunt/config/server/express.js',
        'grunt/config/server/env.js',
        'server/index/index.js',
        'server/index/index.controller.js',
        'server/index/package.json',
        'server/config/express.js',
        'server/config/env',
        'server/config/env/default.js',
        'server/config/env/development.js',
        'server/config/env/production.js',
        'server/server.js'
      ];

      helpers.mockPrompt(this.app, {
        useServer: true,
        dbOption: 'none'
      });
      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
  describe('With MongoDB Database', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/config/database.js'
      ];
      var fileContentToTest = [
        ['server/config/database.js', /mongoose/i]
      ];

      helpers.mockPrompt(this.app, {
        dbOption: 'mongodb',
        dbType: 'mongodb',
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
        done();
      });
    });
  });
  describe('With MySQL Database', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/config/database.js'
      ];
      var fileContentToTest = [
        ['server/config/database.js', /sequelize/i],
      ];

      helpers.mockPrompt(this.app, {
        dbOption: 'sql',
        dbType: 'mysql',
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
        done();
      });
    });
  });
  describe('With Static Jade', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/modules/error/404.jade',
        'server/modules/error/500.jade',
        'server/modules/error/index.js',
        'server/layout/base.jade',
        'server/index/index.jade',
      ];
      var expectedContent = [
        ['server/index/index.js', /router\.get\('\/'/i]
      ];

      helpers.mockPrompt(this.app, {
        singlePageApplication: false,
        htmlOption: 'jade',
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(expectedContent);
        done();
      });
    });
  });
  describe('With Static Swig', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/modules/error/404.swig',
        'server/modules/error/500.swig',
        'server/modules/error/index.js',
        'server/routes.js',
        'server/layout/base.swig',
        'server/index/index.swig',
      ];
      var expectedContent = [
        ['server/index/index.js', /router\.get\('\/'/i]
      ];

      helpers.mockPrompt(this.app, {
        singlePageApplication: false,
        htmlOption: 'swig',
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(expectedContent);
        done();
      });
    });
  });
  describe('With Single Page Application', function() {
    describe('With Defaults', function() {
      it('Creates expected files', function(done) {
        var expected = [
          'src/index.html'
        ];

        helpers.mockPrompt(this.app, {
          singlePageApplication: true,
          useServer: true
        });
        this.app.run([], function() {
          assert.file(expected);
          done();
        });
      });
    });
    describe('Without Server templates', function() {
      it('Creates expected files', function(done) {
        var expectedContent = [
          ['server/index/index.js', /router\.get\('\/'/i]
        ];
        var fileContentToTest = [
          ['src/index.html', /<\%\- body \%\>/i],
          ['server/index/index.js', /reactRender/i]
        ];

        helpers.mockPrompt(this.app, {
          singlePageApplication: true,
          useServer: true,
          useServerTemplates: false,
          jsFramework: 'react'
        });
        this.app.run([], function() {
          assert.noFileContent(fileContentToTest);
          assert.fileContent(expectedContent);
          done();
        });
      });
    });
  });
  describe('With Paypal\'s Lucsa Security Module', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/config/security.js'
      ];
      var fileContentToTest = [
        ['server/config/env/default.js', /security/i]
      ];

      helpers.mockPrompt(this.app, {
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
        done();
      });
    });
  });
  describe('With Cookie Sessions', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'server/config/secrets.js'
      ];
      var fileContentToTest = [
        ['server/config/express.js', /app.use\(session\(\{/i],
      ];

      helpers.mockPrompt(this.app, {
        useServer: true
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
        done();
      });
    });
  });
});
