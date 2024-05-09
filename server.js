const http = require('http');

const roundRobin = require('./roundRobin');

const PORT = 9999;

const serverConfig = require('./config.json').servers;

const servers = serverConfig.map(server => ({
    ...server
}));

const loadBalacingAlgorithm = 'roundRobin';

const server = http.createServer((req, res) => {
    if (loadBalacingAlgorithm === 'roundRobin') {
        roundRobin(servers, req, res);
    } else {
        res.writeHead(500);
        res.end('Load balacing algorithm required');
    }
});

server.listen(PORT, () => {
    console.log(`Load balacing running at port ${PORT}`);
});