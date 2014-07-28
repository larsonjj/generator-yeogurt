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
                assets: [<% if (htmlOption !== "HTML") { %>
                    '<%%= yeogurt.client %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.staticServer %>/dashboard/index.html': [
                    '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "HTML") { %>html<% } %>'
                ]
            }
        },
        dist: {
            options: {
                dashTemplate: '<%%= yeogurt.client %>/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%%= yeogurt.dist %>/dashboard/generated',
                assets: [<% if (htmlOption !== "HTML") { %>
                    '<%%= yeogurt.client %>/views/components/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } %>'
                <% } %>]
            },
            files: {
                '<%%= yeogurt.dist %>/dashboard/index.html': [
                    '<%%= yeogurt.client %>/**/*.<% if (htmlOption === "Jade") { %>jade<% } else if (htmlOption === "Swig") { %>swig<% } else if (htmlOption === "HTML") { %>html<% } %>'
                ]
            }
        }
    });

};

module.exports = taskConfig;
