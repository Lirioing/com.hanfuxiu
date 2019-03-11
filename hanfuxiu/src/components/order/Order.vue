<template>
<!--这里是我的订单页面-->
  <div>
    <nav-search></nav-search>
    <order-body></order-body>
  </div>
</template>

<script>
  import OrderBody from './OrderBody'
export default {
name: "Order",
  components:{
    'order-body':OrderBody,
  }
}
</script>

<style scoped>

</style>
