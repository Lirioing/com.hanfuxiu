<template>
<!--这里是商品详情页,-->
  <div>
    <nav-search></nav-search>
    <goods-body></goods-body>
  </div>
</template>

<script>
  import GoodsBody from './GoodsBody'
export default {
name: "Goods",
  components:{
    'goods-body':GoodsBody
  }
}
</script>

<style scoped>

</style>
