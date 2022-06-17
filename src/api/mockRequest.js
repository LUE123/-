//对axios进行二次封装
import axios from "axios"

//引入进度条
import nprogress from 'nprogress'
//引入进度条的样式
import 'nprogress/nprogress.css'


//用axios对象的方法create 创建一个axios实例
//request就是axios  只是稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径  发请求的时候 路径中会出现api
    baseURL: '/mock',
    //请求超时的时间为5秒
    timeout: 5000,
});

//请求拦截器 发请求之前 请求拦截器可以检测到 在发请求之前做一些事情
requests.interceptors.request.use((config) => {
    //config  配置对象  里面同一个属性header
    //进度条开始动
    nprogress.start()
    return config
});

//响应拦截器 
requests.interceptors.response.use((res) => { 
    //成功的回调 服务器响应数据回来 响应拦截器检测到 可以做一些事情
    //进度条结束
    nprogress.done()
    return res.data
},
(error) => {
    //响应失败的回调
    return Promise.reject(new Error('faile'))
    });
 
//对外暴露
export default requests

