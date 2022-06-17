<template>
  <div>
    <Header></Header>
    <!-- 路由组件 -->
    <router-view></router-view>

    <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search' "></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{Header,Footer},
  mounted() {
     //通知Vuex发请求，获取数据，储存与仓库  派发action
    this.$store.dispatch("getCategoryList");
  },
}
</script>

<style>

</style>
