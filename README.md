# 717
## 项目背景
* “先溯源,再购买,保安全”是它最醒目的表示。原产地发货，安全食品，先行赔付，直采适合中国市场的商品从源头杜绝假货 保障商品品质的同时省去诸多中间环节直接从原产地发货。利用互联网技术让大家吃到放心安全的食品。
## 项目技术点
*  vue 搭建页面框架
*  vuex 存放各种数据
*  webpack-simple 简易脚手架开发
*  vue-router 路由切换
*  mint-ui基于vue.js的ui框架
*  axios 个基于 Promise 的,为浏览器和 Node.js 设计的 HTTP 客户端
## 技术负责
### 首页
* 最主要的就是商品列表，从线上直接请求接口，拿到数据，此时应把商品封装成组件，再渲染页面，一是避免触发其他的商品，二是可以在其他的页面调用。点击页面中的商品，进入商品详情页。同时利用.stop不干扰购物车行为。在点击添加购物车时，首先判断token，看用户是否登录，登录可正常添加，未登录则跳转至登录页面。
* 其次是触发搜索框，跳转到搜索页面。输入内容，点击搜索，词条存进缓存，渲染到页面。当没有缓存时，利用V-if判断，词条数组长度，等于0时，显示“最近无搜索记录..”的相关字样，v-else词条渲染页面。
### 分类
* 请求不到上线接口，自行模拟数据，用Vue做tab切换。同样利用接口完成，在页面点击时，拿到id值，在后台接收，只渲染这一组数据。点击页面中的商品，进入商品详情页。
### 购物车
* 当首页添加购物车，token值存在时，将数据存进VueX,便于对购物车数据的一系列操作。首先，数量的加减及单个商品的价钱，点击+，或-时获取goods的id值，goods的count++或--，利用VueX直接操作，同时商品价钱采用price*count的形式，可直接展现在页面；单选时点击单选按钮，利用字段checked的值得改变来改变按钮样式；多选时循环判断每一个商品的checked，若去全选中，则让全选按钮选中；总金额是把选中的每一项的价钱相加，在VueX中记录，渲染到页面
### 我的
* 登录注册：先注册，把页面中的账户和密码传到VueX当中，正则判断手机号，判断是否为空；登录时，匹配数据中的账户和密码，匹配成功则登录，不成功则出现提示信息
* 收货地址：先说新增地址，拿到页面中所有输入的数据，也是存到VueX当中，这里涉及到一个三级联动，运用原生框架，接口拿到数据并渲染。设置地址页面中，利用v-if来判断是否有数据来显示提示信息，有数据就渲染
## 遇到的问题
* 在search页面中，当v-if="this.searchHistoryList.length==0"语句中，this.searchHistoryList.length==0时会报错，页面出不来。到现在我也没有特别好的办法，先把if判断删掉，正常添加后，缓存中有值，再写进去。
* 商品添加购物车时出现问题，应该把商品封装成组件，这样添加时就不会触发其他的商品。单选也是如此。
<!-- # 717

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader). -->
