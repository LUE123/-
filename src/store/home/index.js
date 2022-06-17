import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"

//home模块的小仓库
const state = {
    //state中的数据初始值 （根据接口的返回值初始化）
    categoryList: [],
    //轮播图数据
    bannerList: [],
    
    //floor数据
    floorList:[]
}
const actions = {
    //通过api里面的接口函数调用 向服务器发送请求，获取服务器的数据
    async getCategoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('GETCATEGORYLIST', result.data)
        }
    },
    //获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },

    //获取floor数据
    async getFloorList({commit}) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        categoryList.pop()
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}