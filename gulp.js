(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("gulp", function(server, options) {
    return {
      defs: defs
    };
  });

  var defs = {
    "!name": "gulp",
    "!define": {
      "!node": {
        gulp: {
          "!type": "+Gulp",
          "!url": "https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulp-api-docs"          
        },
        Gulp: {
          "!type": "fn()",
          prototype: {
            src: {
              "!type": "fn(src: string)"
            }
          }
        }
       }
     } 
  }
  
});