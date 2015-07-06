'use strict';

var path = require('path');
var fs = require('fs');

// Converts filepath/directory into a JS object recursively
// ex: `js/data.json` -> `{js: {data: [JSON Data]}`
var parseDirectory = function parseDirectory(filepath, obj) {
  var stats = fs.lstatSync(filepath);
  if (stats.isDirectory()) {
    obj[path.basename(filepath)] = {};
    fs.readdirSync(filepath).map(function(child) {
      obj[path.basename(filepath)] = parseDirectory(
        path.join(filepath, child),
        obj[path.basename(filepath)]
      );
    });
  }
  else {
    try {
      obj[path.basename(filepath).replace('.json', '')] = JSON.parse(
        fs.readFileSync(filepath, {encoding: 'utf8'})
      );
    }
    catch (e) {
      console.error('Error reading JSON for file: ' + filepath);
      console.error('===== Details Below =====');
      console.error(e);
    }
  }
  return obj;
};

var dirToObj = function dirToObj(filepath) {
  var dataObj = {};
  try {
    return parseDirectory(filepath, dataObj);
  }
  catch (e) {
    // console.log('No data found')
  }
};

module.exports = dirToObj;
