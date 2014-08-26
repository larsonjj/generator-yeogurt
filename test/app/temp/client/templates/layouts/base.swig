{#
    Base template
    All other templates should extend from this
#}

{# [injector:swig] #}
{# [endinjector] #}

<!DOCTYPE html>
<!--[if IE 8]><html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]><html lang="en" class="ie9"><![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <title>testing</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="//www.google-analytics.com" rel="dns-prefetch">
        <!-- build:css(client) styles/main.css -->
        <link rel="stylesheet" href="/styles/main.css">
            <!-- [injector:css] -->
            <!-- [endinjector] -->
        <!-- endbuild -->
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
        <![endif]-->
    </head>
    <body>
        <!--[if lte IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        {% block content %}{% endblock %}

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
        
        <!-- build:js(client) scripts/globals.js -->
        <script src="/bower_components/jquery/dist/jquery.js"></script><!-- endbuild --><script src="/scripts/app.js"></script>
    </body>
</html>
