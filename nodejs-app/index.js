// const http = require('http');
import http from 'http';

const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
});

server.listen(3002);