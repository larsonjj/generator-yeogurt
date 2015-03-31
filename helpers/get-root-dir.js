'use strict';

var getRootDir = function(path) {
  var getNumberOfPaths = [];
  path.split('/').forEach(function(item, index) {
    if (index > 0 && item) {
      getNumberOfPaths.push('../');
    }
  });
  return getNumberOfPaths.join('');
};

module.exports = getRootDir;
