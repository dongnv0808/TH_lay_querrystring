const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer((req, res) => {
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', data => {
        buffer += data;
    })
    req.on('end', () => {
        buffer += decoder.end();
        res.end('Hello Node JS');
        console.log(buffer);
    })
})
server.listen(8080, () => {
    console.log('Running port 8080');
})