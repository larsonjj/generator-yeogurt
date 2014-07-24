/**
 * Configuration for kss task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('kss', {
        options: {
        includeType: '<% if (cssOption === 'Sass') { %>scss<% } else if (cssOption === 'Less') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',
        includePath: '<%%= yeogurt.dev %>/styles/main.<% if (cssOption === 'Sass') { %>scss<% } else if (cssOption === 'Less') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',<% if (cssOption === 'Sass') { %>
            scssRoot: ['<%%= yeogurt.dev %>/styles'],<% } %>
            template: '<%%= yeogurt.dev %>/docs/styleguide'
        },
        server: {
            files: {
                '<%%= yeogurt.staticServer %>/docs/styleguide': ['<%%= yeogurt.dev %>/styles']
            }
        },
        dist: {
            files: {
                '<%%= yeogurt.dist %>/docs/styleguide': ['<%%= yeogurt.dev %>/styles']
            }
        }
    });

};

module.exports = taskConfig;
