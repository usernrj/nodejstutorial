const http = require('http');

const serv = http.createServer((req, resp) => {
    if (req.url == '/') {
        resp.end('Hey you are on the main page');
    } 
    else if (req.url == '/about') {
        resp.end('Hey you are on the About page');
    } else {
        resp.end('<h1>Hey you are on the error page<h1>');
    }
    // resp.end();
});

serv.listen(2020);