"use strict";
//The application won’t start until I create my local modules,
//exporting an object that maps file types to their header values for use in my responses

module.exports = { //Export content type mapping object.
  html: {
    "Content-Type": "text/html"
  },
  text: {
    "Content-Type": "text/plain"
  },
  js: {
    "Content-Type": "text/js"
  },
  jpg: {
    "Content-Type": "image/jpg"
  },
  png: {
    "Content-Type": "image/png"
  },
  css: {
    "Content-Type": "text/css"
  }
};
