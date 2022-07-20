<template>
  <div id="app">
    <Header-vue></Header-vue>
    <HomeVue></HomeVue>
    <!-- <MenuVue /> -->
    <AdminVue />
    <NewPizza />

  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import HomeVue from './components/HomeVue.vue'
// import MenuVue from './components/MenuVue.vue'
import AdminVue from './components/AdminVue.vue'




export default {
  name: 'App',
  components: {
    HeaderVue,
    HomeVue,
    // MenuVue,
    AdminVue,
    

  }
}
</script>

<style>
#app {
 
}
</style>
