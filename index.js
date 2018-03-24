const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received');

    const response = {
        'greeting': 'Hello world'
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));

    console.log('Response sent');
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});

process.on('SIGINT', () => {
    server.close();
});
