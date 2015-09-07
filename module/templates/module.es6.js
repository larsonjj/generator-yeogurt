'use strict';

export default class <%= _.classify(name.toLowerCase()) %> {
  constructor() {
    this.name = '<%= name %>';
    console.log('%s module', this.name);
  }
}
