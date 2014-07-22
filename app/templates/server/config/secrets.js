'use strict';

var secretsConfig = {
    sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here'
};

module.exports = secretsConfig;