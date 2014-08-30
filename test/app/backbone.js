/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Backbone', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    describe('On the Client', function () {
        describe('With Browserify', function () {
            describe('With Handlebars', function () {
                describe('Using Jasmine', function () {
                    it ('Creates expected files', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.hbs',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'handlebars',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.options['skip-install'] = true;
                        this.app.run([], function () {
                            assert.file(expected);
                            done();
                        });
                    });
                });
            });
            describe('With Lo-dash', function () {
                describe('Using Jasmine', function() {
                    it('Created expected files', function(done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jst',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'lodash',
                            jsOption: 'browserify',
                            useServer: false,
                            testFramework: 'jasmine'
                        });
                        this.app.options['skip-install'] = true;
                        this.app.run([], function () {
                            assert.file(expected);
                            done();
                        });
                    });
                });
            });
            describe('With Jade', function () {
                describe('Using Jasmine', function() {
                    it('Creates expected files', function (done) {
                        var expected = [
                            // add files and folders you expect to exist here.
                            'client/scripts/views/main.js',
                            'client/templates/main.jade',
                            'client/scripts/routes.js',
                            'client/templates',
                            'client/scripts/views',
                            'client/index.html'
                        ];

                        helpers.mockPrompt(this.app, {
                            singlePageApplication: true,
                            jsFramework: 'backbone',
                            jsTemplate: 'jade',
                            jsOption: 'browserify',
                            useServer: false,
                        });
                        this.app.options['skip-install'] = true;
                        this.app.run([], function () {
                            assert.file(expected);
                            done();
                        });
                    });
                });
            });
        });
    });
});
