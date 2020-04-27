const fs = require('fs');

const removeLobby = async (req, res, next) => {
    let rooms = require('../lobbies/lobbies.json');
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // write to lobbies
    let lobbies = rooms.lobbies.filter((i) => {i.ip !== ip});

    rooms = {
        lobbies
    }


    await fs.writeFileSync('./lobbies/lobbies.json', JSON.stringify(rooms))

    res.contentType = 'json'
    res.send({result: true})
    next();
};

module.exports = removeLobby;