<template>
  <div class="container">
    <header-page></header-page>
    <router-view />
  </div>
</template>

<script>
  import HeaderPage from './components/HeaderPage.vue'
  
  export default {
    name: 'App',
    components : {
      HeaderPage : HeaderPage
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>
