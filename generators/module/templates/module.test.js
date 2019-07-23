<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import <%= _.pascalCase(name) %> from '../<%= name.toLowerCase() %>';

describe('<%= _.pascalCase(name) %> View', function() {

  beforeEach(() => {
    this.<%= _.camelCase(name) %> = new <%= _.pascalCase(name) %>();
  });

  it('Should run a few assertions', () => {
    expect(this.<%= _.camelCase(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
