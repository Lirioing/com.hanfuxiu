<template>
<!--这里是确认订单页面-->
  <div>
    <nav-search></nav-search>
    <comfirm-nav></comfirm-nav>
    <comfirm-order-body></comfirm-order-body>
  </div>
</template>

<script>
  import ComFirmOrderBody from './ComFirmOrderBody'
  import ComFirmNav from './ComFirmNav'
export default {
name: "ComFirmOrder",
  components:{
    'comfirm-order-body':ComFirmOrderBody,
    'comfirm-nav':ComFirmNav
  }
}
</script>

<style scoped>

</style>
