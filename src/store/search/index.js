import {  reqGetSearchInfo } from "@/api"
//search模块的小仓库
const state = {
    searchList:{}
}
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList       //将result放入仓库
    }
}
const actions = {
    //获取search模的数据
    async getSearchList({ commit }, params = {}) {   //params组件传过来的参数
        //params至少是一个空对象
        let result = await reqGetSearchInfo(params)  //然后传给了服务器   result服务器返回来的对应数据result.data
        if (result.code == 200) {
            commit('GETSEARCHLIST',result.data)        
        }
    }
}
//getters  简化仓库中的数组
const getters = {
    //state.searchList.goodsList如果数据回来了 没问题他是一个数组
    //假如没网 返回的是undefined  
    //计算新的属性的属性值至少是一个数组     
    //空对象或者服务器的数据  不至于undefined报错
    goodsList(state) {
        return state.searchList.goodsList || []     //getters中处理 仓库中的searchList 通过map映射到组件上
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}