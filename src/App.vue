<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
          msg: '1508'
        }
    }
}
</script>

<style >
@import './assets/fonts/iconfont.css';
@import './assets/css/swiper.min.css';
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
}
/* h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
} */
</style>