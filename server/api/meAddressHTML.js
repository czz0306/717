const fs = require('fs');
module.exports = function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/meAddress.json', 'utf-8'));
    res.end(JSON.stringify(file));
};