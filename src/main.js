import Vue from 'vue'
import App from './App.vue'



//引入路由
import router from '@/router'

//三级联动的组件 TypeNav
import typeNav from '@/components/typeNav'

import store from '@/store'

import Carousel from '@/components/Carousel'

import Pagination from '@/components/Pagination'

//全局注册 第一个参数：全局组件的名字 第二：那个组件
Vue.component(typeNav.name, typeNav)

Vue.component(Carousel.name, Carousel)

Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false

//引入mockServer.js  mock模拟数据
import '@/mock/mockServer'

//引入swiper样式
import 'swiper/css/swiper.css'

// import { reqGetSearchInfo } from '@/api'
// console.log(reqGetSearchInfo({}));

new Vue({
  render: h => h(App),
  //全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册仓库  组件实例上会多一个$store属性
  store
}).$mount('#app')
