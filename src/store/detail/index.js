import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api"
//封装的游客身份 
import {getUUID} from '@/utils/uuid_token'
//detail模块的小仓库
const state = {
    goodsInfo: {},
    //游客临时身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOOSINFO(state,goodsInfo) {
        state.goodsInfo = goodsInfo
    },
}
const actions = {
    //获取产品信息的actions
    async getGoodsInfo({commit},skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOOSINFO',result.data)
        }
    },
    //将产品添加到购物车中
    async AddOrUpdateShopCart({ commit }, { skuId, skuNum }) {      //最终返回promise
        //服务器请求成功 只返回code== 200 代表成功   所以不需要三连环
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        //传skuId 让服务器知道是谁（存储它的信息） 传skuNum 知道多少个
        if (result.code == 200) {
            return 'ok'   //非空 表示成功
        } else {
            return Promise.reject(new Error('faile'))  //失败
        }
    }
}
//getters  简化仓库中的数据
const getters = {
    //路径导航简化数据
    categoryView(state) {
        //|| {}       计算出来的至少是一个空对象  （就不会报假错误）
        return state.goodsInfo.categoryView || {}
    },
    //产品信息简化信息
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    //产品的售卖属性简化
    skuSaleAttrValueList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}