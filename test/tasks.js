var util = require("./util");

exports['test tasks'] = function() {
  util.assertTasks("var gulp = require('gulp');gulp.task('clean', function(cb){})", {
    "completions":[{"name":"clean","targets":[]}]
  });
}

exports['test tasks with no Gulp file'] = function() {
  util.assertTasks("var gulp = require('gulp');gulp.task('clean', function(cb){})", {
    "completions":[]
  }, "test.js");
}

if (module == require.main) require("test").run(exports);