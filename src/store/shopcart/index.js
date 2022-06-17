import { reqCartList } from "@/api"
//shopcart模块的小仓库
const state = {
    cartList : []
}
const mutations = {
    GETCARTLIST(state,cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST',result.data)
            // console.log(result.data);
        }
    }
}
//getters  简化仓库中的数据
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    //购物车计算的数据
    // cartInfoList(state) {
    //     retrun state.
    // }
}

export default {
    state,
    mutations,
    actions,
    getters
}