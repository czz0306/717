<template>
<div class="home">
    <header class="header">
        <div class="back">
            <i class="fa fa-home"></i>
            <span>服务站</span>
        </div>
        <h1>
            <input type="text" placeholder="请输入您要购买的商品" class="form-control" @focus="goSearch">
            <i class="iconfont icon-sousuo"></i>
        </h1>
        <div class="more">
            <i class="fa fa-home"></i>
            <span>我的店铺</span>
        </div>
    </header>
   <section class="scroll" @scroll="scollFn" id="scroll" ref="scroller">
        <div id="box-wrapper" ref="wrapper">      
            <div class="banner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(v, i) in banner" :key="i">
                        <img :src='v' alt="banner">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="icons mt10">
                <div class="icons-nav">
                    <dl v-for="(v, i) in icons" :key="i">
                        <dt><img :src="v.src" alt="icons"></dt>
                        <dd>{{v.cont}}</dd>
                    </dl>
                </div>
                <div class="icons-cont">
                    <span class="left">商城动态</span>
                    <div class="right">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <p>7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！</p>
                                </div>
                                <div class="swiper-slide">
                                    717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            <div class="title mt10 ">
                    <i class="iconfont icon-shijian mr5"></i>
                    天天特惠 <span>每天都有惊喜</span>
                    <cite class="right">更多 <i class="fa fa-angle-right"></i></cite>
            </div>
            <div class="good-food mt10">
                <div class="left "><img src="../../assets/img/home1.png" alt="home1"></div>
                <div class="right ">
                    <img src="../../assets/img/ruwei.png" alt="">
                    <img src="../../assets/img/gaodian.png" alt="">
                </div>
            </div>
            <div class="list-wrapper">
                <h1 class="list-title">  
                ———— 家乡味道 ————
                    <span class="more">更多 <i class="fa fa-angle-right"></i></span>
                </h1>
                <div class="list-cont">
                    <gooods v-for="(v, i) in list" :key="i" :v="v"></gooods>
                </div>
                <div class="goods-bottom">我是有底线的...</div>
            </div>  
        </div>
</section>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from '../../assets/js/swiper.min.js';
import gooods from '../../components/goods.vue';

setTimeout(() => {
            new Swiper('.swiper-container',{
                direction: 'vertical',
                autoplay: 2000,
                loop: true
            })
        }, 1000);
export default {
    name: 'home',
    components: {
        Swipe,
        SwipeItem,
        gooods
    },
    data () {
        return {
            banner: [
                    'src/assets/img/banner1.png',
                    'src/assets/img/banner2.png',
                    'src/assets/img/banner3.png',
                    'src/assets/img/banner4.png',
                    'src/assets/img/banner5.png'
                ],
            icons: [
                {
                    src: 'src/assets/img/nav/nav1.png',
                    cont: '牛奶乳品'
                },
                {
                    src: 'src/assets/img/nav/nav2.png',
                    cont: '家乡味道'
                },
                {
                    src: 'src/assets/img/nav/nav3.png',
                    cont: '休闲零食'
                },
                {
                    src: 'src/assets/img/nav/nav4.png',
                    cont: '米面粮油'
                },

                {
                    src: 'src/assets/img/nav/nav5.png',
                    cont: '调味调料'
                },
                {
                    src: 'src/assets/img/nav/nav6.png',
                    cont: '酒水饮品'
                },

                {
                    src: 'src/assets/img/nav/nav7.png',
                    cont: '生鲜果蔬'
                },
                {
                    src: 'src/assets/img/nav/nav8.png',
                    cont: '进口食品'
                }
            ],
            channel_id: 2,
            list: []
        }
    },
    methods: {
        queryGoodsList () {
            this.$http.post('/mall/index/getGoodsChannel',{
                channel_id: this.channel_id
            }).then(res => {
                let data = JSON.parse(JSON.stringify(res.data));
                this.list = this.list.concat(data.data.data);
            })
        },
        scollFn () {
            let scrollTop = this.$refs.scroller.scrollTop;// 滚动高度
            let scrollBoxH = this.$refs.scroller.offsetHeight; // scroll的高度
            let wrapH = this.$refs.wrapper.clientHeight; //内容高度
            if (wrapH - scrollBoxH -scrollTop <= 50) {
                this.channel_id++;  
                this.queryGoodsList();
            }
        },
        goSearch () {
            this.$router.push({name: 'search'});
        }
    }
};


</script>

<style scoped >
.home{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}
.header{
    height: .9rem;
    position: relative;
    background: #fff;
    position: fixed;
    width: 100%;
    z-index: 9999;
}
.header h1{
    text-align: center;
    margin-left: 1.55rem;
    margin-right: 1.55rem;
    position: relative;
    margin-top: .15rem;
}
.header h1 i{
    position: absolute;
    left: .2rem;
    top: .1rem;
    font-size: 0.36rem;
    
}
.header h1 input{
    padding-left: .55rem;
    border: 0;
    border-radius: .05rem;
    height: .6rem;
    width: 100%;
    font-size: 0.22rem;
    background: #eee;
}
.header .back{
    position: absolute;
    left: 0rem;
    top: 0;
    text-align: center;
    width: 1.55rem;
    font-size: 0.22rem;
    color:  #fc4141;
}
.header .back i,.header .more i{
    display: block;
    font-size: 0.4rem;
    margin-top: .1rem;
    color:  #fc4141;
}
.header .more{
    position: absolute;
    right: 0rem;
    top: 0;
    text-align: center;
    width: 1.55rem;
    font-size: 0.22rem;
    color:  #fc4141;
}
.scroll{
    background: #eee;
    margin-top: .9rem;
    margin-bottom: 1rem;
    overflow-y: scroll;
}
.banner{
    height: 3.5rem;
}
.banner img{
    width: 100%;
    height: 100%;
}
.icons{
    width: 100%;
    background: #fff;
}
.icons-nav{
    width: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
}

.icons-nav dl{
    width: 25%;
    text-align: center;
    margin-top: .15rem;
    margin-bottom: .15rem;
}
.icons-nav dl dt img{
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    margin-bottom: .15rem;
}
.icons-nav dl dd {
    font-size: 0.28rem;
}
.icons-cont {
    height: 1rem;
    padding-left: .3rem;
    padding-right: 0.3rem;
    display: flex;
}
.icons-cont .left{
    width: 0.75rem;
    height: .6rem;;
    line-height: .3rem;
    font-size: 0.3rem;
    color: #ff7924;
    margin-top: .1rem;
   
}
.icons-cont .right{
    flex: 1;
    padding: .1rem;
    border: solid 1px #ccc;
    border-radius: 5px;
    height: .8rem;
    
}
.icons-cont .right .swiper-container{
    width: 100%;
    height: .6rem;
}
.icons-cont .right .swiper-wrapper{
    width: 100%;
    height: 100%;
}
.icons-cont .right .swiper-slide{
    width: 100%;
    height: 100%;
    line-height: .3rem;
    font-size: 0.22rem;
}
.title {
    height: .8rem;
    line-height: .8rem;
    background: #fff;
    position: relative;
    font-size: .28rem;
    padding-left: .3rem;
    color: #ff7924;
}
.title .right{
    position: absolute;
    right: .3rem;
    top: 0rem;
    font-style: normal;
    font-size: .22rem;
    color: #333;
}
.title span {
    font-size: .2rem;
    padding-left: .1rem;
}
.good-food{
    height: 4rem;
    display: -webkit-flex;
}
.good-food .left{
    flex: 1;
    height: 100%;
}
.good-food .left img{
    width: 100%;
    height: 100%;
}
.good-food .right{
    flex: 1;
    height: 100%;
}
.good-food .right img{
    width: 100%;
    height: 50%;
}


.list-wrapper .list-title{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    position: relative;
    font-size: 0.3rem;
    color: #fc4141;
    background: #fff;
     margin-top: .15rem;
}
.list-wrapper .list-title .more{
    position: absolute;
    right: 0.3rem;
    top: 0;
    font-size: 0.2rem;
    color: #333;
}
.list-wrapper .list-cont{
    display: -webkit-flex;
    flex-wrap: wrap;
}
.goods-bottom{
    height: .8rem;
    line-height: .8rem;
    text-align: center;
}
</style>
