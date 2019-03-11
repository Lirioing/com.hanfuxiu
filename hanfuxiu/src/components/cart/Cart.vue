<template>
  <!--购物车组件-->
  <div>
    <h1>购物车组件开始</h1>
    <nav-search></nav-search>
    <cart-body></cart-body>
    <goods-recommend></goods-recommend>
    <h1>购物车组件结束</h1>
  </div>
</template>

<script>
  import CartBody from './CartBody'
  import GoodsRecommend from '../goods_info/GoodsRecommend'
export default {
name: "Cart",
  components:{
    'cart-body':CartBody,
    'goods-recommend':GoodsRecommend
  }
}
</script>

<style scoped>

</style>
