/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator with git', function () {
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
            'dev/docs',
            'dev/docs/styleguide',
            'dev/docs/styleguide/index.html',
            'dev/docs/styleguide/public/kss.js',
            'dev/docs/styleguide/public/kss.less',
            'dev/docs/styleguide/public/less.js',
            'dev/docs/styleguide/public/markdown.less',
            'dev/docs/styleguide/public/prettify.js',
            'dev/docs/styleguide/public/images/yeogurt-logo.png'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            cssOption: 'SASS',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            useKss: true,
            extras: ['useFontAwesome', 'useDashboard']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
