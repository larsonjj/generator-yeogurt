/**
 * Generate files specific to the grunt folder
 */

'use strict';

var taskFiles = function taskFiles() {
    // Folders
    this.mkdir('grunt');
    this.mkdir('grunt/config');
    this.mkdir('grunt/tasks');

    // Config
    if (this.jsOption === 'Browserify') {
        this.template('grunt/config/browserify.js', 'grunt/config/browserify.js');
        this.template('grunt/config/exorcise.js', 'grunt/config/exorcise.js');
    }
    if (this.useJsdoc) {
        this.template('grunt/config/jsdoc.js', 'grunt/config/jsdoc.js');
    }
    this.template('grunt/config/clean.js', 'grunt/config/clean.js');
    this.template('grunt/config/compress.js', 'grunt/config/compress.js');
    if (!this.useServer) {
        this.template('grunt/config/connect.js', 'grunt/config/connect.js');
    }
    else {
        this.template('grunt/config/open.js', 'grunt/config/open.js');
    }
    this.template('grunt/config/concurrent.js', 'grunt/config/concurrent.js');
    this.template('grunt/config/copy.js', 'grunt/config/copy.js');
    this.template('grunt/config/concat.js', 'grunt/config/concat.js');
    if (this.useDashboard) {
        this.template('grunt/config/dashboard.js', 'grunt/config/dashboard.js');
    }
    if (this.useFTP) {
        this.template('grunt/config/ftpush.js', 'grunt/config/ftpush.js');
    }
    if (this.useKss) {
        this.template('grunt/config/kss.js', 'grunt/config/kss.js');
    }
    this.template('grunt/config/htmlmin.js', 'grunt/config/htmlmin.js');
    this.template('grunt/config/imagemin.js', 'grunt/config/imagemin.js');
    this.template('grunt/config/pngmin.js', 'grunt/config/pngmin.js');
    if (this.htmlOption === 'Jade' || this.jsTemplate === 'Jade') {
        this.template('grunt/config/jade.js', 'grunt/config/jade.js');
    }
    else if (this.htmlOption === 'Swig' ) {
        this.template('grunt/config/swig.js', 'grunt/config/swig.js');
    }
    if (this.jshint) {
        this.template('grunt/config/jshint.js', 'grunt/config/jshint.js');
    }
    this.template('grunt/config/karma.js', 'grunt/config/karma.js');
    if (this.cssOption === 'Less') {
        this.template('grunt/config/less.js', 'grunt/config/less.js');
    }
    if (this.jsOption === 'RequireJS') {
        this.template('grunt/config/requirejs.js', 'grunt/config/requirejs.js');
    }
    if (this.cssOption === 'Sass') {
        this.template('grunt/config/sass.js', 'grunt/config/sass.js');
    }
    if (this.jsTemplate === 'Lo-dash') {
        this.template('grunt/config/jst.js', 'grunt/config/jst.js');
    }
    else if (this.jsTemplate === 'Handlebars') {
        this.template('grunt/config/handlebars.js', 'grunt/config/handlebars.js');
    }
    this.template('grunt/config/svgmin.js', 'grunt/config/svgmin.js');
    this.template('grunt/config/uglify.js', 'grunt/config/uglify.js');
    if (this.cssOption === 'CSS' && !this.singlePageApplication) {
        this.template('grunt/config/cssmin.js', 'grunt/config/cssmin.js');
    }
    this.template('grunt/config/usemin.js', 'grunt/config/usemin.js');
    this.template('grunt/config/watch.js', 'grunt/config/watch.js');
    if (this.useServer) {
        this.template('grunt/config/express.js', 'grunt/config/express.js');
        this.template('grunt/config/env.js', 'grunt/config/env.js');
    }
    this.template('grunt/config/injector.js', 'grunt/config/injector.js');

    // Tasks
    this.template('grunt/tasks/build.js', 'grunt/tasks/build.js');
    this.template('grunt/tasks/default.js', 'grunt/tasks/default.js');
    if (this.useFTP) {
        this.template('grunt/tasks/deploy.js', 'grunt/tasks/deploy.js');
    }
    this.template('grunt/tasks/serve.js', 'grunt/tasks/serve.js');
    this.template('grunt/tasks/test.js', 'grunt/tasks/test.js');
    this.template('grunt/tasks/zip.js', 'grunt/tasks/zip.js');
    if (this.useServer) {
        this.template('grunt/tasks/keepalive.js', 'grunt/tasks/keepalive.js');
        this.template('grunt/tasks/wait.js', 'grunt/tasks/wait.js');
    }
};

module.exports = taskFiles;