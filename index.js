const restify = require('restify');

const server = restify.createServer();

// index status
server.get('/', (req, res, next) => {
    res.contentType = 'json';
    res.send({
        server_status: `live`
    });
    next();
})

// create server
server.post(`/register-lobby`, async (req, res, next) => {
    console.log(`Request: `, req)
    next();
});

server.listen(8080, () => {
    console.log(`%s listening at %s`, server.name, server.url)
});
