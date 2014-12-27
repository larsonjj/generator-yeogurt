/**
 * Generate files specific to the grunt folder
 */

'use strict';

var taskFiles = function taskFiles() {
    // Folders

    // Config
    if (this.jsOption === 'browserify') {
        this.template('grunt/config/compile/browserify.js', 'grunt/config/compile/browserify.js');
        this.template('grunt/config/util/exorcise.js', 'grunt/config/util/exorcise.js');
    }
    if (this.useJsdoc) {
        this.template('grunt/config/docs/jsdoc.js', 'grunt/config/docs/jsdoc.js');
    }
    this.template('grunt/config/util/clean.js', 'grunt/config/util/clean.js');
    this.template('grunt/config/util/compress.js', 'grunt/config/util/compress.js');
    if (!this.useServer) {
        this.template('grunt/config/server/connect.js', 'grunt/config/server/connect.js');
    }
    else {
        this.template('grunt/config/util/open.js', 'grunt/config/util/open.js');
    }
    this.template('grunt/config/util/concurrent.js', 'grunt/config/util/concurrent.js');
    this.template('grunt/config/util/copy.js', 'grunt/config/util/copy.js');
    this.template('grunt/config/optimize/concat.js', 'grunt/config/optimize/concat.js');
    if (this.useDashboard) {
        this.template('grunt/config/docs/dashboard.js', 'grunt/config/docs/dashboard.js');
    }
    if (this.useFTP) {
        this.template('grunt/config/deploy/ftpush.js', 'grunt/config/deploy/ftpush.js');
    }
    if (this.useKss) {
        this.template('grunt/config/docs/kss.js', 'grunt/config/docs/kss.js');
    }
    this.template('grunt/config/optimize/htmlmin.js', 'grunt/config/optimize/htmlmin.js');
    this.template('grunt/config/optimize/autoprefixer.js', 'grunt/config/optimize/autoprefixer.js');
    this.template('grunt/config/optimize/imagemin.js', 'grunt/config/optimize/imagemin.js');
    if (this.htmlOption === 'jade' || this.jsTemplate === 'jade') {
        this.template('grunt/config/compile/jade.js', 'grunt/config/compile/jade.js');
    }
    else if (this.htmlOption === 'swig') {
        this.template('grunt/config/compile/swig.js', 'grunt/config/compile/swig.js');
    }
    this.template('grunt/config/util/jshint.js', 'grunt/config/util/jshint.js');
    if (this.cssOption === 'less') {
        this.template('grunt/config/compile/less.js', 'grunt/config/compile/less.js');
    }
    if (this.jsOption === 'requirejs') {
        this.template('grunt/config/compile/requirejs.js', 'grunt/config/compile/requirejs.js');
    }
    if (this.cssOption === 'sass') {
        this.template('grunt/config/compile/sass.js', 'grunt/config/compile/sass.js');
    }
    if (this.cssOption === 'stylus') {
        this.template('grunt/config/compile/stylus.js', 'grunt/config/compile/stylus.js');
    }
    if (this.jsTemplate === 'underscore') {
        this.template('grunt/config/compile/jst.js', 'grunt/config/compile/jst.js');
    }
    else if (this.jsTemplate === 'handlebars') {
        this.template('grunt/config/compile/handlebars.js', 'grunt/config/compile/handlebars.js');
    }
    this.template('grunt/config/optimize/uglify.js', 'grunt/config/optimize/uglify.js');
    this.template('grunt/config/optimize/cssmin.js', 'grunt/config/optimize/cssmin.js');
    this.template('grunt/config/optimize/usemin.js', 'grunt/config/optimize/usemin.js');
    this.template('grunt/config/util/watch.js', 'grunt/config/util/watch.js');
    this.template('grunt/config/util/wiredep.js', 'grunt/config/util/wiredep.js');
    if (this.useServer) {
        this.template('grunt/config/server/express.js', 'grunt/config/server/express.js');
        this.template('grunt/config/server/env.js', 'grunt/config/server/env.js');
    }
    this.template('grunt/config/util/injector.js', 'grunt/config/util/injector.js');
    if (this.useTesting) {
        this.template('grunt/config/test/karma.js', 'grunt/config/test/karma.js');
    }

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
