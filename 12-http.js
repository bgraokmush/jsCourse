const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to homepage!')
    }
    if (req.url === '/about') {
        res.end('This is out about page!')
    }
    res.end('Back to homepage')
})

server.listen(5000)