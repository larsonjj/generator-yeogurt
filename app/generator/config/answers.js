/**
 * Handle prompt choices and setup template values
 * For file creation
 */

'use strict';

var _ = require('lodash');

var answersConfig = function answersConfig() {

    // Determine if feature exists within a given object
    var hasFeature = function(feat, obj) {
        if (obj) {
            return obj.indexOf(feat) !== -1;
        }
    };

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
    this.useServer = this.answers.useServer;

    this.dbType = this.answers.dbType || this.answers.dbOption;

    if (this.answers.dbOption === 'sql' || this.answers.dbOption === 'mysql' || this.answers.dbOption === 'postgres') {
        this.answers.dbType = this.dbType;
        this.dbOption = 'sql';
        this.answers.dbOption = 'sql';
    }
    else {
        this.dbOption = this.answers.dbOption;
    }

    this.useAuth = this.answers.useAuth;

    // Clear dbPass and/or dbUser if 'nouser' and/or 'nopass'
    if (this.answers.dbUser === 'nouser') {this.answers.dbUser = '';}
    if (this.answers.dbPass === 'nopass') {this.answers.dbPass = '';}

    this.dbUser = this.answers.dbUser;
    this.dbPass = this.answers.dbPass;

    // Setup Database URLs
    var username = this.dbUser || '';
    var password = this.dbPass ? ':' + this.dbPass : '';
    var port     = this.answers.dbPort;
    var host     = this.dbUser ? '@' + this.answers.dbHost : this.answers.dbHost;
    var name     = this.answers.dbName ? this.answers.dbName : '';

    if (this.dbOption === 'mongodb') {
        this.dbURL = process.env.MONGODB || 'mongodb://' +
        username +
        password +
        host + ':' +
        port + '/' +
        name;
    }
    else if (this.dbType === 'sql') {
        this.dbURL = process.env.MYSQL || 'mysql://' +
        username +
        password +
        host + ':' +
        port + '/' +
        name;
    }
    else if (this.dbType === 'postgres') {
        this.dbURL = process.env.MYSQL || 'postgres://' +
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
    this.jsTemplate            = this.answers.jsTemplate;
    this.jsOption              = this.answers.jsOption;
    this.cssOption             = this.answers.cssOption;
    this.sassSyntax            = this.answers.sassSyntax;
    this.extras                = this.answers.extras;

    // Testing
    this.testFramework         = this.answers.testFramework;
    this.useTesting            = this.answers.useTesting;

    // Documentation
    this.useJsdoc              = this.answers.useJsdoc;
    this.useKss                = this.answers.useKss;
    this.useDashboard          = this.answers.useDashboard;

    // Deployment
    this.useFTP                = this.answers.useFTP;
    this.ftpHost               = this.answers.ftpHost;
    this.ftpFolder             = this.answers.ftpFolder;

    // Clear ftpPass and/or ftpUser if 'nouser' and/or 'nopass'
    if (this.answers.ftpUser === 'nouser') {this.answers.ftpUser = '';}
    if (this.answers.ftpPass === 'nopass') {this.answers.ftpPass = '';}

    this.ftpUser = this.answers.ftpUser;
    this.ftpPass = this.answers.ftpPass;

    // Default Overwrites
    if (this.jsFramework === 'react') {
        this.jsOption   = this.answers.jsOption   = 'browserify';
    }
    else if (this.jsFramework === 'angular') {
        this.jsOption   = this.answers.jsOption   = 'none';
    }

    // Default jsOption to Browserify
    this.jsOption = this.answers.jsOption || 'browserify';
};

module.exports = answersConfig;
