<template>
    <dl @click="toDetail">
        <dt><img v-lazy="'http://www.lb717.com/'+v.obj_data"/></dt>
        <dd>
            <h2>{{v.goods_name}}</h2>
            <h3>￥{{v.discount_price}}<img src='http://www.lb717.com/static/mobile/images/homeImg/homeland3.png' @click.stop="addCart"></img></h3>
        </dd>
    </dl>
</template>

<script>
import {getCookie} from '../util/util.js';
import { Lazyload } from 'mint-ui';
export default {
    name: 'goods',
    props: ['v'],
    components: {
        Lazyload  
    },
    methods:{
        toDetail () {
            this.$router.push({name: 'detail',query:{ v: this.v }});            
        },
        addCart () {
            let token = getCookie('token');
            if (!token) {
                this.$router.push({name: 'login'});
                return;
            }
            
            this.$http_token.post('/index/cart',{
                    id: this.v.goods_id,
                    name: this.v.goods_name,
                    price: this.v.discount_price,
                    src: 'http://www.lb717.com/'+this.v.obj_data,
                    checked: false,
                    count: 1
            }).then(res => {
                this.$message('添加购物车成功');  
                this.$store.commit('update_cart', {
                    id: this.v.goods_id,
                    name: this.v.goods_name,
                    price: this.v.discount_price,
                    src: 'http://www.lb717.com/'+this.v.obj_data,
                    checked: false,
                    count: 1
                });              
            });
            
        }
    }
};
</script>

<style scoped>


 dl{
    width: 50%;
    margin-top: .15rem;
    
}
 dl:nth-child(2n){
    padding-left: .075rem;
}
 dl:nth-child(2n+1){
    padding-right: .075rem;
}
dl dt{
    width: 100%;
    height: 3.6rem;
}
 dl dt img{
    width: 100%;
    height: 100%
}
 dl dd{
    width: 100%;   
    padding: .15rem;
    background: #fff;
}
dl dd h2{
    width: 100%;
    height: .8rem;
    line-height: .4rem;
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.26rem;
}
 dl dd h3{
    font-size: 0.24rem;
    color: #fc4141;
    height: .5rem;
    line-height: .5rem;
    margin-top: .1rem;
}
 dl dd h3 img{
     width: .5rem;
     height: 0.5rem;
    font-size: 0.5rem;
    float: right;
}
</style>
