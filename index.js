const restify = require('restify');

const server = restify.createServer();
const PORT = process.env.PORT || 80

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

server.listen(PORT, () => {
    console.log(`%s listening at %s`, server.name, server.url)
});
