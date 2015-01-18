/**
 * Create prompts for client info
 */

'use strict';

var deploymentPrompts = function deploymentPrompts() {
  if (this.existingConfig || this.serverPrompts.useServer) {
    return;
  }

  var cb = this.async();
  var self = this;

  this.log('\n---- ' + 'Deployment'.red.underline + ' ----\n');

  this.prompt([{
    when: function() { return !self.serverPrompts.useServer; },
    type: 'confirm',
    name: 'useFTP',
    message: 'Will you be deploying code to an ' + 'FTP server'.blue + '?',
    default: true
  }, {
    when: function(answers) { return answers.useFTP; },
    type: 'input',
    name: 'ftpHost',
    message: 'What is your ' + 'FTP host/url'.blue + '?',
    validate: function(val) {
      if (val || (/nohost/i).test(val)) {
        return true;
      }
      else {
        return 'This field is required (enter "nohost" to leave blank)';
      }
    }
  }, {
    when: function(answers) { return answers.useFTP; },
    type: 'input',
    name: 'ftpFolder',
    message: 'What ' + 'folder'.blue + ' will you be uploading to on your server?',
    default: '/'
  }, {
    when: function(answers) { return answers.useFTP; },
    type: 'input',
    name: 'ftpUser',
    message: 'What is your ' + 'username' + ' for this FTP server?',
    validate: function(val) {
      if (val || (/nouser/i).test(val)) {
        return true;
      }
      else {
        return 'This field is required (enter "nouser" to leave blank)';
      }
    }
  }, {
    when: function(answers) { return answers.useFTP; },
    type: 'input',
    name: 'ftpPass',
    message: 'What is your ' + 'password' + ' for this FTP server?',
    validate: function(val) {
      if (val || (/nopass/i).test(val)) {
        return true;
      }
      else {
        return 'This field is required (enter "nopass" to leave blank)';
      }
    }
  }], function(answers) {
    this.deploymentPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = deploymentPrompts;
