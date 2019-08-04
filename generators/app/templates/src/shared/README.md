# Source

This "Source" folder is where all of your files associated with this site will go
and is considered the root ('/') of your site.
This is also where all of your pages will be generated when using the [page subgenerator](#Subgenerator).

## Pages

Pages are the main driver for static sites and also determine your site's routes.
All page templates (except index.{jade,nunjucks}) should be placed in a folder named by your desired route.
For example, a contact page would most likely be loaded at the `/contact` route.
You would acheive this by creating the following structure:

```
└── src
    └── contact
        └── index.{jade,nunjucks}
```

### Subgenerator

You can easily create new pages using the built-in sub-generator like so:

```
yo yeogurt:page about
```

This will create the structure you saw above:

```
└── src
    └── about
        └── index.{jade,nunjucks}
```

So when you boot up your site and go to `/about` you will see your new page.

### Specifying a layout

You can also create a new page that extends from a different layout file than `base.{jade,nunjucks}`.

```
yo yeogurt:page about --layout=two-col
```
