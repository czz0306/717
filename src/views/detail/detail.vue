<template>
<div class="details">
    <header class="header">
        <div class="back" @click="toHome"><i class="iconfont icon-xiangzuojiantou"></i>返回</div>
        <h1>
            <span @click="goods">商品</span>
            <span @click="detail">详情</span>
        </h1>
        <div class="more"><i class="iconfont icon-xiaoxizhongxin"></i> </div>
    </header>
    <section class="scroll" ref="goods_detail" style="display:none">
        <div class="goods_detail"><img :src="'http://www.lb717.com/'+list.obj_data" alt=""></div>
    </section>
    <section class="scroll" ref="scroll">
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(v, i) in banner" :key="i">
                    <img :src="'http://www.lb717.com/'+list.obj_data" alt="banner">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="food-info">
            <h1>{{list.goods_name}}</h1>
            <h2>
                ￥<b>{{list.discount_price}}</b>
                <s>￥{{list.discount_price}}</s>
                <button class="search-btn">溯源查询</button>
            </h2>

        </div>
        <div class="shop-name">
            <img :src="list.store_logo" alt="">
            <h1>
                <p>{{list.store_name}}</p>
                <p>店主：NJY1407004</p>
            </h1>
            <button class="goin-shop">进入店铺</button>
        </div>
        <div class="swip">
            <h4 class="list-title">热门推荐</h4>
            <div class="deBox swiper-container swiper-container-horizontal swiper-container-free-mode">
                <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">

                    <li class="swiper-slide " onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=711&amp;from_uid='" style="margin-right: 10px;">
                        <dl><dt><img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/f754ba50dba6c3cb387d0376b936782048ed0d3c.jpg" alt=""></dt>
                            <dd>
                                <p>大瀛 300gQQ脆骨 大瀛特色脆骨 骨肉相连 脆中带酥 </p>
                                <p><i>￥</i><span>39.00</span></p>
                            </dd>
                        </dl>
                    </li>
                    <li class="swiper-slide " onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=4532&amp;from_uid='" style="margin-right: 10px;">
                        <dl><dt><img src="http://www.lb717.com//Uploads/images/home/storegoodsupload/release/1418/2017-03/huge/7864339904.jpg" alt=""></dt>
                            <dd>
                                <p>御龙源 锦州特产 锦州百合小菜素椒双条 新包装 308gx10袋 东北小咸菜 308gx10袋</p>
                                <p><i>￥</i><span>68.00</span></p>
                            </dd>
                        </dl>
                    </li>
                    <li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=3157&amp;from_uid='" style="margin-right: 10px;">
                        <dl><dt><img src="http://www.lb717.com//Uploads/images/old/data/20150427/goodsimage/huge/54a93fe1122711a3ab43a1d30c1b99c638cf9ccc.jpg" alt=""></dt>
                            <dd>
                                <p>战豪 玉泉至尊贡芽绿茶150g/盒</p>
                                <p><i>￥</i><span>322.00</span></p>
                            </dd>
                        </dl>
                    </li>
                    <li class="swiper-slide" onclick="window.location.href='/mobile/goods/index.html?&amp;from_id=&amp;goods_id=2674&amp;from_uid='" style="margin-right: 10px;">
                        <dl><dt><img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/0538cf4d02927e1aa6b27a1ddf02fb01449e7f6a.jpg" alt=""></dt>
                            <dd>
                                <p>嘉仁 仙味香辣酱（重辣）220g/瓶</p>
                                <p><i>￥</i><span>12.80</span></p>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <footer class="footer" ref="footer">
        <ul>
            <li><i class="iconfont icon-kefu"></i></li>
            <li>
                <i class="iconfont icon-gouwuche"></i>
                <em>{{$store.state.cart_list.length}}</em>
            </li>
            <li><button @click="addCart">加入购物车</button></li>
            <li><button>立即购买</button></li>
        </ul>
    </footer>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from '../../assets/js/swiper.min.js';


export default {
    name: 'detail',
    data () {
        return {
            list:'',
            banner: [1, 2, 3]
        }
    },
    components: {
        Swipe,
        SwipeItem
    },
    created () {        
        this.list = this.$route.query.v;
        console.log(this.list.store_logo); 
        setTimeout(() => {
            new Swiper('.swiper-container',{
                slidesPerView: 3,
                spaceBetween: 30
            }) 
        }, 2000);       
    },
    methods: {
        toHome () {
            this.$router.push({name: 'home'})
        },
        addCart () {
            this.$http_token.post('/mall/index/getGoodsChannel').then(res =>{
                console.log(res);
            });
            this.$message('加入购物车成功');
        },
        detail () {
            console.log(1111);
            this.$refs.scroll.style.display = 'none';
            this.$refs.goods_detail.style.display = 'block';
        },
        goods () {
            console.log(22);
            this.$refs.scroll.style.display = 'block';
            this.$refs.goods_detail.style.display = 'none';
        }
    }
};
</script>

<style scoped>
.details{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}
.header{
    height: 0.9rem;
    line-height: 0.9rem;
    position: relative;
}
.header h1{
    font-size: 0.4rem;
    line-height: 0.9rem;
    text-align: center;
}
.back{
    position: absolute;
    left: .3rem;
    top: 0;
    font-size: 0.3rem;
}
.more{
    position: absolute;
    right: .3rem;
    top: 0;
    font-size: 0.3rem;
}
.scroll{
    flex: 1;
    overflow-y: scroll;
    background: #eee;
}
.banner{
    height: 7rem;
}

.banner img{
    width: 100%;
    height: 100%;
}
.goods_detail{
    height: 7rem;
}
.goods_detail img{
    width: 100%;
    height: 100%;
}
.shop-name{
    height: 1.2rem;
    font-size: 0.2rem;
    position: relative;
    background: #fff;
    margin-top: .2rem;
}
.shop-name  img{
    position: absolute;
    left: .3rem;
    top: .3rem;
    width: .6rem;
    height: .6rem;
}
.shop-name button{
    position: absolute;
    right: .3rem;
    top: .3rem;
    width: 1.9rem;
    height: 0.7rem;
    border: solid 1px #333;
    border-radius: .2rem;
    color: #333;
    background: #fff;
}
.shop-name h1{
   padding-top: .2rem;
    font-size: 0.26rem;
    padding-left: 1rem;
}
.shop-name h1 p{
    line-height: 0.4rem;
}

.food-info{
    background: #fff;
    padding:  0 .3rem;
}
.food-info h1{
    height: 0.8rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}
.food-info h2{
    position: relative;
    height: 0.9rem;
    line-height: .9rem;
    font-size: 0.28rem;
    color: #fc4141;
}
.food-info h2 s{
    color: #a0a0a0;
    font-size: 0.16rem;
}
.food-info .search-btn{
    position: absolute;
    right: 0rem;
    top: 0;
    color: #fff;
    background: #4f99f2;
    width: 2rem;
    height: 0.8rem;
    line-height: .8rem;
    border: 0;
    border-radius: .1rem;
}
.footer{
    height: 1.3rem;
}
.footer ul{
    display: -webkit-flex;
}
.footer ul li{
    flex: 1;
    text-align: center;
    line-height: 1.2rem; 
    position: relative;   
}
.footer ul li i{
    font-size: 0.5rem;
    
}
.footer ul li button{
    width: 100%;
    height: 100%;
    border: 0;
    color: #fff;
    font-size: 0.3rem;
}
.footer ul li:nth-child(3){
    flex: 2;
}
.footer ul li:nth-child(3) button{
    background: #fe8282;
}
.footer ul li:nth-child(4){
    flex: 2;
}
.footer ul li:nth-child(4) button{
    background: #fc4141;
}
.footer ul li em {
    position: absolute;
    top: .2rem;
    right: .3rem;
    width: .3rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    background: red;
    border-radius: 50%;
    color: #fff;
    font-size: .2rem;
    font-style: normal;
}



.swip {
    width: 100%;
    margin-top: .1rem;
    overflow: hidden;
}

.swip h4 {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    background: #fff;
    margin-top: .15rem;
    margin-bottom: .15rem;
}
.deBox {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.deBox ul {
    width: 100%;
    margin-left: .3rem;
}
.deBox ul li {
    float: left;
    width: 2.07rem;
}
.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}
.deBox ul li dl dt {
    width: 2.03rem;
    height: 2.04rem;
}
.deBox ul li dl dt img {
    width: 100%;
    height: 100%;
}
.deBox ul li dl dd p:nth-child(1) {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .24rem;
    text-align: center;
}
.deBox ul li dl dd p:nth-child(2) {
    text-align: center;
}
.deBox ul li dl dd p i {
    font-size: .18rem;
    color: #fc4141;
}
.deBox ul li dl dd p span {
    font-size: .28rem;
    font-weight: bold;
    color: #fc4141;
}
</style>
