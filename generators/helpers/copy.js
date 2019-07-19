'use strict';

function copy(input, output) {
  this.fs.copy(this.templatePath(input), this.destinationPath(output));
};

function copyTpl(input, output, data) {
  this.fs.copyTpl(
    this.templatePath(input),
    this.destinationPath(output),
    data
  );
};

module.exports = {
  copy: copy,
  copyTpl: copyTpl
};
