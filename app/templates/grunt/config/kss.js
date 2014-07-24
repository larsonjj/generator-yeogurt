/**
 * Configuration for kss task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('kss', {
        options: {
        includeType: '<% if (cssOption === 'Sass') { %>scss<% } else if (cssOption === 'Less') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',
        includePath: '<%%= yeogurt.client %>/styles/main.<% if (cssOption === 'Sass') { %>scss<% } else if (cssOption === 'Less') { %>less<% } else if (cssOption === 'None (Vanilla CSS)') { %>css<% } %>',<% if (cssOption === 'Sass') { %>
            scssRoot: ['<%%= yeogurt.client %>/styles'],<% } %>
            template: '<%%= yeogurt.client %>/docs/styleguide'
        },
        server: {
            files: {
                '<%%= yeogurt.staticServer %>/docs/styleguide': ['<%%= yeogurt.client %>/styles']
            }
        },
        dist: {
            files: {
                '<%%= yeogurt.dist %>/docs/styleguide': ['<%%= yeogurt.client %>/styles']
            }
        }
    });

};

module.exports = taskConfig;
