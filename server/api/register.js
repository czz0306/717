const fs = require('fs');
module.exports = function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/login.json', { encoding: 'utf-8' }));
    let obj;
    let flag = false;
    file.forEach((v, k) => {
        if (v.username === req.body.username) {
            flag = true;
            obj = {
                'code': 0,
                'msg': '手机号已注册'
            };
            return false;
        }
    });
    if (!flag) {
        obj = {
            'code': 1,
            'msg': '注册成功'
        };
        // console.log(req.body);
        file.push(req.body);
        fs.writeFileSync('./data/login.json', JSON.stringify(file));
    }
    res.end(JSON.stringify(obj));
};