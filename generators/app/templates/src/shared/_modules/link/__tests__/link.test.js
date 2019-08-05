<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

import { Link } from '../link';

describe('Link View', function() {

  beforeEach(() => {
    this.link = new Link();
  });

  it('Should run a few assertions', () => {
    expect(this.link)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
