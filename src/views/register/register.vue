<template>
    <div class="login">
        <header class="header">
            <span class="back"><i class="iconfont icon-xiangzuojiantou"></i></span>
            <h1>注册717</h1>
            <span class="more" @click="toLogin">登录</span>
        </header>
        <section class="scroll">
            <ul>
                <li>
                    <img src="../../assets/img/me/number.png" alt="">
                    <p><input type="text"  placeholder="请输入您的手机号" v-model.trim="username"></p>
                    </li>
                <li>
                    <img src="../../assets/img/me/password.png" alt="">
                    <p><input type="text"   placeholder="请输入您的密码" v-model.trim="password"></p>
                    
                    </li>
            </ul>
            <div class="loginBut">
                <p><button @click="registerBut">立即注册</button></p>
                <h6><span>忘记密码？</span></h6>
                
            </div>
        </section>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    name: 'register',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    components:{
        Toast
    },
    methods: {
        toLogin () {
            this.$router.push({name: 'login'})
        },
        registerBut () {
            this.$http.post('/index/register',{
                username: this.username,
                password: this.password
            }).then(res => {
                console.log(res);
                if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.username))) {
                    Toast({
                        message: '手机号格式不正确,请重新输入',
                        position: 'bottom',
                        duration: 5000
                    });
                    this.username = '';
                    this.password = '';
                } else{
                    if (res.data.code === 0) {
                        Toast({
                            message: res.data.msg,
                            position: 'bottom',
                            duration: 5000
                        });
                        this.username = '';
                        this.password = '';
                    } else if (res.data.code === 1) { // 注册成功
                        Toast({
                            message: res.data.msg,
                            position: 'bottom',
                            duration: 5000
                        });
                        // this.$router.push({name: 'login'});
                        
                    }
                }
                
            })
        }
    }
};
</script>

<style scoped>
.login{
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
}
.header h1{
    text-align: center;
    font-size: 0.36rem;
    height: .9rem;
    line-height: .9rem;
}
.header .back{
    position: absolute;
    left: 0rem;
    top: 0;
    text-align: center;
    width: 1.55rem;
    font-size: 0.22rem;
}
.header .more{
    position: absolute;
    right: 0rem;
    top: 0;
    text-align: center;
    width: 1.55rem;
    font-size: 0.26rem;
    color: #fc4141;
}
.scroll{
    background: #eee;
    flex: 1

}
.scroll ul{
    background: #fff;
    margin-top: .2rem;
}
ul li{
    height: 1.18rem;
    display: -webkit-flex;
    border-bottom: solid 1px #ccc;
}
ul li img{
    width: 0.45rem;
    height: 0.52rem;
    margin-top: .4rem;
    margin-left: 0.4rem;
}
ul li p{
    margin-left: .3rem;
    margin-right: .3rem;
    flex: 1;
    display: inline-block;
}
ul li p input{
    width: 100%;
    margin-top: 0.3rem;
    border: 0;
    height: .6rem;
    font-size: 0.3rem;
}
.loginBut{
    margin-top: 1.2rem;    
}
.loginBut p {    
    text-align: center;
    width: 100%;
}
.loginBut p button{
    height: 1.2rem;
    border-radius: .6rem;
    width: 80%;
    border: 0;
    background: #fc4141;
    font-size: 0.3rem;
    color: #fff;
}
h6{
    text-align: right;
    margin-right: .3rem;
}
</style>
