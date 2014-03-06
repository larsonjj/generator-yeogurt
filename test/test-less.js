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
            'dev/styles/print.less',
            'dev/styles/main.less',
            'dev/dashboard/',
            'dev/dashboard/styles',
            'dev/dashboard/styles/base',
            'dev/dashboard/styles/base/_mixins.less',
            'dev/dashboard/styles/base/_variables.less',
            'dev/dashboard/styles/base/_box-sizing.less',
            'dev/dashboard/styles/base/_reset.less',
            'dev/dashboard/styles/base/_ie8.less',
            'dev/dashboard/styles/partials',
            'dev/dashboard/styles/partials/_footer.less',
            'dev/dashboard/styles/partials/_header.less',
            'dev/dashboard/styles/partials/_status-key.less',
            'dev/dashboard/styles/partials/_dashboard-switcher.less',
            'dev/dashboard/styles/partials/_dashboard.less',
            'dev/dashboard/styles/vendor',
            'dev/dashboard/styles/vendor/_font-awesome.less',
            'dev/dashboard/styles/vendor/_lesshat.less',
            'dev/dashboard/styles/vendor/_normalize.less',
            'dev/dashboard/styles/main.less'
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
            useDashboard: true,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'ieIcons', 'adobeXdomain', 'appleIcon']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
