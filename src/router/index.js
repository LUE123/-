import Vue from 'vue'
import VueRouter from 'vue-router'

//使用
Vue.use(VueRouter)
//引入路由配置
import routes from './routes'

//备份原始的push
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写push | replace
//location 往哪里跳转,传那些参数
VueRouter.prototype.push = function (location,resolve,reject ) {
    if (resolve & reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve & reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

//配置路由(创建一个路由器)
export default new VueRouter({
    //配置
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置  y为垂直方向
        return { y: 0 } 
    }
})
