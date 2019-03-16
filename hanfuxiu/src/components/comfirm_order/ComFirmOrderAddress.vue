<template>
  <!--确认订单里面的地址组件-->
  <div class="col-md-3 section-body">
    <div class="address-item">
      <span>张晓牛</span>
      <span>13812790655</span>
      <span>安徽省 合肥市 蜀山区</span>
      <span>名都花园2栋122222号</span>
    </div>
  </div>
</template>

<script>
export default {
name: "ComFirmOrderAddress"
}
</script>

<style scoped>
  .section-body{
    margin-top: 20px;
    padding-left: 30px;
  }
  .address-item{
    width: 268px;
    height: 178px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    position: relative;
  }
  .address-item span{
    display: block;
    padding-left: 24px;
  }
  .address-item span:first-child{
    margin-top: 30px;
    font-size: 1.24em;
    margin-bottom: 22px;
  }
</style>
