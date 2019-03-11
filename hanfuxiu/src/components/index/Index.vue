<template>
  <!--这里是首页的body显示的地方-->
  <div>
    <nav-search></nav-search>
    <nav-index></nav-index>
    <index-carousel></index-carousel>
    <index-goods></index-goods>
    <index-push></index-push>
  </div>

</template>

<script>
  //创建首页的那个小导航,第三个导航条
  import IndexNav from './IndexNav'
  import IndexCarousel from './IndexCarousel'
  import IndexGoods from './IndexGoods'
  import IndexPush from './IndexPush'

  export default {
    name: "Index",
    components: {
      'index-carousel': IndexCarousel,
      'index-goods': IndexGoods,
      'index-push': IndexPush,
      'nav-index':IndexNav,
    }
  }
</script>

<style scoped>

</style>
