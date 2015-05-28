# Deploying to FTP server
Want to deploy your builds to an FTP server? Follow this guide to get up and running quickly.

## Steps

### 1. Add grunt plugin
You will need to install the [`grunt-ftpush`](https://github.com/inossidabile/grunt-ftpush) plugin by running the following:

```
npm install --save-dev grunt-ftpush
```

### 2. Create deploy folder/file
You will then need to create a `deploy` folder within the `grunt/config` folder. Then you will want to create a `ftpush.js` file within that new folder.
Once both the new file dn folder exist, add the following to `ftpush.js`:

```
// Configuration for FTPush task(s)
// Pushes site/project build to FTP server
// Connection information found in `.ftppass` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('secret', {});

  grunt.config.set('ftpush', {
    build: {
      simple: true,
      auth: {
        host: '<%= secret.host %>',
        port: 21,
        authKey: 'key1'
      },
      src: '<%= yeogurt.dist %>',
      dest: '<%= secret.serverPath %>',
      exclusions: ['*.svn', '.svn/', '.svn', '*.git', '.git/', '.git', 'tmp'],
      server_sep: '/'
    }
  });

};

module.exports = taskConfig;
```

### 3. Add grunt task loader in `Gruntfile.js`

```
var deployConfig = loadTasks('./grunt/config/deploy');

invokeConfigFn(deployConfig);
```

### 4. Add FTP configuration file
Create a `.ftppass` file in the root directory of your project and add the following:

```
{
  "host": "/serverUrl",
  "serverPath": "/serverFolder",
  "key1": {
    "username": "ftpUser",
    "password": "ftpPass"
    }
}
```

Of course, replace the info above with your FTP server connection info and be sure to add `.ftppass` to your `.gitignore` and/or `.svnignore` files.

### 5. Create custom task
Once you have `grunt-ftpush` setup, you should create a custom `deploy` task. To do this, create a `deploy.js` file within the `grunt/tasks` folder.
Within that file, add the following:

```
// `grunt deploy`
// Build a production ready version of your site
// and push it to an FTP server

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('ftpinfo', 'Grab FTP info for deployment; If valid, then deploy to FTP server', function() {
    var ftpJSON = grunt.file.readJSON('.ftppass');
    if (ftpJSON.host === '') {
      grunt.log.error('ERROR: Deploy will not work until you fill out FTP server info in the ".ftppass" file!');
    } else {
      grunt.config.set('secret', ftpJSON);
      grunt.task.run(['ftpush']);
    }
  });

  grunt.registerTask('deploy', 'Build a production ready version of your site and deploy it to a desired FTP server.', [
    'test',
    'build',
    'ftpinfo'
  ]);
};

module.exports = taskConfig;
```

This will check to make sure the `.ftppass` file exists and set it's contents up to used within your `grunt/config/deploy/ftpush.js` file.

### 6. Test connection
Use a program like [Filezilla](https://filezilla-project.org/) to double check your connection info. If all looks looks good, continue to the next step.

## Usage
Now that your have everything configured, run `grunt deploy`. This should run your tests, build a production verision of your project/site, and then deploy it to your desired FTP server.

## Bugs/Issues


### `grunt deploy` is not copying files to FTP server

`grunt deploy` runs the [grunt-ftpush](https://github.com/inossidabile/grunt-ftpush) plugin. This plugin tries to cache files that have been transferred to an FTP server (even if there is an error). The cache is stored in the `.grunt` folder at the root of the project.

##### Solution
Delete the `.grunt` folder. Once this folder is deleted, it will remove the FTP cache and should now allow you to do a full FTP transfer using `grunt deploy`.
