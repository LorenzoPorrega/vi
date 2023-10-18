<script>
import Header from "./components/Header.vue";
  export default{
    components:{
      Header,

    }
  }
</script>

<template>
  <Header></Header>
  <main>
    <!-- All routes will end up here, loading dinamically the comps without reloading the website page -->
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
</style>