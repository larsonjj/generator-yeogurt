'use strict';

import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from '../package.json';
import minimist from 'minimist';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
export const plugins = gulpLoadPlugins();<% if (testFramework !== 'none') { %>

// Create karma server
export const KarmaServer = require('karma').Server;<% } %>

// Get package.json custom configuration
export const config = Object.assign({}, pjson.config);

// Gather arguments passed to gulp commands
export const args = minimist(process.argv.slice(2));

// Alias config directories
export const dirs = config.directories;

// Determine gulp task target destinations
export const taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
export const browserSync = browserSyncLib.create();
