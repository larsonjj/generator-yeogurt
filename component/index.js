'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var generatorUtils = require('./util.js');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the component subgenerator with the argument ' + this.name + '.');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.files = function files() {
	var filename = this._.slugify(this.name);

	var componentnamesplit = filename.split('-');
	var componentname = '';

	for(var i = 1, ii = componentnamesplit.length; i < ii; i+=1){
		
		if (i === (ii-1)){
			componentname += componentnamesplit[i];	
		}else{
			componentname += componentnamesplit[i] + '-';
		}
	}

	// write the component example
	var componentExample = 'mixin ' + componentname + '(content)\n\n    //- Available parameters:\n        class = selector value\n\n    - var content = content || {};\n    - content.class = content.class || "";\n\n    // COMPONENT ' + this.name + '\n\n    .' + componentname + '(class= content.class)\n        // Component Content Goes Here\n\n    // END: COMPONENT ' + this.name;

	this.write('jade/components/' + filename + '.jade', componentExample);

	// write the style guide example
	var styleGuideExample = 'extends ../templates/t000-style-guide\nblock component\n    +' + componentname + '()';

	this.write('jade/style-guide/' + filename + '.jade', styleGuideExample);

	// write the scss file
	this.write('styles/components/_' + filename + '.scss', '.' + componentname + ' {}');
	
};

ComponentGenerator.prototype.addComponentToMixin = function addComponentToMixin() {
	try {
		generatorUtils.rewriteFile({
			file: 'jade/mixins.jade',
			needle: '//- endbuild',
			splicable: [
				'include components/' + this._.slugify(this.name)
			]
		});
	} catch (e) {
		console.log('error adding component to mixins.jade');
	}
};

ComponentGenerator.prototype.addComponentToCSS = function addComponentToCSS() {
	try {
		generatorUtils.rewriteFile({
			file: 'styles/main.scss',
			needle: '//- endbuild',
			splicable: [
				'@import \'components/_' + this._.slugify(this.name) + '\';'
			]
		});
	} catch (e) {
		console.log('error adding component to main.scss');
	}
};

ComponentGenerator.prototype.addComponentToStyleGuide = function addComponentToStyleGuide() {
	try {
		generatorUtils.rewriteFile({
			file: 'dashboard/jade/components/page-list.jade',
			needle: '//- endbuild',
			splicable: [
				'li.queued.project-list-item: a(href=\'../html/style-guide/' + this._.slugify(this.name) + '.html\', target=\'_top\') ' + this.name
			]
		});
	} catch (e) {
		console.log('error adding component to page-list.jade');
	}
};
