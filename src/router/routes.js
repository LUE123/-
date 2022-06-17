//路由配置信息

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default[
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/search/:keyword?',
        // path: '/search',
        component: Search,
        meta: { show: true },
        name: 'search'
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
    },
    {
        name:'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    //重定向，项目跑起来时，访问 / ，立马定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]