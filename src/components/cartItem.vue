<template>
    <div class="cont" >
        <span class="circle" :class="{'bg': v.checked}" @click="toggle"></span>        
        <dl>                 
            <dt><img :src="v.src" alt=""></dt>
            <dd>
                <h1>{{v.name}}</h1>
                <h2>X <span class="count">{{v.count}}</span></h2>
                <h3>￥ <span class="price">{{v.count*v.price}}.00</span></h3>
                <b class="">
                    <span class="cancel" @click="reduce">-</span>
                    <span class="num">{{v.count}}</span>
                    <span class="add" @click="add">+</span>
                </b>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:'cartItem',
    props: ['v'],
    data () {
        return {
            show: false
        }
    },
    methods: {
        add () { // 数量++
            this.$store.commit('update_count',{
                id: this.v.id,
                count: ++this.v.count
            });
            this.$store.commit('update_total');
        },
        reduce () { // 数量--
            this.$store.commit('update_count',{
                id: this.v.id,
                count: --this.v.count
            });
            // 计算总价
            this.$store.commit('update_total');
        },
        toggle () { // 单选
            this.$store.commit('update_checked',{
                id: this.v.id,
                checked: !this.v.checked
            });
            this.$store.commit('update_total');
            this.$store.commit('update_checked_alone', {
                id: this.v.id,
                checked: this.v.checked
            })
        }
    }
};
</script>

<style scoped>
.cont{
    position: relative;
}
.cont .circle{
    position: absolute;
    left: .2rem;
    top: 1rem;
    display: inline-block;
    width: .4rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 50%;
    color: #fff;
    z-index: 999;
    border: solid 1px #ccc;
}

.cont dl {
    width: 100%;
    height: 2.6rem;
    background: #fff;
    margin-bottom: .2rem;
    position: relative;    
    display: -webkit-flex;    
    padding-left: .8rem;
}
.cont dl dt{
    width: 2rem;
    height: 2rem;
    margin-top: .3rem;
}
.cont dl dt img{
    width: 2rem;
    height: 2rem;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    
}
.cont dl dd{
    float: left;
    font-size: 0.2rm;
    padding: .2rem;
}
.cont dl dd h1{
    font-size: 0.28rem;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    height: 0.8rem;
    line-height: .4rem;
}
.cont dl dd h2{
    font-size: 0.22rem;
    margin-top: 0.4rem;
}
.cont dl dd h3{
    font-size: 0.26rem;
    margin-top: 0.2rem;
}
.cont dl dd b{
    position: absolute;
    right: .3rem;
    bottom: .4rem;
    font-weight: normal;
}
.cont dl dd b span {
    float: left;
    display: inline-block;
    border: solid 1px #ccc;
    width: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.3rem;
}
.bg{
    background: red;
}
</style>
