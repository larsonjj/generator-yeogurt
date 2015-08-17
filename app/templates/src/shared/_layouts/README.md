# Layouts

This "Layouts" folder is designated for all page layouts.

## Example

An example layout:
<% if (htmlOption === 'jade') { %>
```jade
extend ./base

// Add extra stylesheets
block append stylesheets

block content
  //- Provides layout level markup
  .layout-wrapper.two-col
    block first
        //- Add first column content here
    block second
        //- Add second column content here

// Add extra scripts
block append scripts
```<% } else if (htmlOption === 'nunjucks') { %>
```nunjucks
{% extends "base.nunjucks" %}

// Add extra stylesheets
{% block stylesheets %}{% endblock %}

{% block content %}
  //- Provides layout level markup
  <div class="layout-wrapper two-col">
    {% block first %}
        //- Add first column content here
    {% endblock %}
    {% block second %}
        //- Add second column content here
    {% endblock %}
  </div>
{% endblock %}

// Add extra scripts
{% block scripts %}{% endblock }
```<% } %>

> NOTE: The `append stylesheets` and `append scripts` blocks allow you to add on any layout-specific scripts or stylesheets.
> The `content` block is overriding the parent `base.jade` file's block by the same name since we are extending from it.
> The `first` and `second` blocks can contain default markup, but also allow you to extend from this layout and overwrite them.
> You can read more about extensions and blocks on the [Jade website](http://jade-lang.com/reference/)

## Sub-generator

You can easily create new modules using the built-in sub-generator like so:

```
yo yeogurt:layout two-col
```

### Extend from a layout other than `base`

You can also create a new layout that extends from a different layout file than `base.jade`.

```
yo yeogurt:layout three-col --layout=two-col
```

This new layout will look something like this:
<% if (htmlOption === 'jade') { %>
```jade
extend ./two-col

// Add extra stylesheets
block append stylesheets

block content
  //- Provides layout level markup
  .layout-wrapper.three-col
    block three-col

// Add extra scripts
block append scripts
```<% } else if (htmlOption === 'nunjucks') { %>
```nunjucks
{% extends "two-col.nunjucks" %}

// Add extra stylesheets
{% block stylesheets %}{% endblock %}

{% block content %}
  //- Provides layout level markup
  <div class="layout-wrapper three-col">
    {% block three-col %}{% endblock %}
  </div>
{% endblock %}

// Add extra scripts
{% block scripts %}{% endblock }
```<% } %>
