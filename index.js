const restify = require('restify');
const registerLobby = require('./handlers/register-lobby');
const listLobbies = require('./handlers/list-lobbies');
const removeLobby = require('./handlers/remove-lobby');

const server = restify.createServer();
const PORT = process.env.PORT || 8080

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

// index status
server.get('/', (req, res, next) => {
    res.contentType = 'json';
    res.send({
        server_status: `live`,
        port: PORT
    });
    next();
})

// create server
server.post(`/register-lobby`, registerLobby);
server.get(`/list-lobbies`, listLobbies);
server.post(`/remove-lobby`, removeLobby);

server.listen(PORT, () => {
    console.log(`%s listening at %s`, server.name, server.url)
});
