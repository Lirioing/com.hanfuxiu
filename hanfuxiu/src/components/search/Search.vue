<template>
<!--这里是商品搜索页,关于商品搜索页的内容都放置在这里-->
  <div>
    <nav-search></nav-search>
    <search-body></search-body>
  </div>
</template>

<script>
  import SearchBody from './SearchBody'
export default {
name: "Search",
  components:{
    'search-body':SearchBody
  }
}
</script>

<style scoped>

</style>
