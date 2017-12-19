import Vue from 'vue';
import App from './App.vue';
import './common/css/font-awesome.min.css';
import './assets/css/swiper.min.css';
import './assets/css/bootstrap.min.css';
import './common/css/common.css';
import './common/css/reset.css';
import '../node_modules/mint-ui/lib/style.css';
import './plugins/message/message.css';
import axios from './http/axios.js';
import router from './router/config.js';
import MintUI from 'mint-ui';
import message from './plugins/message/index.js';
import {store} from './store/store.js';
Vue.use(MintUI);
Vue.use(message);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
