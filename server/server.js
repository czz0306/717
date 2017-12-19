var express = require('express');
var bodyparser = require('body-parser');
var queryApi = require('./queryApi');
var app = express();
var fs = require('fs');
var path = require('path');
app.use(bodyparser.json());

app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next();
});
// 首页商品展示
app.post('/mall/index/getGoodsChannel',function(req,res){
    res.status(200);
    queryApi('/mall/index/getGoodsChannel',req.body,"POST").then(data=>{
        res.end(data);
    });
});
// login接口
let login = require('./api/login.js');
app.post('/index/login', login);
// register注册
let register = require('./api/register.js');
app.post('/index/register', register);
// 添加购物车
 let addCart = require('./api/addCart.js');
app.post('/index/cart', addCart);
// 购物车展示
let cartList = require('./api/cartList.js');
app.post('/index/cartList', cartList);
// 分类内容展示
let classChild = require('./api/classChild.js');
app.post('/index/classChild', classChild);

// 地址
let address = require('./api/address.js');
app.post('/index/address',address);
// 地址添加
let meAddress = require('./api/meAddress.js');
app.post('/index/meAddress', meAddress);
// 地址渲染
let meAddressHTML = require('./api/meAddressHTML.js');
app.post('/index/addressHTML', meAddressHTML);
// 删除地址
let meDelAddress = require('./api/meDelAddress.js');
app.post('/index/del', meDelAddress);
// 编辑地址
// let meChangeAddress = require('./api/meChangeAddress.js');
// app.post('/index/change',function (req, res) {
//     let file = JSON.parse(fs.readFileSync('./data/meAddress.json'),'utf-8');
//     console.log(req.body);
// });
app.listen('3000',function(){
    console.log('server listen 3000');
});