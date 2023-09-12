let fs = require('fs');
fs.readFile('./index.md', (err, content) => {
  console.log(content);
});

fs.readFileSync('./index.md', (err, content) => {
  console.log(content);
});

let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
