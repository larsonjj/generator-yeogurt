/**
 * Secrets Configuration
 */
'use strict';
// Place all project secrets, passwords, api keys, etc here
// This file is ignored from version control by default
var secretsConfig = {
    sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here'
};

module.exports = secretsConfig;