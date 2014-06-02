/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator with html5 boilerplate extras', function () {
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
            'dev/crossdomain.xml',
            'dev/browserconfig.xml',
            'dev/tile.png',
            'dev/tile-wide.png',
            'dev/apple-touch-icon-precomposed.png',
            'dev/.htaccess'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'Git',
            structure: 'Static Site',
            cssOption: 'SASS',
            cssFramework: 'Foundation',
            useFoundation: true,
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['useFontAwesome', 'useDashboard'],
            html5Addons: ['adobeXDomain', 'appleIcon', 'ieIcons', 'htaccess']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
