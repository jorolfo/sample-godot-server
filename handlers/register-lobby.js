const fs = require('fs');
let rooms = require('../lobbies/lobbies.json');

let registerLobby = async (req, res, next) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // write to lobbies
    rooms.lobbies.push({
        ip,
        ...req.body
    });

    fs.writeFileSync('./lobbies/lobbies.json', JSON.stringify(rooms))

    res.contentType = 'json'
    res.send({result: true})
    next();
};

module.exports = registerLobby;