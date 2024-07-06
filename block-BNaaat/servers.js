var http = require('http');
var fs = require('fs')

var servers = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req.method, req.url)
    if (req.method === 'GET' && req.url ==='/file'){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.createReadStream('./node.html').pipe(res)
    }
    if (req.method ==='GET' && req.url==='/stream'){
        res.writeHead(200, {'Content-type': 'text/plain'})
        fs.readFile('./about.html',(err,content)=>{
            if (err) console.log(err)
            res.write(content)
            res.end()
        })
    }
}

servers.listen(5555,()=>{
    console.log('The port is listening on the port 5555')
})