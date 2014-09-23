/**
 * Handle prompt choices and setup template values
 * For file creation
 */

'use strict';

var _ = require('lodash');

var answersConfig = function answersConfig() {

    // If user chooses to use exsiting yo-rc file, then skip prompts
    if (this.existingConfig) {
        this.answers = this.config.get('config');
    }
    else {
        this.answers = _.merge(
            this.projectPrompts,
            this.serverPrompts,
            this.clientPrompts,
            this.documentationPrompts,
            this.testingPrompts,
            this.deploymentPrompts
        );
    }

    // Assign each answer property to `this` context to give the generator access to it

    // Project Info
    this.projectName    = this.answers.projectName;
    this.versionControl = this.answers.versionControl;

    // Server Info
    this.useServer          = this.answers.useServer;
    this.dbOption           = this.answers.dbOption;
    this.useSession         = this.answers.useSession;
    this.useSecurity        = this.answers.useSecurity;
    this.useServerTemplates = this.answers.useServerTemplates;

    this.answers.dbUser = this.answers.dbUser === 'nouser' ? '' : this.answers.dbUser;
    this.answers.dbPass = this.answers.dbPass === 'nopass' ? '' : this.answers.dbPass;

    // Setup Database URLs
    var username = this.answers.dbUser;
    var password = this.answers.dbPass ? ':' + this.answers.dbPass : '';
    var port     = this.answers.dbPort;
    var host     = this.answers.dbUser ? '@' + this.answers.dbHost : this.answers.dbHost;
    var name     = this.answers.dbName ? this.answers.dbName : '';

    if (this.dbOption === 'mongodb') {
        this.dbURL = process.env.MONGODB || 'mongodb://' +
        username +
        password +
        host + ':' +
        port + '/' +
        name;
    }
    else if (this.dbOption === 'mysql') {
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
    this.useJsx                = this.answers.useJsx;
    this.useFlux               = this.answers.useFlux;
    this.jsTemplate            = this.answers.jsTemplate;
    this.jsOption              = this.answers.jsOption;
    this.cssOption             = this.answers.cssOption;
    this.sassSyntax            = this.answers.sassSyntax;
    this.useBourbon            = this.answers.useBourbon;
    this.useLesshat            = this.answers.useLesshat;
    this.cssFramework          = this.answers.cssFramework;
    this.ieSupport             = this.answers.ieSupport;
    this.useGA                 = this.answers.useGA;
    this.jshint                = this.answers.jshint;
    this.extras                = this.answers.extras;

    // Testing
    this.testFramework         = this.answers.testFramework;
    this.useTesting = this.answers.useTesting;

    // Documentation
    this.useJsdoc              = this.answers.useJsdoc;
    this.useKss                = this.answers.useKss;
    this.useDashboard          = this.answers.useDashboard;

    // Deployment
    this.useFTP                = this.answers.useFTP;
    this.ftpHost               = this.answers.ftpHost;
    this.ftpFolder             = this.answers.ftpFolder;
    this.ftpUser               = this.answers.ftpUser === 'nouser' ? '' : this.answers.ftpUser;
    this.ftpPass               = this.answers.ftpUser === 'nopass' ? '' : this.answers.ftpPass;

    // Default Overwrites
    if (this.jsFramework === 'react') {
        this.jsTemplate = this.answers.jsTemplate = 'react';
        this.jsOption   = this.answers.jsOption   = 'browserify';
    }

    // Default jsOption to Browserify
    this.jsOption = this.answers.jsOption || 'browserify';

    // Determine if feature exists within a given object
    function hasFeature(feat, obj) {
        if (obj) {
            return obj.indexOf(feat) !== -1;
        }
    }

    // Intially set flags to false
    this.useBootstrap  = this.answers.useBootstrap ? this.answers.useBootstrap : false;
    this.responsive    = false;
    this.useFoundation = false;

    if (this.cssFramework === 'bootstrap') {
        this.useBootstrap = true;
        if (this.ieSupport) {
            this.responsive = true;
        }
    }
    else if (this.cssFramework === 'foundation') {
        this.useFoundation = true;
    }

    this.useFontAwesome = hasFeature('useFontAwesome', this.extras);
    this.useModernizr   = hasFeature('useModernizr', this.extras);

};

module.exports = answersConfig;