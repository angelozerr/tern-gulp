exports['test Gulp Tern completion'] = require('./completion');
exports['test Gulp Tern tasks completion'] = require('./completion_tasks');

if (require.main === module) require("test").run(exports);