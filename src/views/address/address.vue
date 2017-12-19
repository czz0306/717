<template>
    <div class="address">
        <header class="header">
            <span class="back" @click="toMe"><i class="iconfont icon-xiangzuojiantou"></i></span>
            <h1>收货地址</h1>
            <span class="more"><i class="iconfont icon-xiaoxizhongxin"></i></span>
        </header>
        <section class="scroll">
            <div class="address_wrapper">
                <div class="address_info mb10" v-for="(v, i) in $store.state.add_list" >
                    <addressItem  :v="v"></addressItem>
                </div>                
            </div>
        </section>
        <footer>    
            <button class="btn" @click="toAdd_address">新增收货地址</button>
        </footer>        
    </div>
</template>

<script>
import addressItem from '../../components/addressItem.vue';
export default {
    name: 'address',
    components: {
        addressItem  
    },
    created(){
        this.$http.post('/index/addressHTML').then(res=>{
            this.$store.state.add_list = res.data;
        })
    },
    methods: {
        toMe () {
            this.$router.push({name: 'me'});
        },
        toAdd_address () {
            this.$router.push({name: 'add_address'});
        }
    }
};
</script>

<style scoped>
.address{
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
    line-height: .9rem;
    position: relative;
    background: #fff;
    width: 100%;
    border-bottom: solid 1px #ccc;
}
.header h1{
    text-align: center;
    font-size: 0.36rem;
    height: .9rem;
    line-height: .9rem;
}
.header .back{
    position: absolute;
    left: .3rem;
    top: 0;
    font-size: 0.22rem;
}
.header .more{
    position: absolute;
    right: .3rem;
    top: 0;
    text-align: center;
    font-size: 0.26rem;
}
.scroll{
    background: #eee;
    flex: 1;
    overflow-y: scroll;
}
.empty_address{
    padding-left: .3rem;
    padding-right: 0.3rem;
    display: -webkit-flex;
    position: relative;
    line-height: 1rem;
    height: 1rem;
    font-size: 0.3rem;
    background: #fff;
}
.empty_address i:last-child{    
    position: absolute;
    right: .3rem;
}
footer{
    background: #eee;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
}
.btn {
    border: 0;
    background: #fc4141;
    color: #fff;
    border-radius: .5rem;
    width: 4.6rem;
    height: 1rem;
    color: #fff;
    font-size: 0.36rem;
    border: 0;
}
/* 
.address_info dl{
    padding-top: .2rem;
    font-size: 0.3rem;
    padding: 0 .3rem;
    background: #fff;
    height: 1.8rem;
}
.address_info dl dt{
   
    padding-top: .2rem;
}
.address_info dl dd{
    
    margin-top: .3rem;
    font-size: 0.26rem;
}

.handle{
    display: -webkit-flex;
    justify-content: space-between;
    background: #fff;
    height: 1rem;
    line-height: 1rem;
    padding: 0 .3rem;
    border-top: solid 1px #ccc;
    position: relative;
    padding-left: 1rem;
}
.circle{
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
.bg{
    background: red;
} */
</style>
