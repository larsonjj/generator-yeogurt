/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('yeogurt generator SASS with no dashboard', function () {
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
            'dev/styles/base/_mixins.scss',
            'dev/styles/base/_variables.scss',
            'dev/styles/base/_box-sizing.scss',
            'dev/styles/base/_reset.scss',
            'dev/styles/base/_ie8.scss',
            'dev/styles/partials',
            'dev/styles/partials/_footer.scss',
            'dev/styles/partials/_header.scss',
            'dev/styles/vendor',
            'dev/styles/vendor/_font-awesome.scss',
            'dev/styles/vendor/_bootstrap.scss',
            'dev/styles/print.scss',
            'dev/styles/main.scss'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'SASS',
            useBourbon: true,
            cssFramework: 'Bootstrap',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['useBorderBox', 'useFontAwesome']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});