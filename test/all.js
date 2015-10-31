exports['test Gulp Tern completion'] = require('./completion');
exports['test Gulp tasks'] = require('./tasks');
exports['test Gulp task'] = require('./task');

if (require.main === module) require("test").run(exports);