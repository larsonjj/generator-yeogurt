'use strict';
var fs = require('fs');

// dynamically include generator configuration files,
// compare each filename to an array that stores loading order,
// and store them in the config object
var grabFiles = function(filepaths, order) {
  var array = [];
  var tempArray = [];
  filepaths.forEach(function(filepath) {
    fs.readdirSync(filepath).forEach(function(file) {
      // Remove file extension and get just the filename
      // something.js --> something
      var filename = file.substring(file.lastIndexOf('/') + 1).split('.');
      // Check to see if file has '.js' extension
      if (file.substr(-3) === '.js') {
        tempArray.push({
          name: filename[0],
          index: order.indexOf(filename[0]) > -1 ? order.indexOf(filename[0]) : order.length,
          code: require(filepath + '/' + file)
        });
      }
    });
    array = array.concat(tempArray);
  });

  return array;
};

module.exports = grabFiles;
