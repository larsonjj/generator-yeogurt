/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app',[
                    helpers.createDummyGenerator(),
                    'mocha:app'
                ]
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'dev/',
            'dev/markup',
            'dev/markup/templates',
            'dev/markup/pages',
            'dev/markup/components',
            'dev/markup/modules',
            'dev/markup/components/all-components.jade',
            'dev/markup/components/header.jade',
            'dev/markup/components/footer.jade',
            'dev/markup/modules/all-modules.jade',
            'dev/markup/modules/heading.jade',
            'dev/markup/pages/index.jade',
            'dev/markup/templates/base.jade',
            'dev/markup/templates/one-column.jade',
            'dev/styles',
            'dev/styles/base',
            'dev/styles/base/_all-base.less',
            'dev/styles/base/_mixins.less',
            'dev/styles/base/_variables.less',
            'dev/styles/components',
            'dev/styles/components/_all-components.less',
            'dev/styles/components/_footer.less',
            'dev/styles/components/_header.less',
            'dev/styles/modules',
            'dev/styles/modules/_all-modules.less',
            'dev/styles/pages',
            'dev/styles/pages/_all-pages.less',
            'dev/styles/vendor',
            'dev/styles/vendor/_all-vendor.less',
            'dev/styles/vendor/_font-awesome.less',
            'dev/styles/vendor/_lesshat.less',
            'dev/styles/vendor/_normalize.less',
            'dev/styles/partials',
            'dev/styles/partials/_all-partials.less',
            'dev/styles/partials/_box-sizing.less',
            'dev/styles/partials/_reset.less',
            'dev/styles/templates',
            'dev/styles/templates/_all-templates.less',
            'dev/styles/main.less',
            'dev/scripts',
            'dev/scripts/components',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/components/example.js',
            '.ftppass',
            'dev/images',
            'dev/styles/fonts',
            'docs',
            'docs/README.md',
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
            'dev/dashboard/images',
            'dev/dashboard/styles',
            'dev/dashboard/styles/base',
            'dev/dashboard/styles/base/_all-base.less',
            'dev/dashboard/styles/base/_mixins.less',
            'dev/dashboard/styles/base/_variables.less',
            'dev/dashboard/styles/components',
            'dev/dashboard/styles/components/_all-components.less',
            'dev/dashboard/styles/components/_footer.less',
            'dev/dashboard/styles/components/_header.less',
            'dev/dashboard/styles/components/_status-key.less',
            'dev/dashboard/styles/components/_dashboard-switcher.less',
            'dev/dashboard/styles/modules',
            'dev/dashboard/styles/modules/_all-modules.less',
            'dev/dashboard/styles/vendor',
            'dev/dashboard/styles/vendor/_all-vendor.less',
            'dev/dashboard/styles/vendor/_font-awesome.less',
            'dev/dashboard/styles/vendor/_lesshat.less',
            'dev/dashboard/styles/vendor/_normalize.less',
            'dev/dashboard/styles/templates',
            'dev/dashboard/styles/templates/_all-templates.less',
            'dev/dashboard/styles/templates/_dashboard.less',
            'dev/dashboard/styles/partials',
            'dev/dashboard/styles/partials/_all-partials.less',
            'dev/dashboard/styles/partials/_box-sizing.less',
            'dev/dashboard/styles/partials/_reset.less',
            'dev/dashboard/styles/main.less',
            'dev/dashboard/scripts',
            'dev/dashboard/scripts/main.js',
            'dev/dashboard/markup/components/all-components.jade',
            'dev/dashboard/markup/components/header.jade',
            'dev/dashboard/markup/components/footer.jade',
            'dev/dashboard/markup/index.jade',
            'dev/dashboard/markup/templates/base.jade',
            'dev/dashboard/markup/templates/dashboard.jade',
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'LESS',
            useFTP: true,
            jshint: true,
            useDashboard: true,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'ieSupport', 'responsive']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
