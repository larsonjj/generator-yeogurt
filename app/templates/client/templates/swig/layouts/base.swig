{#
    Base template
    All other templates should extend from this
#}

{# [injector:swig] #}
{# [endinjector] #}

<!DOCTYPE html><% if (ieSupport) { %>
<!--[if IE 8]><html class="ie8<% if (useModernizr) { %> no-js<% } %>" lang="en"><![endif]-->
<!--[if IE 9]><html lang="en" class="ie9<% if (useModernizr) { %> no-js<% } %>"><![endif]-->
<!--[if !IE]><!--><% } %>
<html<% if (useModernizr) { %> class="no-js"<% } %> lang="en"><% if (ieSupport) { %>
    <!--<![endif]--><% } %>
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <title><%= projectName %></title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/><% if (useServer && useAuth && useSecurity) { %>
        <meta name="csrf-token" content="{{_csrf}}" /><% } %><% if (useGA) { %>
        <link href="//www.google-analytics.com" rel="dns-prefetch"><% } %><% if (cssOption === 'css') { %><% if (useServer) { %>

        {% if env == 'development' %}<% } else { %>

        <% } %><!-- build:css(client) styles/global.css --><% if (useNormalize) { %>
        <link rel="stylesheet" href="/bower_components/normalize.css/normalize.css"><% } %><% if (useFontAwesome) { %>
        <link rel="stylesheet" href="/bower_components/font-awesome/css/font-awesome.css"><% } %>
            <!-- [injector:css] -->
            <!-- [endinjector] -->
        <!-- endbuild -->

        <!-- build:css(client) styles/main.css -->
        <link rel="stylesheet" href="/styles/main.css">
        <!-- endbuild --><% if (useServer) { %>
        {% else %}
        <link rel="stylesheet" href="/styles/main.css">
        {% endif %}<% } %><% } else { %>

        <link rel="stylesheet" href="/styles/main.css"><% } %><% if (useModernizr) { %>

        <script src="/bower_components/modernizr/modernizr.js"></script><% } %><% if (ieSupport) { %>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="/bower_components/html5shiv/dist/html5shiv-printshiv.js"></script>
        <script>
            // Protect window.console method calls, e.g. console is not defined on IE
            (function() {
                if (!window.console) {
                    window.console = {};
                }
                // union of Chrome, FF, IE, and Safari console methods
                var m = [
                    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
                    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
                    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
                ];
                // define undefined methods as noops to prevent errors
                for (var i = 0; i < m.length; i++) {
                    if (!window.console[m[i]]) {
                        window.console[m[i]] = function() {};
                    }
                }
            })();
        </script>
        <![endif]--><% } %>
    </head>
    <body>
        <!--[if lte IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        {% block layout %}
        {% block content %}{% endblock %}
        {% endblock %}<% if (useGA) { %>


        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script><% } %><% if (jsFramework === 'react') { %>

        <!--[if lt IE 9]>
        <script src="/bower_components/es5-shim/es5-shim.js"></script>
        <script src="/bower_components/es5-shim/es5-sham.js"></script>
        <![endif]--><% } %>

<% if (useServer) { %>        {% if env == 'development' %}<% } %>
        <!-- build:js(client) scripts/global.js -->
        <script src="/bower_components/jquery/dist/jquery.js"></script>
        <!-- endbuild --><% if (useServer) { %>
        {% else %}
        <script src="/scripts/globals.js"></script>
        {% endif %}<% } %><% if  (jsOption === 'requirejs') { %>

        <script data-main="scripts/main", src="bower_components/requirejs/require.js"></script><% } else if (jsOption === 'browserify') { %>

        <script src="/scripts/app.js"></script><% } else { %>

        <!-- build:js(client) scripts/app.js -->
            <!-- [injector:js] -->
            <!-- [endinjector] --><% if (jsFramework === 'backbone') { %>
        <script src="/scripts/routes.js"></script><% } %>
        <script src="/scripts/app.js"></script>
        <!-- endbuild --><% } %>
    </body>
</html>
