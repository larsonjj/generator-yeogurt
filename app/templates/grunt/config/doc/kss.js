/**
 * Configuration for kss task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('kss', {
        options: {
        includeType: '<% if (cssOption === 'sass') { %>scss<% } else if (cssOption === 'less') { %>less<% } else if (cssOption === 'stylus') { %>stylus<% } else if (cssOption === 'css') { %>css<% } %>',
        includePath: '<%%= yeogurt.client %>/styles/main.<% if (cssOption === 'sass') { %><% if (sassSyntax === 'sass') { %>sass<% } else { %>scss<% } %><% } else if (cssOption === 'less') { %>less<% } else if (cssOption === 'stylus') { %>styl<% } else if (cssOption === 'css') { %>css<% } %>',<% if (cssOption === 'sass') { %>
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
