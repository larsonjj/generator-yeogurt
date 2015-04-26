var yeogurtConfig = {

  // Site information
  title: "<%= projectName %>",
  description: "A new Yeogurt site.",

  // Local server settings
  host: "127.0.0.1",
  port: "9010",

  // URL that site will be served from
  baseUrl: "/",

  // Directories
  // Relative to project root and used within Grunt tasks
  // NOTE: folders prefixed with an underscore (_) will have it removed when moved to build target
  // EX: src/_images -> build/images
  // NOTE: folders NOT prefixed with underscore (_) will be copied to build target
  // EX: src/fonts -> build/fonts
  directories: {

    // Source directory: author files location
    source: "src",

    // Destination directory: build target location
    destination: "build",

    // Temporary directory: temporary development files location
    temporary: ".tmp",

    modules: "_modules",
    layouts: "_layouts",
    images: "_images",
    styles: "<% if (cssOption !== 'css') { %>_<% } %>styles",
    scripts: "<% if (jsOption !== 'none') { %>_<% } %>scripts",
    docs: "_autodocs"
  },

  // Vendor/Third-Party scripts and styles
  // Concatenate and minify input files to a single output file
  vendor: {
    scripts: {
      global: {
        // Input script files relative to project root
        input: [
          "node_modules/jquery/dist/jquery.js"
        ],
        // Output script file relative to build target
        // "grunt serve" -> <temporary directory>/<scripts directory>/global.js
        // "grunt build" -> <destination directory>/<scripts directory>/global.js
        output: "global.js"
      }
    },
    styles: {
      global: {
        // Input style files relative to project root
        input: [
          "node_modules/normalize.css/normalize.css"
        ],
        // Output style file relative to build target
        // "grunt serve" -> <temporary directory>/<styles directory>/global.js
        // "grunt build" -> <destination directory>/<styles directory>/global.js
        output: "global.css"
      }
    }
  }
};

module.exports = yeogurtConfig;
