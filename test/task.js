var util = require("./util");

exports['test task'] = function() {
  util.assertTask("var gulp = require('gulp');gulp.task('clean', function(cb){})", "clean", {
    "file":"gulpfile.js","start":37,"end":44
  });
}

exports['test tasks with no Gulp file'] = function() {
  util.assertTask("var gulp = require('gulp');gulp.task('clean', function(cb){})", "clean", {    
  }, "test.js");
}

if (module == require.main) require("test").run(exports);