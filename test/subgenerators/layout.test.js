/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var fs = require('fs');
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Static Site layout sub-generator', function() {
  beforeEach(function(done) {
    createAppGenerator()
      .inTmpDir(function(dir) {
        console.log('==========================');
        console.log(fs.readdirSync(dir));
        console.log('==========================');
      })
      .withPrompts({
        existingConfig: true
      })
      .on('end', done);
  });
  describe('Create layout files when using Static Jade', function() {
    describe('Client layouts', function() {
      it('Handles defaults', function() {
        // Filename
        var layout = 'mylayout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/_layouts/' + layout + '.jade'
        ];
        var fileContentToTest = [
          ['src/_layouts/' + layout + '.jade', /extend/i]
        ];

        return createSubGenerator('layout')
          .withArguments([layout])
          .withPrompts({
            htmlOption: 'jade',
            cssOption: 'sass',
            sassSyntax: 'scss'
          })
          .then(function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
          });
      });
      // it('Handles custom layout', function(done) {
      //   // Filename
      //   var layout = 'mylayout';
      //   var filesToTest = [
      //     // add files and folders you expect to NOT exist here.
      //     'src/_layouts/' + layout + '.jade'
      //   ];
      //   var fileContentToTest = [
      //     ['src/_layouts/' + layout + '.jade', /extend/i],
      //     ['src/_layouts/' + layout + '.jade', /mylayout/i]
      //   ];

      //   helpers.mockPrompt(this.app, {
      //     htmlOption: 'jade',
      //     cssOption: 'sass',
      //     sassSyntax: 'scss'
      //   });
      //   this.app.run([], function() {
      //     createSubGenerator(
      //       'layout',
      //       layout,
      //       { layout: layout, path: '../../../' },
      //       {
      //         // mock prompt data
      //         layoutFile: 'src/_layouts'
      //       },
      //       function() {
      //         assert.file(filesToTest);
      //         assert.fileContent(fileContentToTest);
      //         done();
      //       }
      //     );
      //   });
      // });
    });
  });

  // describe('Create layout files when using Static Nunjucks', function() {
  //   describe('Client layouts', function() {
  //     it('Handles defaults', function(done) {
  //       // Filename
  //       var layout = 'mylayout';
  //       var filesToTest = [
  //         // add files and folders you expect to NOT exist here.
  //         'src/_layouts/' + layout + '.nunjucks'
  //       ];
  //       var fileContentToTest = [
  //         ['src/_layouts/' + layout + '.nunjucks', /extends/i]
  //       ];

  //       helpers.mockPrompt(this.app, {
  //         htmlOption: 'nunjucks',
  //         cssOption: 'sass',
  //         sassSyntax: 'scss'
  //       });
  //       this.app.run([], function() {
  //         createSubGenerator(
  //           'layout',
  //           layout,
  //           { path: '../../../' },
  //           {
  //             // mock prompt data
  //             layoutFile: 'src/_layouts'
  //           },
  //           function() {
  //             assert.file(filesToTest);
  //             assert.fileContent(fileContentToTest);
  //             done();
  //           }
  //         );
  //       });
  //     });
  //     it('Handles custom layout', function(done) {
  //       // Filename
  //       var layout = 'mylayout';
  //       var filesToTest = [
  //         // add files and folders you expect to NOT exist here.
  //         'src/_layouts/' + layout + '.nunjucks'
  //       ];
  //       var fileContentToTest = [
  //         ['src/_layouts/' + layout + '.nunjucks', /extend/i],
  //         ['src/_layouts/' + layout + '.nunjucks', /mylayout/i]
  //       ];

  //       helpers.mockPrompt(this.app, {
  //         htmlOption: 'nunjucks',
  //         cssOption: 'sass',
  //         sassSyntax: 'scss'
  //       });
  //       this.app.run([], function() {
  //         createSubGenerator(
  //           'layout',
  //           layout,
  //           { layout: layout, path: '../../../' },
  //           {
  //             // mock prompt data
  //             layoutFile: 'src/_layouts'
  //           },
  //           function() {
  //             assert.file(filesToTest);
  //             assert.fileContent(fileContentToTest);
  //             done();
  //           }
  //         );
  //       });
  //     });
  //   });
  // });
});
