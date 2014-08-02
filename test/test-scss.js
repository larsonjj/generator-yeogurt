/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('yeogurt generator Sass', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'client/',
            'client/styles',
            'client/styles/main.scss'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'Sass',
            useBourbon: true,
            cssFramework: 'Bootstrap',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useDashboard: true,
            extras: ['useFontAwesome']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});