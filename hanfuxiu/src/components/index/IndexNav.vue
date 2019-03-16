<template>
  <!--这里是搜索下边的那个小的导航条,首页,汉衣库,我的关注,关于我们-->
  <div class="section-top-bgcolor">
    <div class="row section-top-row">
      <div class="section-top col-xs-12 col-sm-8 col-md-6 ">
        <div><router-link to="/" target="_blank">首页</router-link></div>
        <div><router-link to="/search"  target="_blank">汉衣库</router-link></div>
        <div><router-link to="/order" target="_blank">我的关注</router-link></div>
        <div><a target="_blank">关于我们</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavIndex"
  }
</script>

<style scoped>
  /*轮播前面一行*/
  .section-top-bgcolor{
    background-color: #fff !important;

  }
  .section-top-row{
    background-color: #fff !important;
    padding: 0!important;
  }
  .section-top{
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .carousel-row,.section-top-row,.good-recommend{
    max-width: 1220px;
    margin: 0 auto;
  }
</style>
