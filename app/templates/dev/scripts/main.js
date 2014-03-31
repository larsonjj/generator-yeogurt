/*
*   main.js
*   This file is where all scripts will be configured and/or imported
*/

'use strict';
<% if (jsOption ==='RequireJS') { %>require.config({
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        jquery: '../bower_components/jquery/jquery',
        app: 'app'<% if (useBootstrap) { %>,
        // Comment out undesired boostrap js components below
        bootstrapAffix: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix',
        bootstrapAlert: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert',
        bootstrapButton: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button',
        bootstrapCarousel: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel',
        bootstrapCollapse: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse',
        bootstrapDropdown: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown',
        bootstrapModal: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal',
        bootstrapPopover: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover',
        bootstrapScrollspy: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy',
        bootstrapTab: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab',
        bootstrapTooltip: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip',
        bootstrapTransition: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition'
        <% } %>
    },
    shim: {
        <% if (useBootstrap) { %>// Comment out undesired boostrap js components below
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }<% } %>
    }
});

require(['app', 'jquery', 'domReady'], function (app, $, domReady) {
    domReady(function () {
        // use app here
        app.init('Welcome to Yeogurt!');
        console.log('Running jQuery %s', $().jquery);
    });
});<% } %>
<% if (jsOption ==='Browserify') { %>var app = require('./app');

app.init('Welcome to Yeogurt!');
<% } %>