//创建mockServer.js通过mockjs插件实现模拟数据
import Mock from 'mockjs'
//把JSON数据格式引入     json没有暴露直接引入
//webpack 默认对外暴露：图片 JSON数据格式 
import banner from './banner.json'
import floor from './floor.json'

//第一个参数：请求地址    第二个：请求数据
Mock.mock('/mock/banner', { code: 200, data: banner })  //模拟轮播图数据

Mock.mock('/mock/floor', { code: 200, data: floor })


