# Changing the root directory
Need to change the location of a Yeogurt site from `/` to `/subdir/`? Follow this guide to set up your project.

*Note: This guide has only been tested for static sites. Other setups may vary.

## Steps

### 1. Change location of `tmp` folder
In `/Gruntfile.js` change the following lines of code from
```
var config = {
  client: 'client',
  tmp: 'tmp',
  dist: 'dist',
  server: 'server'
};
```
to
```
var config = {
  client: 'client',
  tmp: 'tmp/subdir',
  dist: 'dist',
  server: 'server'
};
```

### 2. Change Grunt Connect settings
In `/grunt/config/server/connect.js` edit the `grunt.config.set()` function so that it looks like this:
```
grunt.config.set('connect', {
    options: {
      port: 9010,
      livereload: 35729,
      hostname: '127.0.0.1'
    },
    server: {
      options: {
        open: 'http://127.0.0.1:9010/subdir',
        base: '<%= yeogurt.client %>/',
        middleware: function(connect) {
          return [
            connect.static('tmp'),
            connect().use('/subdir/bower_components', connect.static('./client/bower_components')),
            connect().use('/subdir/images', connect.static('./client/images')),
            connect.static('client')
          ];
        }
      }
    },
    dist: {
      options: {
        open: 'http://127.0.0.1:9010/subdir',
        base: '<%= yeogurt.dist %>/',
        middleware: function(connect) {
          return [
            connect.static('dist'),
            connect().use('/subdir/', connect.static('dist'))
          ];
        },
        livereload: false
      }
    }
  });
  ```

## Change absolute paths to relative
Be sure to change any absolute paths `/somePath.css` to relative paths: `somePath.css` otherwise your resources will not load correctly. Check `client/templates/layouts/base.jade` and `client/templates/index.jade`, as they will most likely have absolute pathing for all resources.

## Usage
After following all of the steps outlined above, you should be all set. Start up your development server with `grunt serve` and begin building with your updated root directory.
