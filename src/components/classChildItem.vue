<template>
    <dl>
        <dt>
            <img v-lazy="'http://www.lb717.com' + data.cate_icon" alt="">
        </dt>
        <dd>{{data.cate_name}}</dd>
    </dl>
</template>

<script>
import { Lazyload } from 'mint-ui';
export default {
    name: "classChildItem",
    props:{
        data: {
            type:Object,
            required:true
        }
    },
    components: {
        Lazyload
    }
};
</script>

<style scoped>
dl{
    width: 100%;
    background: #f7f7f7;
    width: 1.6rem;
    height: 2.6rem;
    text-align: center;
    margin-right: .1rem;
}
 dl dt img{
    width: 100%;
    height: 100;
}
dl dd{
    font-size: 0.3rem;
    padding-top: .3rem;
}
</style>
