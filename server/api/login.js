const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    let file = JSON.parse(fs.readFileSync('./data/login.json', { encoding: 'utf-8' }));
    let token, obj;
    let flag = false;
    file.forEach(function (item, index) {
        if (item.username === req.body.username) {
            flag = true;
            if (item.password === req.body.password) {
                token = jwt.sign(req.body, '1508', { expiresIn: 300 * 60 });
                obj = { 
                    'code': 1,
                    'token': token,
                    'msg': 'success'
                };
            } else {
                obj = {
                    'code': 2,
                    'msg': '密码错误'
                };
            };
        };
    });
    if (!flag) {
        obj = {
            'code': 3,
            'msg': '手机号不存在'
        };
    }
    res.end(JSON.stringify(obj));
};