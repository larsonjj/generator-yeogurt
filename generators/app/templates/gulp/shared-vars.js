
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();

const defaultNotification = function(err) {
  return {
    subtitle: err.plugin,
    message: err.message,
    sound: 'Funk',
    onLast: true,
  };
};

const config = Object.assign({}, pjson.config, defaultNotification);

const args = minimist(process.argv.slice(2));

const dirs = config.directories;
const entries = config.entries;

const taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
const browserSync = browserSyncLib.create();

const join = (...paths) => paths.join('/');

export { gulp, plugins, args, config, taskTarget, browserSync, dirs, entries, join }
