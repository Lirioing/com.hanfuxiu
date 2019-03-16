<template>
  <!--这里是首页的显示的地方-->
  <div>
    <!--带搜索框的那个导航条-->
    <nav-search></nav-search>
    <!--带搜索的导航条的下边四个小的按钮-->
    <nav-index></nav-index>
    <!--/轮播-->
    <index-carousel></index-carousel>
    <!--甄选商品-->
    <index-goods></index-goods>
    <!--优选配件-->
    <index-push></index-push>
  </div>

</template>

<script>
  //导入带搜索框的那个组件,轮播组件,甄选商品组件,优选配件组件
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
