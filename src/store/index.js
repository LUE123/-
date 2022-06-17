import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'

export default new Vuex.Store({
    //实现vuex仓库模块式开发存储数据
    modules: {
        home, search, detail, shopcart
    }
})