const fs = require('fs');
module.exports = function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/address.json', 'utf-8'));
    res.end(JSON.stringify(file));
};