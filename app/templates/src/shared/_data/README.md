# Data

This "Data" folder is the designated location for `json` file data
that will be injected into your templates under the `site.data` property.

## Example

If you have two json files in this data folder with the following contents:

```
└── _data
    ├── global.json
    └── menu.json
```

***menu.json***

```json
[{
  "name": "Home"
},{
  "name": "About"
}]
```

***global.json***

```json
{
  "siteName": "Sample"
}
```

They would be converted to the following object:

```js
{
  menu: [{
    name: "Home"
  }, {
    name: "About"
  }],
  global: {
    siteName: "Sample"
  }
}
```

And would then be injected into your template within the `site.data` property
so you could access your data like so:
<% if (htmlOption === 'jade') { %>
```jade
h1= site.data.global.siteName //- Sample
ul.menu
  each val in site.data.menu
    li= val.name //- Home, About
```<% } else if (htmlOption === 'nunjucks') { %>
```nunjucks
<h1>{{site.data.global.siteName}}</h1> <!-- Sample -->
<ul class="menu">
{% for val in site.data.menu %}
  <li>{{ val.name }}</li> <!-- Home, About -->
{% endfor %}
</ul>
```<% } %>
