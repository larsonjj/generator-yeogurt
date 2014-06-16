/**
 * Configuration for kss task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('kss', {
        options: {
            includeType: '<% if (cssOption === 'SASS') { %>scss<% } else if (cssOption === 'LESS') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',
            includePath: '<%%= yeogurt.dev %>/docs/styleguide.<% if (cssOption === 'SASS') { %>scss<% } else if (cssOption === 'LESS') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',<% if (cssOption === 'SASS') { %>
            scssRoot: ['<%%= yeogurt.dev %>/styles'],<% } %>
            template: '<%%= yeogurt.dev %>/docs/styleguide'
        },
        server: {
            files: {
                '<%%= yeogurt.server %>/docs/styleguide': ['<%%= yeogurt.dev %>/styles']
            }
        },
        dist: {
            files: {
                '<%%= yeogurt.dist %>/docs/styleguide': ['<%%= yeogurt.dev %>/styles']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-kss');
};