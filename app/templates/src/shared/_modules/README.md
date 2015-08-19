# Modules

This "Modules" folder is designated for reusable pieces of code that are used within layouts and pages.

## Example

An example link module:

```
└── link
    ├── __tests__
    |   └── link.spec.js
    ├── link.{jade,nunjucks}
    ├── link.js
    └── link.scss
```

Each module should include a template, javascript file, stylesheet, and unit test file (if doing unit testing).
These files should use the same name, i.e `link`. If you don't need one of the files in a module, feel free to delete it.

## Sub-generator

You can easily create new modules using the built-in sub-generator like so:

```
yo yeogurt:module link
```

### Atomic modules

You can also create modules specific to [atomic design](http://patternlab.io/about.html) as well
by using the `--atomic` option with the following values: `atom`, `molecule`, and `organism`:

```
yo yeogurt:module link --atomic=atom
```

This will place your new module within the corresponding atomic folder like the following:

```
└── atoms
    └── link
        ├── __tests__
        |   └── link.spec.js
        ├── link.{jade,nunjucks}
        ├── link.js
        └── link.scss
```
