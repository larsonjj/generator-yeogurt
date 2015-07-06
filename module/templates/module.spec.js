'use strict';

import <%= _.classify(name) %> from '../<%= _.slugify(name.toLowerCase()) %>';

describe('<%= _.classify(name) %> View', () =>

  beforeEach(() => {
    this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', () => {
    expect(this.<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
