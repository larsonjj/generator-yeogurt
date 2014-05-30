/**
 * Configuration for kss task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('kss', {
        options: {
            includeType: '<% if (cssOption === 'SASS') { %>scss<% } else if (cssOption === 'LESS') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',
            includePath: '<%%= yeogurt.dev %>/styles/main.<% if (cssOption === 'SASS') { %>{scss,css}<% } else if (cssOption === 'LESS') { %>{less,css}<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',
        },
        dist: {
            files: {
                '<%%= yeogurt.dist %>/docs/styleguide': ['<%%= yeogurt.dev %>/styles']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-kss');
};