/**
 * Configuration for dashboard task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('dashboard', {
        server: {
            options: {
                dashTemplate: '<%= yeogurt.client %>/docs/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%= yeogurt.staticServer %>/docs/dashboard/generated',
                assets: [{
                    cwd: '<%= yeogurt.client %>/docs/dashboard/',
                    src: [
                        '**/*',
                        '!*.hbs'
                    ]
                }]
            },
            files: {
                '<%= yeogurt.staticServer %>/docs/dashboard/index.html': [
                    '<%= yeogurt.client %>/**/*.swig'
                ]
            }
        },
        dist: {
            options: {
                dashTemplate: '<%= yeogurt.client %>/docs/dashboard/template.hbs',
                logo: 'images/yeogurt-logo.png',
                generatedDir: '<%= yeogurt.dist %>/docs/dashboard/generated',
                assets: [{
                    cwd: '<%= yeogurt.client %>/docs/dashboard/',
                    src: [
                        '**/*',
                        '!*.hbs'
                    ]
                }]
            },
            files: {
                '<%= yeogurt.dist %>/docs/dashboard/index.html': [
                    '<%= yeogurt.client %>/**/*.swig'
                ]
            }
        }
    });

};

module.exports = taskConfig;
