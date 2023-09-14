var os = require('os');
var { readFile, unlink } = require('fs');
console.log('Welcome to Nodejs');
console.log(`free memory: ${os.freemem()}`);
console.log(`Length of cups: ${os.cpus().length}`);
console.log(`uptime: ${os.uptime()}`);
console.log(`version: ${os.version}`);
