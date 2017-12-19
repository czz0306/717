<template>
    <div class="addAddress">
       
        <header class="header">
            <router-link to="/address"><i class="iconfont icon-xiangzuojiantou"></i></router-link>
            <router-link to="/login">收货人</router-link>
            <router-link to="index/home"><i class="iconfont icon-shouye"></i></router-link>
        </header>
        <section class="section">
            <div class="form">
                <input type="text" placeholder="收货人姓名" class="name" v-model="name">
                <input type="text" placeholder="手机号" class="tele" v-model="tel">
                <select class="province" v-model="prov" placeholder="请选择省" @change="changeProv(prov)">
                    <option v-for="(val, index) in data" :key="index" :label="val.name" :value="val.name"></option>
                </select>
                <select class="city" v-model="city" placeholder="请选择市" @change="changeCity(city)">
                    <option v-for="(val, index) in cityList" :key="index" :label="val.name" :value="val.name"></option>
                </select>
                <select name="" id="" class="area" v-model="area" placeholder="请选择区">
                    <option v-for="(val, index) in areaList" :key="index" :label="val" :value="val"></option>
                </select>
                <input type="text" placeholder="详细地址" class="addr" v-model="detailed">
                <p class="moren"><span class="circle" :class="{'bg': show}" @click="toggle"></span> <span>设为默认地址</span> </p>
                <button class="save" @click="save">保存</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "addAddress",
    data() {
        return {
            show: false,
            name: '',
            tel: '',
            detailed: '',
            data: '',
            prov: '',
            city: '',
            cityList: [],
            area: '',            
            areaList: [],
        };
    },
    created(){
        this.$http.post('/index/address').then(res => {
            this.data = res.data;
            // console.log(this.data);
        })
    },
    methods: {
        toggle () {
            this.show = !this.show;
        },
        save () {            
            this.$http.post('/index/meAddress',{
                name: this.name,
                tel: this.tel,
                detailed: this.detailed,
                address: this.prov + this.city + this.area
            }).then(res => {
                if(res.data == 'empty'){ 
                    this.$message("信息不能为空");                   
                }
                if(res.data == 'empty'){
                     this.$message("不是完整的11位手机号或者正确的手机号前七位");                    
                }
                 if (res.data=='success'){
                     this.$store.commit('update_add_list', {
                        name: this.name,
                        tel: this.tel,
                        detailed: this.detailed,
                        address: this.prov + this.city + this.area
                     });
                        this.$message('添加成功');
                        this.name = '',
                        this.detailed = '',
                        this.tel = '',
                        this.value = '',
                        this.prov = '',
                        this.city = '',
                        this.area = ''
                    }                
            })
        },
        changeProv (val) {
            this.data.forEach((v, i) => {
                if(v.name == val){
                    this.cityList = v.city;
                }
            });            
        },
        changeCity (val) {
            this.cityList.forEach((v, i) => {
                if(v.name == val){
                    this.areaList = v.area;
                }
            });         
        }
    }
};
</script>

<style scoped >
.addAddress {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
}

.header a {
  font-size: 0.38rem;
}
.section {
  background: #eee;
  flex: 1;
}
.save {
  width: 4.6rem;
  height: 1rem;
  margin-top: 0.5rem;
  margin-left: 1.4rem;
  background: #fc4141;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 0.36rem;
  border: 0;
}

.form {
  padding: 0 0.15rem;
  box-sizing: border-box;
  margin-top: 0.12rem;
}
.name,
.tele,
.addr,
.area {
  width: 100%;
  height: 1rem;
  margin-bottom: 0.1rem;
  border: 0;
  padding-left: 0.14rem;
  box-sizing: border-box;
  outline: 0;
}
.province,
.city {
  width: 48%;
  height: 1rem;
  margin-bottom: 0.12rem;
}

.moren {
  position: relative;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  padding-left: 1rem;
}

.circle {
  position: absolute;
  top: 0.3rem;
  left: 0.15rem;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  z-index: 999;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
  border: solid 1px #ccc;
}

.bg {
  background: red;
}






</style>
