<template>
    <div class="car">
        <header class="header">
            <h1>购物车</h1>
            <span class="more">编辑</span>
        </header>
        <section class="scroll" >
            <div class="empty" v-if="$store.state.cart_list.length==0">
                <h1><i class="iconfont icon-gouwuche"></i></h1>
                <h2>购物车为空</h2>
                <h3><button class="btn" @click="toHome">去逛逛</button></h3>
            </div>
            <cartItem class="cont" v-for="(v, i) in $store.state.cart_list" :key="v.id" :v="v"></cartItem>
            <div class="sum_price">
                <span class="circle" :class="{'bg': $store.state.checked_all}" @click="toggle"></span>全选               
                <p class="right">
                    <span>合计： {{$store.state.total.toFixed(2)}}</span>                     
                    <button >结算</button>
                </p>                
            </div>
            <h1 class="list-title">热门推荐</h1>
            <div class="list-cont">
                 <goods v-for="(v, i) in list" :key="i" :v="v"></goods>
            </div>
            <div class="goods-bottom">到底了嗷！...</div>
        </section>
    </div>
</template>

<script>
import cartItem from '../../components/cartItem.vue';
import goods from '../../components/goods.vue';
export default {
    name: 'var',
    data () {
        return {
            checked_all: false,
            recommend_List: '',
            channel_id: 2,
            list: []
        }
    },
    components:{
        cartItem,
        goods
    },
    created () {
        this.$http.post('/mall/index/getGoodsChannel',{
            channel_id: this.channel_id
        }).then(res => {
            let data = JSON.parse(JSON.stringify(res.data));
            this.list = this.list.concat(data.data.data);
        });
    },
    methods: {
        toHome () {
            this.$router.push({name: 'home'});
        },
        toggle () {
            this.$store.commit('update_checked_all', {
                checked_all: !this.checked_all
            });
            this.$store.commit('update_total');
        }
    }
};
</script>

<style scoped>
.car{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}
.header{
    line-height: 0.9rem;
    height: 0.9rem;
    background: #fafafb;
    border-bottom: solid 1px #e5e5e5;
    position: relative;
}
.header h1{
    line-height: 0.9rem;
    height: 0.9rem;
    font-size: 0.36rem;
    text-align: center;
}
.header .more{
    position: absolute;
    right: 0.3rem;
    top: 0rem;
    font-size: 0.3rem;
}
.scroll{
    flex: 1;
    overflow-y: scroll;
    background: #eee;
    margin-bottom: 1.9rem;
}
.empty{
   height: 6rem;
   text-align: center;
   background: #fff;
}
.empty h1{
    padding-top: 1.2rem;
}
.empty h1 i{
    font-size: 1rem;
}
.empty h2 {
    font-size: 0.28rem;
    padding-top: .2rem;
    padding-bottom: .4rem;
}

.empty h3 button.btn{
    width: 1.6rem;
    height: 0.7rem;
    font-size: 0.3rem;
    border: 0;
    border: solid 1px red;
    color: red;
    background: #fff;
}
.sum_price{
    height: 0.9rem;
    line-height: 0.9rem;
    background: #fff;
    position: fixed;
    bottom: 1rem;
    width: 100%;
    font-size: 0.32rem;
    border-bottom: solid 1px #ccc;
    padding-left: 1rem;
}
.sum_price .circle{
    position: absolute;
    top: .25rem ;
    left: .15rem;
    width: .4rem;
    height: 0.4rem;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    z-index: 999;
    margin-left: .2rem;
    margin-right: .1rem;
    border: solid 1px #ccc;
}

.sum_price .right {
   float: right;
}
.sum_price b{
    font-size: 0.3rem;
    line-height: .3rem;
}
.sum_price .right button {
    width: 2rem;
    background: red;
    border: 0;
    color: #fff;
} 

.bg{
    background: red;
}
.list-title{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    background: #fff;
    margin-top: .15rem;
}
 .list-cont{
    display: -webkit-flex;
    flex-wrap: wrap;
}
.goods-bottom{
    height: .8rem;
    line-height: .8rem;
    text-align: center;
}
</style>
