import search from '../views/search/search.vue';
import detail from '../views/detail/detail.vue';
import login from '../views/login/login.vue';
import register from '../views/register/register.vue';
import address from '../views/address/address.vue';
import add_address from '../views/address/add_address.vue';
import index from '../views/index.vue';
import home from '../views/home/home.vue';
import me from '../views/me/me.vue';
import car from '../views/car/car.vue';
import classs from '../views/class/class.vue';
let routes = [
    {
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/address',
        name: 'address',
        component: address
    },
    {
        path: '/add_address',
        name: 'add_address',
        component: add_address
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'me',
                name: 'me',
                component: me
            },
            {
                path: 'class',
                name: 'class',
                component: classs
            },
            {
                path: 'car',
                name: 'car',
                component: car
            }
        ]
    }
];
export default routes;