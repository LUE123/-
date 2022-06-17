//当前这个模块：API进行同一管理
import request from "./request"

//mock
import mockRequest from "./mockRequest"

//三级联动接口
///api/product/getBaseCategoryList  get请求 无参数
export const reqCategoryList = () => {
    //发请求
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

//获取banner数据（home首页轮播图）
export const reqGetBannerList = () => {
    return mockRequest({
        url: '/banner',
        method:'get'
    })
}

//获取floor数据
export const reqGetFloorList = () => {
    return mockRequest({
        url: '/floor',
        method:'get'
    })
}

//获取搜索模块数据   /api/list  post
//参数：
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//需要接受外部传递参数
//参数params至少是一个空对象
export const reqGetSearchInfo = (params) => {  //在actions中使用发请求
    return request({
        url: '/list',
        method: 'post',
        data:params
    })
}

//获取产品详情信息的接口  /api/item/{ skuId }  GET   skuId产品ID
export const reqGoodsInfo = (skuId) => {
    return request({
        url: `/item/${skuId}`,
        method: 'get',
    })
}

//将产品添加到购物车 和 更新个数
///api/cart/addToCart/{ skuId }/{ skuNum }  POST  
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {  
    return request({
        url: `/cart/addToCart/${ skuId }/${ skuNum }`,
        method:'post'
    })
}

//购物车列表 /api/cart/cartList   GET
export const reqCartList = () => {
    return request({
        url: '/cart/cartList',
        method:'get'
    })
}
