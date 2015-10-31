var util = require("./util");

exports['test Gulp completion'] = function() {
  util.assertTask("var gulp = require('gulp');gulp.task('clean', function(cb){})", "clean", {
    "file":"gulpfile.js","start":37,"end":44
  });
}

if (module == require.main) require("test").run(exports);