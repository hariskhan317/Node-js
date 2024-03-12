const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("HomePage")
    }
    if (req.url === '/about') {
        // for blocking code
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About pag e')
    }
    else {
        res.end('error page')
    }
})

server.listen(5000)