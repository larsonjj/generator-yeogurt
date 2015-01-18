/**
 * Secrets Configuration
 * Place all project secrets, passwords, api keys, etc here
 * This file is ignored from version control by default
 */
'use strict';

var secretsConfig = {
  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here'<% if (useAuth) { %>,

  // List of user roles in order of lowest privileges
  userRoles: ['guest', 'user'],<% } %>
};

module.exports = secretsConfig;
