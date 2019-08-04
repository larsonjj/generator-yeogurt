/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator using existing configuration', function() {
  it('Creates expected files with expected content (Pug)', function() {
    var expected = ['.yo-rc.json'];
    var fileContentToTest = [['.yo-rc.json', /pug/i]];

    return createAppGenerator()
      .withPrompts({ existingConfig: true, htmlOption: 'pug' })
      .then(function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
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
