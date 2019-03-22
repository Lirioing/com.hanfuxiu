<template>
  <div class="row myclothes" id="clothes" >
    <div class="col-xs-6 col-sm-4 col-md-3 mycloth" :id="i.id" ref="my_id" v-for="i in goods">
      <router-link :to="{path:'/goods'+'?'+i.id}">
    <a href="#" class="thumbnail myimg">
    <img id="clothesimg" :src="i.main_img" alt="...">
    </a>
      </router-link>
    <span class="price">¥<strong class="myprice">{{i.price}}</strong></span>
    <p>
    <a href="#" class="title">{{i.name.slice(0,15)+"..."}}</a>
    </p>

    <p>
    <a href="#" >加入购物车</a>
    <a href="#" class="myfavorite" @click="collect">收藏</a>
    </p>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ShopGoods",
      data() {
        return {
          textTip:this.goods
        }
      },
      props:['goods'],
      methods:{
          collect:function () {
            var getInfo=window.location.href.slice(window.location.href.lastIndexOf("?")+1);
            var id=this.$refs.my_id.id
            console.log(id)
            var info={"user_id":22,"goods_id":'3',"shop_id":getInfo}
            console.log(info)
            axios.post(
              'http://39.105.36.78:8080/api/user/insertcollect/',
              info).then(function (response) {
                if(response){
                  console.log(response.data.status_text);
                  alert(response.data.status_text);
                }
                // that.goods=that.goods.concat();
              }
            ).catch(function (error) {
                console.log(error)
              }
            )
            return false
          }
      }
    }
</script>

<style scoped>
  .myclothes{
    padding: 18px 0 0 0;
    /*border: solid 1px #cccccc;*/
  }
  .mycloth{
    /*border: solid 1px #cccccc;*/
    padding-top:14px ;
    padding-bottom: 14px;
    text-align: left;
  }
  .mycloth span,p{
    padding-left: 20px;
    padding-right: 20px;
  }
  .mycloth p{
    color: #2C2C2C;
  }
  .myimg{
    border: 0;
  }

  .price{
    color: #ff5a86;
    font-size: 1.2em;
  }
  .myprice{
    font-size: 2em;
    font-weight: lighter;
  }
  .myshopcenter{
    padding-left: 20px;
  }
  .mystar{
    color: #2C2C2C;
  }
  .myfavorite{
    float: right;
  }
</style>
