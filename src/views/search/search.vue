<template>
<div class="search">
    <header class="header">
        <span class="back" @click="goBack">
            <i class="iconfont icon-xiangzuojiantou"></i>
        </span>
        <h1>
            <input type="text" placeholder="请输入您要购买的商品" class="form-control" v-model="searchInput">
            <i class="iconfont icon-sousuo"></i>
        </h1>
        <span class="more" @click="search">搜索</span>
    </header>
    <section class="scroll">
        <h1 class="title">最近搜索 <i class="iconfont icon-lajixiang "></i></h1>
        <p v-if="this.searchHistoryList.length==0">暂无搜索记录...</p>
        <div class="cont" v-else> 
            <span v-for="(v,i) in searchHistoryList" :key="i">{{v}}</span>
        </div>
        <h1 class="title">大家都在搜</h1>
        <div class="eg">
            <span v-for="(v,i) in list" :key="i">{{v}}</span>
        </div>
    </section>
</div>
</template>

<script>
import { Search } from 'mint-ui';
import _ from 'lodash';
export default {
    name: 'search',
    data () {
        return {
            searchInput: '',
            searchHistoryList:['蜂蜜'],
            list: ['蜂蜜','三黄鸡','红酒','蜂蜜','三黄鸡','红酒','红枣']
        }
    },
    components: {
        Search
    },
    created () {
        this.getHistory();
    },
    methods:{
        goBack () {
            this.$router.push({name: 'home'});
        },
        search () {
            if (this.searchInput == '') return ;
            let ls = localStorage;
            let shistroy = ls.getItem('searchHistory');
            
            if (!shistroy){
                ls.setItem('searchHistory', JSON.stringify([this.searchInput]));
            }else{
                let newHistory = JSON.parse(shistroy);               
                newHistory.unshift(this.searchInput);
                newHistory =  _.uniq(newHistory);
                ls.setItem('searchHistory', JSON.stringify(newHistory));
            }
            this.getHistory();
            // console.log(shistroy);
        },
        getHistory() {
            let ls = localStorage;
            this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'));
            console.log(JSON.parse(ls.getItem('searchHistory')));
        }
    }
};
</script>

<style scoped>
.search {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    font-size: 0.12rem;
}
input{
    outline: none;
}
.header {
    height: .9rem;
    position: relative;
    background: #fff;
    width: 100%;
    z-index: 9999;
}

.header>h1 {
    text-align: center;
    margin-left: 1rem;
    margin-right: 1.2rem;
    position: relative;
    margin-top: .15rem;
}

.header>h1 i {
    position: absolute;
    left: .2rem;
    top: .15rem;
    font-size: 0.36rem;
}

.header>h1 input {
    padding-left: .55rem;
    border-radius: .05rem;
    border: 0;
    height: .6rem;
    width: 100%;
    font-size: 0.3rem;
    background: #eee;
}

.back {
    position: absolute;
    left: .3rem;
    top: .15rem;
    font-size: 0.4rem;
}

.more {
    position: absolute;
    right: .3rem;
    top: .15rem;
    font-size: 0.32rem;
}

.scroll {
    background: #fff;
    flex: 1;
}

.title {
    padding-left: .3rem;
    padding-right: .3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.4rem;
    font-size: 0.32rem;
}

.icon-lajixiang {
    float: right;
}

.cont,
.eg {
    padding-left: .3rem;
    padding-right: .3rem;
    font-size: 0.34rem;
}

.cont,
.eg {
    display: flex;
    flex-wrap: wrap;
}

.cont span,
.eg span {
    display: inline-block;
    border-radius: .1rem;
    border: solid 1px #ccc;
    padding: .1rem .2rem;
    margin-right: .3rem;
    margin-bottom: .3rem;
}
p{
    height: 1rem;
    line-height: 1rem;
    padding-left: .3rem;
}
</style>
