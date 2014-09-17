'use strict';
var rm = require('rimraf');

var deleteFile = function(file, context) {
    rm(file, function(error) {
        if (error) {
            return context.log(error);
        }
        context.log('Deleted: %s', file);
    });
};

module.exports = deleteFile;