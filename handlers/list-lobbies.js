let rooms = require('../lobbies/lobbies.json');

let listLobbies = async (req, res, next) => {
    res.contentType = 'json'
    res.send(rooms.lobbies)
    next();
};

module.exports = listLobbies;