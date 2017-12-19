import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        username: '',
        cart_list: [],
        total: 0,
        checked_all: false,
        add_list:[]
    },
    mutations: {
        update_username(state, data) {
            state.username = data;
        },
        update_cart (state, data) {  // 添加购物车         
            let flag = true; // id相同
            state.cart_list = state.cart_list.map(v =>{
                if(v.id === data.id) {
                    ++v.count;
                    flag = false;
                }
                return v;
            });
            if (flag) {
                state.cart_list.unshift(data);
            }       
        },
        update_checked (state, data) { //判断单选选中
            state.cart_list.forEach((item, index) => {
                if (item.id === data.id) {
                    item.checked = data.checked;
                }
            })
        },
        update_checked_all(state) {   // 判断多选
            state.checked_all = !state.checked_all;        
            state.cart_list.forEach((item, index) => {
                item.checked = state.checked_all
            });
            
        },
        update_checked_alone(state) {// 每一个都选中后，全选
            let show = true;
            state.cart_list.forEach((item, index) => {
                if (!item.checked) {
                    show = false;
                }
            });

            state.checked_all = show;
        },
        update_total (state) { // 计算总价
            let sum = 0;
            state.cart_list.forEach((item, index) => {
                if (item.checked) {
                    sum += item.count * item.price
                }
            });
            state.total = sum;
        },
        update_count (state, data) { // 计算数量
            state.cart_list.forEach((item,index) => {
                if (item.id === data.id){
                    item.count = data.count;
                }
            })
            
        },
        update_add_list(state, data) {            
            state.add_list.unshift(data);
        },
        update_del_add_list (state, data) {
            state.add_list.splice(data, 1);
        }
    }
});
// store.subscribe(() => {
//     console.log(store.state.cart_list);
// });
export { store };