const fs = require('fs');
module.exports = function (req, res) {
    let file = req.body;
    let fileJson = JSON.parse(fs.readFileSync('./data/classChild.json', { encoding: 'utf-8' }));
    res.end(JSON.stringify({ code: 1, data: fileJson[file.id] }))
};