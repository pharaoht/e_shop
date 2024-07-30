const http = require('http');

const app = require('./app');

const PORT = 8000;

const server = http.createServer();

server.listen(PORT, () => {
    console.log('Server Ready and...')
    console.log(`Listening on port ${PORT}...`)
});
