<template>
<!--这里是商店的页面-->
  <div>
    <!--<nav-search></nav-search>-->
    <shops-body></shops-body>
  </div>
</template>

<script>
  import ShopsBody from './ShopsBody'
export default {
name: "Shops",
  components:{
    'shops-body':ShopsBody
  },
  mounted:{

  }
}
</script>

<style scoped>

</style>
