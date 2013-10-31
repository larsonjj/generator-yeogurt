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
                '../../app'
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
            'dev/markup/elements',
            'dev/markup/partials',
            'dev/markup/partials/all-partials.jade',
            'dev/markup/partials/README.md',
            'dev/markup/components/all-components.jade',
            'dev/markup/components/c000-head.jade',
            'dev/markup/components/c001-header.jade',
            'dev/markup/components/c002-footer.jade',
            'dev/markup/elements/all-elements.jade',
            'dev/markup/elements/e000-heading.jade',
            'dev/markup/pages/p000-homepage.jade',
            'dev/markup/templates/t000-base.jade',
            'dev/markup/templates/t001-one-column.jade',
            'dev/styles',
            'dev/styles/components',
            'dev/styles/elements',
            'dev/styles/pages',
            'dev/styles/partials',
            'dev/styles/vendor',
            'dev/styles/modules',
            'dev/styles/main.less',
            'dev/scripts',
            'dev/scripts/components',
            'dev/scripts/vendor',
            'dev/scripts/main.js',
            'dev/scripts/app.js',
            'dev/scripts/components/example.js',
            'ftppass.json',
            'dev/images',
            'dev/styles/fonts',
            'docs',
            'docs/README.md',
            '.editorconfig',
            'Gruntfile.js',
            'dev/index.html',
            'bower.json',
            'config.json',
            'package.json',
            '.bowerrc',
            'dev/robots.txt',
            'dev/404.html',
            'dev/favicon.ico',
            'dashboard',
            'dashboard/markup',
            'dashboard/markup/pages',
            'dashboard/markup/elements',
            'dashboard/markup/components',
            'dashboard/markup/templates',
            'dashboard/markup/partials',
            'dashboard/images',
            'dashboard/styles',
            'dashboard/styles/fonts',
            'dashboard/styles/vendor',
            'dashboard/styles/partials',
            'dashboard/styles/pages',
            'dashboard/styles/templates',
            'dashboard/styles/elements',
            'dashboard/scripts',
            'dashboard/scripts/vendor',
            'dashboard/scripts/components'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            htmlOption: 'Jade',
            cssOption: 'LESS',
            linters: ['JSHint'],
            jshint: 'y',
            useFTP: 'y',
            haveDashboard: 'y'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
