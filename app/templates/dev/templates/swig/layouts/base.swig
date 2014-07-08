{#
    Base template
    All other templates will extend from this
#}

{# [include:component] #}
{# [/include] #}

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <% if (useGA) { %>
        <link href="//www.google-analytics.com" rel="dns-prefetch">
        <% } %>
        <% if (cssOption === 'None (Vanilla CSS)') { %><!-- build:css(dev) styles/main.css -->
        <% if (useBootstrap) { %><link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css" media="screen">
        <% } %><% if (useFoundation) { %><link rel="stylesheet" href="bower_components/foundation/css/normalize.css"><link rel="stylesheet" href="bower_components/foundation/css/foundation.css">
        <% } %><% if (useFontAwesome) { %>
        <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css"><% } %><link rel="stylesheet" href="styles/main.css" media="screen">
        <% if (ieSupport) { %><!-- endbuild -->
        <!-- build:css(dev) styles/print.css -->
        <link rel="stylesheet" href="styles/print.css" media="print">
        <!-- endbuild --><% } else { %>
        <link rel="stylesheet" href="styles/print.css">
        <!-- endbuild --><% } %>
        <% } else { %><link rel="stylesheet" href="styles/main.css"<% if (ieSupport) { %>  media="screen"<% } %>><% if (ieSupport) { %>
        <link rel="stylesheet" href="styles/print.css" media="print"><% } %><% } %><% if (useModernizr) { %>
        <script src="bower_components/modernizr/modernizr.js"></script><% } %><% if (ieSupport) { %>
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if IE 8]>
        <% if (responsive) { %>
        <script src="bower_components/respond/respond.min.js"></script><% } %>
        <script src="bower_components/html5shiv/dist/html5shiv-printshiv.js"></script>
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
    {# Blocking off body tag so pages have the ability change the body's class #}
    {% set bodyClass = false %}
    {% block body %}
        {% if bodyClass %}
        <body class="{{bodyClass}}">
        {% else %}
        <body>
        {% endif %}
    {% endblock %}

    {% block content %}{% endblock %}

        <% if (useGA) { %><!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script><% } %>

        {#
            Place all vendor library/plugin/framework scripts within the 'build:js' comments below,
            so they will be optimised correctly during a 'grunt build' task
        #}
        <!-- build:js(dev) scripts/vendor.js -->
        <script src="bower_components/jquery/dist/jquery.js"></script>
        <% if  (useBootstrap) { %><script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>affix.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>alert.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>button.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>carousel.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>collapse.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>dropdown.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>modal.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>scrollspy.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>tab.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>tooltip.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>popover.js"></script>
        <script src="bower_components/<% if (cssOption === 'SASS') { %>bootstrap-sass-official/vendor/assets/javascripts/bootstrap/<% } else if (cssOption === 'LESS' || cssOption === 'None (Vanilla CSS)') { %>bootstrap/js/<% } %>transition.js"></script>
        <% } %><% if (useFoundation) { %><script src="bower_components/foundation/js/vendor/fastclick.js"></script>
        <script src="bower_components/foundation/js/vendor/jquery.cookie.js"></script>
        <script src="bower_components/foundation/js/vendor/placeholder.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.abide.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.accordion.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.alert.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.clearing.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.dropdown.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.equalizer.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.interchange.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.joyride.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.magellan.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.offcanvas.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.orbit.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.reveal.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.slider.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.tab.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.tooltip.js"></script>
        <script src="bower_components/foundation/js/foundation/foundation.topbar.js"></script>
        <% } %><!-- endbuild -->

        {#
            Author Scripts
        #}
        <% if  (jsOption ==='RequireJS') { %><script data-main="scripts/main", src="bower_components/requirejs/require.js"></script><% } else if (jsOption ==='Browserify') { %><script src="scripts/main.js"></script><% } else { %>{#
            Place all author scripts within the 'build:js' comments below,
            so they will be optimised correctly during a 'grunt build' task
        #}
        <!-- build:js(dev) scripts/app.js -->
        <script src="scripts/app.js"></script>
        <!-- endbuild --><% } %>
    </body>
</html>
