/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator LESS', function () {
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
            'dev/',
            'dev/styles',
            'dev/styles/base',
            'dev/styles/base/_mixins.less',
            'dev/styles/base/_variables.less',
            'dev/styles/base/_global.less',
            'dev/styles/base/_reset.less',
            'dev/styles/base/_ie8.less',
            'dev/styles/print.less',
            'dev/styles/main.less',
            'grunt/',
            'grunt/config',
            'grunt/config/less.js'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'LESS',
            useLesshat: true,
            useBootstrap: true,
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['useBorderBox', 'useFontAwesome', 'useDashboard']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
