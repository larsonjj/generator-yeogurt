/**
 * Configuration for HTMLmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('htmlmin', {
        dist: {
            options: {
                collapseBooleanAttributes: true,
                conservativeCollapse: true,
                removeAttributeQuotes: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            },
            files: [{
                expand: true,
                cwd: '<%%= yeogurt.dist %>',
                src: [
                    '*.html', 'views/**/*.html'
                ],
                dest: '<%%= yeogurt.dist %>'
            }]
        }
    });

};

module.exports = taskConfig;
