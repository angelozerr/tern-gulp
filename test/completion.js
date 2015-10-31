var util = require("./util");

exports['test Gulp completion'] = function() {
  util.assertCompletion("var gulp = require('gulp');gulp.ta", {
      "start":{"line":0,"ch":32},
      "end":{"line":0,"ch":34},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[{"name":"task","type":"fn(name: string, deps?: [string], fn: fn())","origin":"gulp"}]
  });
}

if (module == require.main) require("test").run(exports);