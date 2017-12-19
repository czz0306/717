const fs = require('fs');
module.exports =  function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/cars.json', 'utf-8'));
    let flag = true;
    file = file.map(v => {
        if (v.id === req.body.id) {
            ++v.count;
            flag = false;
        }
        return v;
    });
    if (flag) {
        file.unshift(req.body);
    }
    fs.writeFileSync('./data/cars.json', JSON.stringify(file));
    res.end('success');
};