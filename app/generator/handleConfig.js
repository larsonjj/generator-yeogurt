/**
 * Generate Yeogurt Logo
 */

'use strict';

var _ = require('lodash');

var handleConfig = function handleConfig() {

    // If user chooses to use exsiting yo-rc file, then skip prompts
    if (this.skipConfig) {
        this.answers = this.config.get('config');
    }
    else {
        this.answers = _.merge(this.projectInfo, this.serverInfo, this.clientInfo, this.documentation);
    }

    // Assign each answer property to `this` context to give the generator access to it

    // Project Info
    this.projectName           = this.answers.projectName;
    this.versionControl        = this.answers.versionControl;

    // Server Info
    this.useServer             = this.answers.useServer;
    this.dbOption              = this.answers.dbOption;
    // Setup Database URLs
    var username = this.answers.dbUser;
    var password = this.answers.dbPass ? ':' + this.answers.dbPass : '';
    var port = this.answers.dbPort;
    var host = this.answers.dbUser ? '@' + this.answers.dbHost : this.answers.dbHost;
    var name = this.answers.dbName ? this.answers.dbName : '';

    if (this.dbOption === 'MongoDB') {
        this.dbURL = process.env.MONGODB || 'mongodb://' +
        username +
        password +
        host + ':' +
        port + '/' +
        name;
    }
    else if (this.dbOption === 'MySQL') {
        this.dbURL = process.env.MYSQL || 'mysql://' +
        username +
        password +
        host + ':' +
        port + '/' +
        name;
    }
    else {
        this.dbURL = '';
    }

    // Client
    this.singlePageApplication = this.answers.singlePageApplication;
    this.htmlOption            = this.answers.htmlOption;
    this.jsFramework           = this.answers.jsFramework;
    this.jsTemplate            = this.answers.jsTemplate;
    this.jsOption              = this.answers.jsOption;
    this.cssOption             = this.answers.cssOption;
    this.useBourbon            = this.answers.useBourbon;
    this.useLesshat            = this.answers.useLesshat;
    this.cssFramework          = this.answers.cssFramework;
    this.ieSupport             = this.answers.ieSupport;
    this.useGA                 = this.answers.useGA;
    this.useFTP                = this.answers.useFTP;
    this.jshint                = this.answers.jshint;

    this.useDashboard          = this.answers.useDashboard;
    this.extras                = this.answers.extras;

    // Testing
    this.testFramework         = this.answers.testFramework;

    // Documentation
    this.useJsdoc              = this.answers.useJsdoc;
    this.useKss                = this.answers.useKss;


    // Default Overwrites
    if (this.jsFramework === 'Backbone + React') {
        this.jsTemplate = this.answers.jsTemplate = 'React';
    }
    if (!this.dbOption) {
        this.dbOption = this.answers.dbOption = 'None';
    }

    // Default jsOption to Browserify
    this.jsOption = this.answers.jsOption || 'Browserify';

    // Determine if feature exists within a given object
    function hasFeature(feat, obj) {
        return obj.indexOf(feat) !== -1;
    }

    // Intially set flags to false
    this.useBootstrap = this.answers.useBootstrap ? this.answers.useBootstrap : false;
    this.responsive = false;
    this.useFoundation = false;

    if (this.cssFramework === 'Bootstrap') {
        this.useBootstrap = true;
        if (this.ieSupport) {
            this.responsive = true;
        }
    }
    else if (this.cssFramework === 'Foundation') {
        this.useFoundation = true;
    }

    this.useFontAwesome = hasFeature('useFontAwesome', this.extras);
    this.useDashboard = hasFeature('useDashboard', this.extras);
    this.useModernizr = hasFeature('useModernizr', this.extras);

};

module.exports = handleConfig;