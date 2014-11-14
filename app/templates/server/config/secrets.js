/**
 * Secrets Configuration
 * Place all project secrets, passwords, api keys, etc here
 * This file is ignored from version control by default
 */
'use strict';

var secretsConfig = {
    sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',<% if (authTypes.indexOf('facebook') > -1) { %>

    facebook: {
        clientID: process.env.FACEBOOK_ID || '726588627382775',
        clientSecret: process.env.FACEBOOK_SECRET || '5d8e843e3b3c495f975e1c9de78fee74',
        callbackURL: '/auth/facebook/callback',
        passReqToCallback: true
    },<% } %><% if (authTypes.indexOf('twitter') > -1) { %>

    twitter: {
        consumerKey: process.env.TWITTER_KEY || 'lgms0hf4Uv634IYQDcYNUYJ0S',
        consumerSecret: process.env.TWITTER_SECRET || 'lzvYUlkuPNzvau1Qz2EYqdNtHePGNnpYsujjHFrRkmLbyBT28H',
        callbackURL: '/auth/twitter/callback',
        passReqToCallback: true
    },<% } %>
};

module.exports = secretsConfig;
