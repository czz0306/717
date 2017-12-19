const fs = require('fs');
let url = './data/meAddress.json';
module.exports = function (req, res) {
    var file = JSON.parse(fs.readFileSync(url, 'utf-8'));   
    
    if (req.body.name == '' || req.body.tel == '' || req.body.detailed == '' || req.body.address == '') {
        res.end(JSON.stringify('empty'));       
    };
    if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(req.body.tel))) {
        res.end(JSON.stringify('tel'));
    }
    else {
        file.push(req.body);
        fs.writeFileSync(url, JSON.stringify(file));
        res.end(JSON.stringify('success'));
    }
    
    
    
};
