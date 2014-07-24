/**
 * Configuration for dashboard task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('dashboard', {
        server: {
            options: {
                dashTemplate: '<%%= yeogurt.dev %>/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.staticServer %>/dashboard/generated',
                assets: [<% if (htmlOption !== "None (Vanilla HTML)") { %>
                    '<%%= yeogurt.dev %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.staticServer %>/dashboard/index.html': [
                    '<%%= yeogurt.dev %>/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "None (Vanilla HTML)") { %>html<% } %>'
                ]
            }
        },
        dist: {
            options: {
                dashTemplate: '<%%= yeogurt.dev %>/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.dist %>/dashboard/generated',
                assets: [<% if (htmlOption !== "None (Vanilla HTML)") { %>
                    '<%%= yeogurt.dev %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.dist %>/dashboard/index.html': [
                    '<%%= yeogurt.dev %>/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "None (Vanilla HTML)") { %>html<% } %>'
                ]
            }
        }
    });

};

module.exports = taskConfig;
