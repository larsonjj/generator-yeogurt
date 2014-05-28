/**
 * Configuration for dashboard task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('dashboard', {
        server: {
            options: {
                debug: true,
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.server %>/dashboard/generated',
                assets: [<% if (htmlOption !== "None (Vanilla HTML)") { %>
                    '<%%= yeogurt.dev %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.server %>/dashboard/index.html': [
                    '<%%= yeogurt.dev %>/views/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "None (Vanilla HTML)") { %>html<% } %>'
                ]
            }
        },
        dist: {
            options: {
                debug: false,
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.dist %>/dashboard/generated',
                assets: [<% if (htmlOption !== "None (Vanilla HTML)") { %>
                    '<%%= yeogurt.dev %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.dist %>/dashboard/index.html': [
                    '<%%= yeogurt.dev %>/views/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "None (Vanilla HTML)") { %>html<% } %>'
                ]
            }
        }
    });

    // grunt.loadNpmTasks('grunt-dashboard');
};