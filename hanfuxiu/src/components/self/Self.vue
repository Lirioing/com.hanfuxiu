<template>
<!--这里是个人中心页面-->
  <div>
    <nav-search></nav-search>
    <self-body></self-body>
  </div>
</template>

<script>
  import SelfBody from './SelfBody'
export default {
name: "Self",
  components:{
    'self-body':SelfBody
  }
}
</script>

<style scoped>

</style>
