<template>
<!--购物车下边的推荐商品的组件-->
  <div>
  <div class="row">
  <div class="col-xs-12 col-sm12 col-md-12">
    <div class="recommend">
      <div class="border">店长推荐</div>
    </div>
  </div>
</div>
  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="com_a">
        <a href="#"><div class="shop_image"><img :src=goods.recommend_img1></div></a>
        <div class="shop_price">￥55.00</div>
        <div class="shop_text"><a>采梦集原创轻婚纱日常绣花对襟汉...</a></div>
        <div class="shop_user"><a>采梦集</a></div>
      </div>
    </div><div class="col-xs-12 col-sm-6 col-md-3">
    <div class="com_a">
      <a href="#"><div class="shop_image"><img :src=goods.recommend_img2></div></a>
      <div class="shop_price">￥55.00</div>
      <div class="shop_text"><a>采梦集原创轻婚纱日常绣花对襟汉...</a></div>
      <div class="shop_user"><a>采梦集</a></div>
    </div>
  </div><div class="col-xs-12 col-sm-6 col-md-3">
    <div class="com_a">
      <a href="#"><div class="shop_image"><img :src=goods.recommend_img3></div></a>
      <div class="shop_price">￥55.00</div>
      <div class="shop_text"><a>采梦集原创轻婚纱日常绣花对襟汉...</a></div>
      <div class="shop_user"><a>采梦集</a></div>
    </div>
  </div>
    <div class="col-xs-12 col-sm-6 col-md-3">
      <div class="com_a">
        <a href="#"><div class="shop_image"><img :src=goods.recommend_img4></div></a>
        <div class="shop_price">￥55.00</div>
        <div class="shop_text"><a>采梦集原创轻婚纱日常绣花对襟汉...</a></div>
        <div class="shop_user"><a>采梦集</a></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "GoodsRecommend",
  props:['goods']
}
</script>

<style scoped>
  .recommend{
    width: 100%;
    height: 35px;
    margin-top: 40px;
    background: #c9c9c9;
    border-bottom: 2px solid #E4393C;
  }
  .recommend .border{
    width: 100px;
    height: 35px;
    background:#E4393C ;
    text-align: center;
    line-height: 35px;
    color: white;
  }
  .com_a{
    width: 100%;
    margin-top: 30px;
  }
  .com_a .shop_image{
    width: 100%;
    height: 260px;
    /*text-align: center;*/
  }
  .com_a .shop_image img{
    width: 100%;
    max-width: 280px;
    height: 260px;
    background-size: cover;
  }
  .com_a .shop_price{
    color:#FD6B66;
    font-size: 1.8em;
    margin-left: 20px;
  }
  .com_a .shop_text{
    /*width: 100%;*/
    margin-top: 5px;
    margin-left: 20px;
  }
  .com_a .shop_user{
    margin-top: 5px;
    margin-left: 20px;
  }
  .com_a .shop_user a{
    color: rgba(128, 128, 128, 0.36);
  }
  .joincart{
    cursor: pointer;
  }
  .list_change{
    width: 45px;
    height: 35px;
    outline: 2px solid #FD6B66;
  }
</style>
