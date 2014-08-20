/**
 * Generate prompts for server information
 */

'use strict';

var serverInfo = function serverInfo() {
    if (this.skipConfig) {
        return;
    }

    var cb = this.async();

    this.log('\n---- ' + 'Server'.red.underline + ' ----\n');

    this.prompt([{
        type: 'confirm',
        name: 'useServer',
        message: 'Would you like to use a ' + 'Node + Express Server'.blue + '?',
        default: true
    }, {
        when: function(answers) { return answers.useServer; },
        type: 'list',
        name: 'dbOption',
        message: 'What ' + 'database type'.blue + ' would you like to use ?',
        choices: ['MongoDB', 'MySQL', 'None'],
        filter: function(val) {
            var filterMap = {
                'MongoDB': 'mongodb',
                'MySQL': 'mysql',
                'None': 'none'
            };

            return filterMap[val];
        }
    }, {
        when: function(answers) { return answers.dbOption !== 'none' && answers.useServer; },
        name: 'dbHost',
        message: 'What is your ' + 'database host/url'.blue + '?',
        default: 'localhost'
    }, {
        when: function(answers) { return answers.dbOption === 'mysql'; },
        name: 'dbPort',
        message: 'What ' + 'port'.blue + ' is your database running on?',
        default: '3306'
    }, {
        when: function(answers) { return answers.dbOption === 'mongodb'; },
        name: 'dbPort',
        message: 'What ' + 'port'.blue + ' is your Database running on?',
        default: '27017'
    }, {
        when: function(answers) { return answers.dbOption !== 'none' && answers.useServer; },
        name: 'dbName',
        message: 'What is the ' + 'name'.blue + ' of your database?',
        default: 'yeogurt_db'
    }, {
        when: function(answers) { return answers.dbOption !== 'none' && answers.useServer; },
        name: 'dbUser',
        message: 'What is your ' + 'username'.blue + ' for this database?',
        default: 'root'
    }, {
        when: function(answers) { return answers.dbOption !== 'none' && answers.useServer; },
        name: 'dbPass',
        message: 'What is your ' + 'password'.blue + ' for this database?'
    }], function(answers) {
        this.serverInfo = answers;

        cb();
    }.bind(this));
};

module.exports = serverInfo;