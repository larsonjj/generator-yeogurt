'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
// var getDirCount = require('../helpers/get-dir-count');
var path = require('path');
var yeogurtConf;

try {
  yeogurtConf = require(path.join(process.cwd(), './yeogurt.conf'));
  var directories = yeogurtConf.directories;
}
catch(e) {
  return; // Do Nothing
}

var DecoratorGenerator = module.exports = function DecoratorGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.useTesting = fileJSON.useTesting;

};

util.inherits(DecoratorGenerator, yeoman.generators.NamedBase);

// Prompts
DecoratorGenerator.prototype.ask = function ask() {
  if (this.jsFramework !== 'angular') {
    this.log('This subgenerator is only used for Angular Applications. It seems as though you are not using Angular');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var done = this.async();
  var prompts = [{
    name: 'decoratorFile',
    message: 'Where would you like to create this decorator?',
    default: yeogurtConf ? directories.source + '/' + directories.scripts : 'src/_scripts'
  }];

  this.prompt(prompts, function(answers) {

    this.decoratorFile = path.join(
        answers.decoratorFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );

    done();
  }.bind(this));
};

DecoratorGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  this.template('decorator.js', this.decoratorFile + '.decorator.js');

};
