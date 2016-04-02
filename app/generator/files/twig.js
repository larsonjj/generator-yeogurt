/**
 * Generate files specific to the twig folder
 */

'use strict';

var twigFiles = function twigFiles() {
  if (this.htmlOption === 'twig') {
    this.template('src/static/twig/_layouts/base.twig', 'src/_layouts/base.twig');
    this.template('src/static/twig/_modules/link/link.twig', 'src/_modules/link/link.twig');
    this.template('src/static/twig/index.twig', 'src/index.twig');
  }
};

module.exports = twigFiles;
