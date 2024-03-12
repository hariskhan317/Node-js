const http = require('http');
const EventEmitter = require('events');

class MyHttpServer extends EventEmitter { }

const serverEmitter = new MyHttpServer();

const server = http.createServer((req, res) => {
    serverEmitter.emit('request received', req);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
})

serverEmitter.on(('request received'), (req) => {
    console.log(`this is the req ${req}`)
})


server.listen(5000);