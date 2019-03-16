<template>
<!--这里确认订单页面的导航-->
  <div class="container-fluid mycontainer">
    <div class="row myrow">
      <div class="col-md-1"><img src="#" alt="">img</div>
      <div class="col-md-2"><span class="myspan">确认订单</span></div>
      <div class="col-md-offset-7 col-md-2">
        <!--可以跳转到我的订单页面-->
        <router-link to="/order">我的订单</router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "ComFirmNav"
}
</script>

<style scoped>
  /*确认订单*/
  .mycontainer{
    background: #fff;
    margin-bottom: 38px;
  }
  .myrow{
    max-width: 1190px;
    margin: auto;
  }
  .user{
    position: relative;
    text-align: right;
  }
  .myspan{
    font-size: 2.6em;
  }
</style>
