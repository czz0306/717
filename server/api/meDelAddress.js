const fs = require('fs');
module.exports = function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/meAddress.json'), 'utf-8');
    file.forEach((v, i) => {
        if (req.body.tel == v.tel) {
            file.splice(i, 1);
        }
    });
    fs.writeFileSync('./data/meAddress.json', JSON.stringify(file));
    res.end(JSON.stringify('success'));
};