var util = require("./util");

exports['test Grunt (Not in Function) completion'] = function() {
  util.assertCompletion("gulp.reg", {
      "start":{"line":0,"ch":6},
      "end":{"line":0,"ch":9},
      "isProperty":true,
      "isObjectKey":false,
      "completions":[]
  });
}

exports['test Grunt completion'] = function() {
	util.assertCompletion("module.exports = function(grunt) {grunt.reg", {
	    "start":{"line":0,"ch":40},
	    "end":{"line":0,"ch":43},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"registerMultiTask","type":"fn(taskName: string, description: string, taskFunction: fn())","origin":"grunt"},
	                   {"name":"registerTask","type":"fn(taskName: string, taskList: [string])","origin":"grunt"}]
	});
}

if (module == require.main) require("test").run(exports);