/*jshint newcap:false */
'use strict';

var React = require('react');

// Alias for making element creation less verbose
var DOM = React.createElement;
var DefaultLayout = require('./layouts/default');

var IndexComponent = React.createClass({
  displayName: 'IndexComponent',
  render: function() {
    return (
      DOM(DefaultLayout, null,
        DOM('div', {
            className: 'main-container'
          },
          DOM('div', {
              className: 'yeogurt-info'
            },
            DOM('h1', null, 'Welcome to Yeogurt!'),
            DOM('p' ,null,
              'Take a look at the ', DOM('a', {
                href: 'https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---'
              }, 'documentation'), ' and start mixing up something awesome.'
            ),
            DOM('p' ,null,
              DOM('img', {
                src: '/images/yeogurt-swirl.png',
                width: '75px',
                className: 'logo'
              })
            )<% if (useJsdoc || useKss) { %>,
            DOM('p' ,{
                className: 'links'
              },<% if (useKss) { %>
              DOM('a', {
                href: '/docs/styleguide/index.html'
              }, 'Styleguide')<% } %><% if (useJsdoc) { %>,
              DOM('a', {
                href: '/docs/api/index.html'
              }, 'API')<% } %>
            )<% } %>
          )
        ),
        DOM('code', {
          className: 'version'
        }, 'v<%= pkg.version %>')
      )
    );
  }
});

module.exports = IndexComponent;
