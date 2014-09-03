/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using a Dashboard', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = createAppGenerator();

            done();
        }.bind(this));
    });

    it('Creates expected files', function (done) {
        var expected = [
            'grunt/',
            'grunt/config',
            'grunt/config/doc/dashboard.js',
            'client/',
            'client/docs/dashboard/',
            'client/docs/dashboard/images/',
            'client/docs/dashboard/images/yeogurt-logo.png'
        ];

        helpers.mockPrompt(this.app, {
            useDashboard: true
        });

        this.app.run([], function () {
            assert.file(expected);
            done();
        });
    });
});
