# Setting up Ruby Sass
Not a fan of [node-sass](https://github.com/sass/node-sass)? Want to use [Compass](http://compass-style.org/) or other sass extensions? Then this guide will get you up and running with [Ruby Sass](http://sass-lang.com/).

## Steps

### 1. Make sure Ruby and Sass are installed

Open up a terminal/command prompt, then type in the following commands and compare the responses:

|Command|Response
|-------|--------
|ruby -v| at or above 1.8.7
|sass -v| at or above 3.2.0

#### Ruby installation
If you don't have ruby installed or the version is too low, go to the [Ruby downloads](https://www.ruby-lang.org/en/downloads/) page and install a compatible version.

#### Sass installation
If you don't have Sass installed or the version is too low, go to the [Sass Installation](http://sass-lang.com/install) page and install a compatible version.

Once you have the necessary versions of Ruby and Sass, continue to the next step.

### 1. Choose `Sass` when running the generator

By default, this will install node-sass, but it's not a problem as it will be replaced in the next step.

### 2. Install the [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) plugin and remove the [grunt-sass](https://github.com/sindresorhus/grunt-sass) plugin.

```
npm install grunt-contrib-sass --save-dev && npm uninstall grunt-sass --save-dev
```

### 3. Edit your `grunt/config/compile/sass.js` file

Make the changes below to setup the needed configuration for `grunt-contrib-sass`.


```diff
 var taskConfig = function(grunt) {

   grunt.config.set('sass', {
     server: {
       options: {
         precision: 10,
-        outputStyle: 'nested',
+        style: 'nested',
         sourceMap: true,
-        includePaths: [
-          '<%%= yeogurt.client %>/styles/'
-        ]
       },
       files: {
         '<%%= yeogurttmp %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'
       }
     },
     dist: {
       options: {
         precision: 10,
-        outputStyle: 'nested',
+        style: 'nested',
-        sourceMap: true,
+        sourcemap: 'inline',
-        includePaths: [
-          '<%%= yeogurt.client %>/styles/'
-        ]
       },
       files: {
         '<%%= yeogurt.dist %>/styles/main.css': '<%%= yeogurt.client %>/styles/main.scss'
       }
     }
   });

 };
```

## Usage
After following all of the above steps, you should be all set. Start up your development server with `grunt serve` and begin building with Ruby Sass.
