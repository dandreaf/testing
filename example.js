// USAGE ------
// ============

//var shell = require('./shellHelper');

// execute a single shell command
shell.exec('npm test --coverage', function(err){
    console.log('executed test');
});