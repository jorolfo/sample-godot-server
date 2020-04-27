const fs = require('fs');

const listLobbies = async (req, res, next) => {
    let roomsFile = fs.readFileSync('./lobbies/lobbies.json');
    let rooms = JSON.parse(roomsFile)
    console.log(`Available rooms:`, rooms)

    res.contentType = 'json'
    res.send(rooms)
    next();
};

module.exports = listLobbies;