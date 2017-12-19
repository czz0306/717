<template>
<div class="addressItem">
    <dl>
        <dt><b>{{v.name}}</b> <span class="tel_number">{{v.tel}}</span></dt>
        <dd>
            <span>{{v.address}}{{v.detailed}}</span>
        </dd>
    </dl>
    <div class="handle">
        <p><span class="circle" :class="{'bg': show}" @click="toggle"></span>默认地址</p>
        <p>
            <span><i class="iconfont icon-yijianfankui"></i> 编辑</span>
            <span @click="delBtn"><i class="iconfont icon-lajixiang" ></i> 删除</span>
        </p>
    </div>   
</div>
</template>

<script>
export default {
    name: 'addressItem',
    props: {
        v: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            show: false,
        }
    },
    methods: {
        toggle () {
            this.show = !this.show;
        },
        delBtn () {
            this.$http.post('/index/del',{
                tel: this.v.tel
            }).then(res => {
                this.$store.commit('update_del_add_list',{
                    tel: this.tel
                });
                this.$message('删除成功');
            });
            
        }
    }
}
</script>

<style scoped>

 dl{
    padding-top: .2rem;
    font-size: 0.3rem;
    padding: 0 .3rem;
    background: #fff;
    height: 1.8rem;
}
 dl dt{
   
    padding-top: .2rem;
}
dl dd{
    
    margin-top: .3rem;
    font-size: 0.26rem;
}
.btn{
    position: fixed;
    bottom: 1rem;
    left: 50%;
    width: 3rem;
    height: 1rem;
    margin-left: -1.5rem;
    border: 0;
    background: #fc4141;
    color: #fff;
    border-radius: .5rem;
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
}
</style>
