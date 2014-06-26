/**
 * Module dependencies.
 */

'use strict';
<% if (dbOption === 'MongoDB') { %>
var mongoose = require('mongoose');<% } %>
var settings = require('./settings');<% if ('MySQL'.indexOf(dbOption) > -1) { %>
var Sequelize = require('sequelize');<% } %>

// Add coloring for console output
require('colors');

/**
 * Database Connection.
 */
module.exports.connect = function() {
    <% if (dbOption === 'MongoDB') { %>
    var connect = function() {
        var options = {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            },
            auto_reconnect: true
        };
        // Connect to database
        mongoose.connect(settings.database.url, options);
    };
    connect();

    // Success handler
    mongoose.connection.on('connected', function() {
        console.log('✔ MongoDB Connection Success!'.green);
    });

    // Error handler
    mongoose.connection.on('error', function() {
        console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.'.red);
    });

    <% } %><% if ('MySQL'.indexOf(dbOption) > -1) { %>
    var options = {
        // Database Type
        dialect: 'mysql',

        // max concurrent database requests; default: 50
        maxConcurrentQueries: 50,

        // disable inserting undefined values as NULL
        // - default: false
        omitNull: false,

        // a flag for using a native library or not.
        // in the case of 'pg' -- set this to true will allow SSL support
        // - default: false
        native: false,

        // Specify options, which are used when sequelize.define is called.
        // The following example:
        //   define: {timestamps: false}
        // is basically the same as:
        //   sequelize.define(name, attributes, { timestamps: false })
        // so defining the timestamps for each model will be not necessary
        define: {
            underscored: false,
            freezeTableName: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        },

        // similiar for sync: you can define this to always force sync for models
        sync: {
            force: true
        },

        // sync after each association (see below). If set to false, you need to sync manually after setting all associations. Default: true
        syncOnAssociation: true,

        // use pooling in order to reduce db connection overload and to increase speed
        // currently only for mysql and postgresql (since v1.5.0)
        pool: {
            maxConnections: 5,
            maxIdleTime: 30
        },

        // language is used to determine how to translate words into singular or plural form based on the [lingo project](https://github.com/visionmedia/lingo)
        // options are: en [default], es
        language: 'en'
    };

    // Connect to database
    var sequelize = new Sequelize(settings.database.url, options);
    sequelize.authenticate().complete(function(err) {
        if ( !! err) {
            console.error('✗ Database Connection Error: \n'.red, err);
        }
        else {
            console.log('✔ MySQL Connection Success!'.green);
        }
    });

    // Return instance of sequelize
    return sequelize;
    <% } %>
};