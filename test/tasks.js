var util = require("./util");

exports['test Gulp completion'] = function() {
  util.assertTasks("var gulp = require('gulp');gulp.task('clean', function(cb){})", {
    "completions":[{"name":"clean","targets":[]}]
  });
}

if (module == require.main) require("test").run(exports);