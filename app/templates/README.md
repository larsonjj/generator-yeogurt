# <%= _.titleize(projectName) %> readme

Generated on <%= (new Date).toISOString().split('T')[0] %> using
<%= pkg.name %> <%= pkg.version %>

## Technologies used

JavaScript
- Browserify
- Node<% if (testFramework === 'jasmine' || testFramework === 'mocha') { %>

Testing
- Karma<% if (testFramework === 'jasmine') { %>
- Jasmine<% } else if (testFramework === 'mocha') { %>
- Mocha<% } %><% } %>

Styles<% if (cssOption === 'sass') { %>
- Sass via (node-sass)<% } else if (cssOption === 'less') { %>
- Less<% } else if (cssOption === 'stylus') { %>
- Stylus<% } %>

Markup<% if (htmlOption === 'jade') { %>
- Jade<% } else if (htmlOption === 'nunjucks') { %>
- Nunjucks<% } %>

Optimization
- Imagemin
- Uglify

Server
- BrowserSync

Linting
- ESlint

Automation
- Gulp

Code Management
- Editorconfig
- Git


## Description

This is an example readme file.
Describe your site/app here.
