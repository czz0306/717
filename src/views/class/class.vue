<template>
<div class="fen">
    <header class="header">
        <h1>
            <input type="text" placeholder="请输入您要购买的商品" class="form-control">
            <i class="iconfont icon-sousuo"></i>
        </h1>
        <span class="more"><i class="iconfont icon-xiaoxizhongxin"></i></span>
    </header>
    <section class="scroll">
        <div class="left">
            <ul>
               <li v-for="(x, i) in navList" :key="i" @click="tab(i)" :class="{'navleftActive':num == i}">{{x}}</li>
            </ul>
        </div>
        <div class="right">
            <ol>
                <li v-for='(x, i) in rightList'  :key="i">
                    <classChildItem  :data="x"></classChildItem> 
                </li>
            </ol>                    
        </div>
    </section>
</div>
</template>

<script>
import { Search } from 'mint-ui';
import classChildItem from '../../components/classChildItem.vue';
export default {
    name: 'fen',
    data () {
        return {
            navList:['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味饮料','酒水饮料'],
            num:1,
            rightList:[]
        }
    },
    components: {
        Search,
        classChildItem
    },
    mounted () {
        this.tab(0);
    },
    methods: {
        tab(index) {
            this.num = index;        
            this.$http.post('/index/classChild',{
                id: index+1
            }).then(res => {
                this.rightList = res.data.data;
            })
        }
    }
};
</script>

<style scoped>
.fen{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}

.header {
    height: .9rem;
    position: relative;
    background: #fff;
    width: 100%;
    z-index: 9999;
    border-bottom: solid 1px #ccc;
}

.header>h1 {
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;
    margin-top: .15rem;
}

.header>h1 i {
    position: absolute;
    left: .15rem;
    top: .12rem;
    font-size: 0.36rem;
}

.header>h1 input {
    padding-left: .55rem;
    border-radius: .05rem;
    border: 0;
    height: .6rem;
    width: 100%;
    font-size: 0.22rem;
    background: #eee;
}


.more {
    position: absolute;
    right: .3rem;
    top: .15rem;
    font-size: 0.4rem;
}

.scroll {
    display: -webkit-flex;
    flex: 1
}
.left{
    width: 2.2rem;
    background: #eee;
}
.left ul li{
    height: .7rem;
    line-height: .7rem;
    text-align: center;
    font-size: 0.28rem;
}
.left ul li i{
    font-size: 0.3rem;
    margin-right: .1rem;
}
.right{
    flex: 1;
    height: 100%;
    margin-left: .1rem;
    
}
ol{
    display: -webkit-flex;
    flex-wrap: wrap;
}
ol li{
    width: 33.3%;
    margin-bottom: .1rem;
    
}
.navleftActive{
    background: #fff;
    border-left: solid 2px red;
    box-sizing: border-box;
    color: red;
}
</style>
