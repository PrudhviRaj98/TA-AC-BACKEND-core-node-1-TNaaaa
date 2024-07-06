var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.writeHead(201,{'Content-type': 'text/html'})
    res.write('<h1> Welcome Raj </h1>')
    console.log(req.method)
}

server.listen(4444,()=>{
    console.log("server is listening on port 4444")
})