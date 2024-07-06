const http = require('http')
const { URL } = require('url');

var server = http.ClientRequest(handleRequest);

function handleRequest(req,res){
    console.log(req.method, req.url)
    const myUrl = new URL(req.url)

    if (req.method ==="GET" && req.url ==='/' ){
        res.WriteHead(200, {'Content-type': 'text/plain'})
        res.write('Welcome to the homepage')
        res.end()
    }else if (req.method ==='' && req.url ==='/about'){
        res.WriteHead(200, {'Content-type': 'text/html'})
        res.write('<h2>this is all about NodeJS </h2>')
        res.end()
    }else if (req.method === 'POST' && req.url === '/about'){
        res.WriteHead(200,{'Content-type':'application/json'})
        res.write('{message: this is a post request}')
        res.end()
    }
}

server.listen(5000, ()=>{
    console.log('port is listening on 5000')
})