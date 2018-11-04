<template>
  <div id="app">
    <header-com></header-com>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/common/header.vue'


export default {
  components:{
    "header-com":header,
  }
}
</script>

<style>
  #app{
    height: 100%;
    width: 100%;
    background:#e1e1e1;
      overflow: auto;
  }
  .page{
  padding-top:1rem;
}
</style>
