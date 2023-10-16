var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);
  res.end('welcome');
}

server.listen(4000, () => {
  console.log('server is listening at port 4000');
});
