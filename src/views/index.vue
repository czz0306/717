<template>
<div class="wrap">
    <keep-alive include="home">
        <router-view></router-view>
    </keep-alive>
    
    <footer class="footer">
        <ul>
            <router-link tag="li" to="/index/home">
                <i class="iconfont icon-shouye "></i>
                <span>首页</span>
            </router-link >
            <router-link tag="li" to="/index/class">
                <i class="iconfont icon-fenlei "></i>
                <span>分类</span>
            </router-link>
            <router-link tag="li" to="/index/car">
                <i class="iconfont icon-gouwuche "></i>
                <em>{{$store.state.cart_list.length}}</em>
                <span>购物车</span>
            </router-link>
            <router-link tag="li" to="/index/me">
                <i class="iconfont icon-wodejuhuasuan "></i>
                <span>我的</span>
            </router-link>
        </ul>
    </footer>
</div>
</template>

<script>
export default {
    name: 'footers'
};
</script>

<style lang="sass" scoped>
.wrap
    width: 100%
    height: 100%
.footer 
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 1rem
    background: #fff
    ul
        display: flex
        width: 100%
        li
            flex: 1
            text-align: center
            position: relative
            i
                display: block
                font-size: .4rem
            span
                font-size: .28rem
                display: block
            em
                position: absolute
                top: 0
                width: .3rem
                height: .3rem
                background: red
                border-radius: 50%
                color: #fff
                font-size: .2rem
                font-style: normal
.router-link-exact-active,
.router-link-active
    color: #fc4141


</style>
