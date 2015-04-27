<!DOCTYPE html>
<!--[if lte IE 8]><html class="lt-ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title><%= projectName %></title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/><% if (useServer) { %>
    <meta name="csrf-token" content="{{_csrf}}" /><% } %>

    <link rel="stylesheet" href="styles/vendor.css"/>
    <link rel="stylesheet" href="styles/main.css"/>
  </head>
  <body>
    <!--[if lte IE 8]>
    <p class="browsehappy">
      You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
    </p>
    <![endif]-->

    {% block content %}{% endblock %}

    <script src="scripts/vendor.js"></script><% if  (jsOption === 'requirejs') { %>

    <script data-main="scripts/main", src="node_modules/requirejs/require.js"></script><% } else { %><% if (jsFramework === 'backbone') { %>
    <script src="scripts/routes.js"></script><% } %>
    <script src="scripts/main.js"></script><% } %>
  </body>
</html>
