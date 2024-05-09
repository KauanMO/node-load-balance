const http = require('http')

const servers = require('./config.json').servers;

const createServer = (host, port) => {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Server response from port: ${port}`);
    }).listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`);
    });
}

servers.forEach(server => {
    createServer(server.host, server.port);
});