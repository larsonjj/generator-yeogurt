# generator-yeogurt [![Build Status](https://secure.travis-ci.org/larsonjj/generator-yeogurt.png?branch=master)](https://travis-ci.org/larsonjj/generator-yeogurt)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-yeogurt from npm, run:

```
$ npm install -g generator-yeogurt
```

Finally, initiate the generator:

```
$ yo yeogurt
```

### Yeogurt Component Sub-Generator

The component generator assumes the project directory has the following sub directories and files.

```
├── project
│   └── dashboard
│   	└── jade
│   		└── components
│   			├── page-list.jade
│   └── jade
│   	├── mixins.jade
│   └── styles
│   	├── main.scss
```

Each of thses files must include the string `//- end component build`. The generator will add a link to the new component file above . place this line where a link to the new component files should be added. When the sub generator is executed the new component files will be linked respectively.

How to scaffold a component via command line. First navigate to the project folder and within this directory run:

```
$ yo yeogurt:component "REPLACE COMPONENT NAME"
```

Note: Component name should be entered like "c000 Component Name"

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
