'use strict';

var getRootDir = function(path) {
    var getNumberOfPaths = [];
    path.split('/').forEach(function(item) {
        if (item) {
            getNumberOfPaths.push('../');
        }
    });
    return getNumberOfPaths.join('');
};

module.exports = getRootDir;