/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator creation', function () {
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
            '.yo-rc.json',
            'dev/',
            'dev/markup',
            'dev/markup/templates',
            'dev/markup/pages',
            'dev/markup/components',
            'dev/markup/helpers',
            'dev/markup/components/header.jade',
            'dev/markup/components/footer.jade',
            'dev/markup/helpers/heading.jade',
            'dev/markup/pages/index.jade',
            'dev/markup/base.jade',
            'dev/markup/templates/one-column.jade',
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
            'dev/scripts',
            'dev/scripts/modules',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/modules/module.js',
            'dev/scripts/modules/inline-module.js',
            '.ftppass',
            'test',
            'karma.conf.js',
            'browserconfig.xml',
            'crossdomain.xml',
            'tile.png',
            'tile-wide.png',
            'apple-touch-icon-precomposed.png',
            'humans.txt',
            'robots.txt',
            'dev/images',
            'dev/styles/fonts',
            '.editorconfig',
            'Gruntfile.js',
            'dev/.htaccess',
            'bower.json',
            'config.json',
            'package.json',
            '.bowerrc',
            'dev/robots.txt',
            'dev/favicon.ico',
            'dev/dashboard',
            'dev/dashboard/markup',
            'dev/dashboard/markup/components',
            'dev/dashboard/markup/templates',
            'dev/dashboard/markup/pages',
            'dev/dashboard/images',
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
            'dev/dashboard/styles/main.less',
            'dev/dashboard/scripts',
            'dev/dashboard/scripts/main.js',
            'dev/dashboard/markup/components/header.jade',
            'dev/dashboard/markup/components/footer.jade',
            'dev/dashboard/markup/pages/index.jade',
            'dev/dashboard/markup/base.jade',
            'dev/dashboard/markup/templates/dashboard.jade',
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
