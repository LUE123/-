<template>
  <div>
      <!-- 三级联动 TypeNav  (是全局组件 不需要在引入)  -->
    <typeNav></typeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floorList='floor'/>
    <Brand></Brand>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name:'',
  components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
  //派发actions  获取floor组件的数据
    mounted(){
     this.$store.dispatch('getFloorList')
  },
    computed:{
    ...mapState({
      floorList:(state) => state.home.floorList
    })
  }
}
</script>

<style>

</style>