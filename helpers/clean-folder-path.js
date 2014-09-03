'use strict';

var cleanFolderPath = function(folder) {
    if (folder) {
        var tempArray = [];
        var cleanedStr = folder.replace(/^\/+|\/+$/g, '');
        cleanedStr.split('/').forEach(function(item) {
            if (item) {
                tempArray.push(item);
            }
        });
        return tempArray.join('/');
    }
    else {
        return '';
    }
};

module.exports = cleanFolderPath;