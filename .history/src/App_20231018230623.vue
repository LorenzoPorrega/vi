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
    <!-- All routes will end up here -->
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
</style>