var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log('this is handle request');
}

server.listen(4000, () => {
  console.log('server is listening at port 4000');
});
