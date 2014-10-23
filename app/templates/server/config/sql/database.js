/**
 * Database Configuration
 */

'use strict';
var settings = require('./env/default');
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var db = {};

// Add coloring for console output
require('colors');

// Database Connection.
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
        lodashd: false,
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

// Import all models (optionally create associations)
fs
    .readdirSync(path.join(__dirname, '../models'))
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, '../models' , file));
        db[model.name] = model;
    });

// Associate models if `associate` method is found within model's `classMethods` object
Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;