# BuildControl for Deployment 
Do you like continuous integration and deploying only what is in `dist`? Want to push to a `gh-pages` branch or to [Heroku](https://www.heroku.com)? Do you want to create a custom deployment workflow? Follow this guide to get up and running.

## Steps

### 1. Add grunt plugin
You will need to install the [`grunt-build-control`](https://github.com/robwierzbowski/grunt-build-control) plugin by running the following:

```
npm install --save-dev grunt-build-control
```

### 2. Add BuildControl for `jit-grunt`
Make sure `jit-grunt` can find and load `grunt-build-control` by mapping it with a cleaner name in `Gruntfile.js`.

```javascript
require('jit-grunt')(grunt, {
  // translate buildcontrol to use the 'grunt-build-control' plugin
     buildcontrol: 'grunt-build-control'
});
```

### 3. Add `buildcontrol.js`
Create a new file in `grunt/util/` called `buildcontrol.js`. This is where task targets are specified. You can customize these to fit your needs. Take a look at the these [examples](https://github.com/robwierzbowski/grunt-build-control/tree/0744127b982a5ed0d52197e2a6e6f7f6a3cec7aa/test/scenarios) to see different configurations. Pose questions to the community there if you need help configuring something unique.

```javascript
// Configuration for Build Control task(s)
// Deploys the dist directory to a production branch
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('buildcontrol', {
    options: {
      dist: ['<%= yeogurt.dist %>'],
      commit: true,
      push: true,
      message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    pages: {
      options: {
        remote: 'git@github.com:changeusername/changerepo.git',
        branch: 'gh-pages'
      }
    },
    deploy: {
      options: {
        remote: 'git@github.com:changeusername/changerepo.git',
        branch: 'master'
      }
    },
    heroku: {
      options: {
        remote: 'git@heroku.com:example-heroku-webapp-1988.git',
        branch: 'master',
        tag: pkg.version
      }
    },
    local: {
      options: {
        remote: '../',
        branch: 'build'
      }
    }
  })
}

module.exports = taskConfig;
```

### 4. Make changes to `build.js`
Add the target tasks from `buildcontrol.js` to your build task by editing `build.js`. It is located at `/grunt/task/build.js`. This will let us run a targeted task like `grunt build:deploy` to initiate our deployment.

```javascript
// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', function(target) {

    grunt.task.run([
      'clean:dist',
      'injector',
      'wiredep',
      'copy:dist',
      'concurrent',
      'useminPrepare',
      'concat:generated',
      'cssmin',
      'autoprefixer:dist',
      'usemin',
      'htmlmin:dist',
      'uglify',
      'clean:tmp'
    ]);

    if (target === 'deploy') {
      return grunt.task.run(['buildcontrol:deploy'])
    }

    if (target === 'pages') {
      return grunt.task.run(['buildcontrol:pages'])
    }

   if (target === 'heroku') {
      return grunt.task.run(['buildcontrol:heroku'])
    }
  })
}

module.exports = taskConfig;
```

## Usage
Make sure you commit all changes on your current branch before deploying. BuildControl will check to see if you have uncommited changes when it is deploying. If you have uncommited changes it will stop the deployment and tell you to commit your outstanding changes.

Now that your have everything configured, run `grunt build:pages` or what ever your target task is that you have set up.


## Notes
Reference the [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control/blob/master/README.md) repo for addition usage, tips and bugs.

## Resources
Take a look at these [example configurations](https://github.com/robwierzbowski/grunt-build-control/tree/0744127b982a5ed0d52197e2a6e6f7f6a3cec7aa/test/scenarios) when you are setting up your desired deployment workflow.

I like to use build services that auto build from a specific branch to my servers. There are many options available. My personal favorite is [Dploy](http://dploy.io). It has a clean UI and is incredibly simple to configure. They have a free account that lets you build from 1 repo if anyone wants to try it.
