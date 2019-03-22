<template>
  <div class=" shop" id="goods">
    <div class="row" id="content">
      <!--<div v-if="seen">-->
      <div class="col-xs-6 col-sm-4 col-md-3 length"  v-for="i in goods">
        <div class="shop_info" :id=i.id>
          <!--<a href="goods_info.html?+i.id" class="myhref" target="_blank">-->
          <router-link  :to="{path:'/goods'+'?'+i.id}" >
            <div class="shop_image"><img :src=i.main_img>
            </div>
          </router-link>
          <!--</a>-->
          <div class="shop_price">{{i.price}}</div>
          <div class="shop_text"><a>{{i.name.slice(0,15)+"..."}}</a></div>
          <div class="shop_user"><a>{{i.shop_name}}</a></div>
        </div>
      </div>
      <!--</div>-->
      <!--<div v-else>-->
      <!--<h1>哎呀,没找到!</h1>-->
      <!--</div>-->

    </div>
  </div>
</template>

<script>
  export default {
    name: "Search_goods",
    data(){
      return{
        textTip:this.goods
      }
    },
    props:['goods'],
    mounted:function () {
      console.log()
    }
  }

</script>

<style scoped>
  .shop_info {
    /*max-width: 280px;*/
    /*min-width: 248px;*/
    /*min-height: 360px;*/
    background: white;
  }

  .shop_info .shop_image {
    width: 100%;
    /*height: 260px;*/
    /*text-align: center;*/
  }

  .shop_info .shop_image img {
    width: 100%;
    /*max-width: 280px;*/
    /*height: 250px;*/
    background-size: cover;
  }

  .shop_info .shop_image img:hover {
    opacity: 0.8;
  }

  .shop_info .shop_price {
    color: #FD6B66;
    font-size: 1.8em;
    margin-left: 20px;
  }

  .shop_info .shop_text {
    /*width: 100%;*/
    margin-top: 5px;
    margin-left: 20px;
  }

  .shop_info .shop_user {
    margin-top: 5px;
    margin-left: 20px;
  }

  .shop_info .shop_user a {
    color: rgba(128, 128, 128, 0.36);
  }

  .length {
    margin-top: 30px;
  }
</style>
