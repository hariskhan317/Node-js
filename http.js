const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('welcome to my Home Page');
    }
    if (req.url === '/about') {
        res.end('welcome to my about Page');
    }
    else {
        res.end(        `
        <p>404 Error page not found</p>
        <a href="/">
            back to homePage
        </a>
        `);
    }
})

const port = 5000;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});