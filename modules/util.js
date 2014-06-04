'use strict';
var path = require('path');
var fs = require('fs');

var escapeRegExp = function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

var rewrite = function(args) {
    // check if splicable is already in the body text
    var re = new RegExp(args.splicable.map(function(line) {
        return '\s*' + escapeRegExp(line);
    }).join('\n'));

    if (re.test(args.haystack)) {
        return args.haystack;
    }

    var lines = args.haystack.split('\n');

    var otherwiseLineIndex = 0;
    var endLineIndex = 0;
    var record = false;
    lines.forEach(function(line, i) {
        if (line.indexOf(args.needle) !== -1) {
            otherwiseLineIndex = i;
            record = true;
        }
        if (record && line.indexOf(args.end) !== -1) {
            endLineIndex = i;
            record = false;
        }
    });

    var spaces = 0;
    while (lines[otherwiseLineIndex].charAt(spaces) === ' ') {
        spaces += 1;
    }

    var spaceStr = '';
    while ((spaces -= 1) >= 0) {
        spaceStr += ' ';
    }

    lines.splice(endLineIndex , 0, args.splicable.map(function(line) {
        return spaceStr + line;
    }).join('\n'));

    return lines.join('\n');
};

var rewriteFile = function(args) {
    args.path = args.path || process.cwd();
    var fullPath = path.join(args.path, args.file);

    args.haystack = fs.readFileSync(fullPath, 'utf8');
    var body = rewrite(args);

    fs.writeFileSync(fullPath, body);
};

module.exports = {
    rewrite: rewrite,
    rewriteFile: rewriteFile
};
