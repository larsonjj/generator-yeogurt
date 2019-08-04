'use strict';

export default class <%= _.pascalCase(name) %> {
  constructor() {
    this.name = '<%= name %>';
    console.log('%s module', this.name.toLowerCase());
  }
}
