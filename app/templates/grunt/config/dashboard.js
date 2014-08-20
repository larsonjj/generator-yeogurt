/**
 * Configuration for dashboard task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('dashboard', {
        server: {
            options: {
                dashTemplate: '<%%= yeogurt.client %>/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.staticServer %>/dashboard/generated',
                assets: [<% if (htmlOption !== "html") { %>
                    '<%%= yeogurt.client %>/templates/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.staticServer %>/dashboard/index.html': [
                    '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } else if (htmlOption === "html") { %>html<% } %>'
                ]
            }
        },
        dist: {
            options: {
                dashTemplate: '<%%= yeogurt.client %>/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.dist %>/dashboard/generated',
                assets: [<% if (htmlOption !== "html") { %>
                    '<%%= yeogurt.client %>/templates/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.dist %>/dashboard/index.html': [
                    '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "jade") { %>jade<% } else if (htmlOption === "swig") { %>swig<% } else if (htmlOption === "html") { %>html<% } %>'
                ]
            }
        }
    });

};

module.exports = taskConfig;
