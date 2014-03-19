/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator LESS with no dashbaord', function () {
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
            'dev/styles/base/_box-sizing.less',
            'dev/styles/base/_reset.less',
            'dev/styles/base/_ie8.less',
            'dev/styles/partials',
            'dev/styles/partials/_footer.less',
            'dev/styles/partials/_header.less',
            'dev/styles/vendor',
            'dev/styles/vendor/_font-awesome.less',
            'dev/styles/vendor/_lesshat.less',
            'dev/styles/vendor/_normalize.less',
            'dev/styles/vendor/_bootstrap.less',
            'dev/styles/print.less',
            'dev/styles/main.less'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'LESS',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useDashboard: false,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'ieIcons', 'adobeXdomain', 'appleIcon']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
