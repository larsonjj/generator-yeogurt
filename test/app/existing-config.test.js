/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator using existing configuration', function() {
  it('Creates expected files with expected content (Jade)', function() {
    var expected = ['.yo-rc.json'];
    var fileContentToTest = [['.yo-rc.json', /jade/i]];

    return createAppGenerator()
      .withPrompts({ existingConfig: true, htmlOption: 'jade' })
      .then(function() {
        assert.file(expected);
        assert.noFileContent(fileContentToTest);
      });
  });

  it('Creates expected files with expected content (Nunjucks)', function() {
    var expected = ['.yo-rc.json'];
    var fileContentToTest = [['.yo-rc.json', /nunjucks/i]];

    return createAppGenerator()
      .withPrompts({ existingConfig: false, htmlOption: 'nunjucks' })
      .then(function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
      });
  });
});
