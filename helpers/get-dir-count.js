'use strict';

// Count the number directories (/) in a filepath
// Return ../ string for each
var getDirCount = function(path) {
  var getNumberOfPaths = [];
  path.split('/').forEach(function(item, index) {
    if (index > 0 && item) {
      getNumberOfPaths.push('../');
    }
  });
  return getNumberOfPaths.join('');
};

module.exports = getDirCount;
