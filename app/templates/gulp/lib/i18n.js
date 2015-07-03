'use strict';

var path = require('path');

var i18n = function i18n(filepath) {
  var i18nData = {};
  new (require('i18n-2'))({
      // setup some locales - other locales default to the first locale
      locales: ['en'],
      directory: filepath,
      extension: '.json',
      register: i18nData
  });
  return i18nData;
};


module.exports = i18n;
