<template>
  <!--这里是甄选好货-->
  <div class="row interval-row" id="section-goods-recommend">         <!--interval间隔-->
    <p class="col-xs-12 col-sm-12 col-md-12 goods-recommend-p">臻选好货</p>
    <div class="col-xs-12 col-sm-6 col-md-3 goods-recommend " v-for="good in goods">                  <!--recommend推荐-->
      <div class="goods-recommend-div" id="good.id">
        <a href="" class="myhref" target="_blank"><img :src="good.main_img" alt="" class="IMG"></a>
        <p class="goods-price"><i>￥</i><span>{{good.price}}</span></p>
        <p class="goods-title">
          <a href="" target="_blank" class="href-a">{{good.name}}</a>
        </p>
      </div>
      <!--<li>{{good.price}}</li>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "IndexGoods",
    data:function () {
      return{
          goods:[]
      }
    },
    mounted() {
      var that=this;
      axios.post(
        'http://39.105.36.78:8080/api/goods/shop/',
        {"shop_id":"1"}
      ).then(function (response) {
        for(var i in response.data){
          that.goods.push(response.data[i]);
          if (i==3){
            break
          }
        }
        // that.goods=that.goods.concat(response.data);
        // console.log(that.goods);
        }
      ).catch(function (error) {
          console.log(error)
        }
      )
    }

  }
</script>

<style scoped>
  /*热卖推荐*/
  .interval-row{
    max-width: 1180px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .goods-recommend-p{
    text-align: center;
    font-size: 28px;
    font-weight: lighter;
    color: #8b8b8b;
    margin-bottom: 30px;
  }
  .goods-recommend{
    text-align: center;
    padding: 0;
  }
  .goods-recommend-div{
    width: 250px;
    height: 358px;
    overflow: hidden;
    margin: auto;
    display: inline-block;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .goods-recommend .goods-price{
    color: #ff4466;
    font-size: 34px;
    font-weight: 100;
  }
  .goods-recommend .goods-price i{
    font-size: 14px;
    font-style: normal;
    line-height: 14px;
  }
  .goods-title a:hover{
    color:#ff4466;
  }
  .IMG{
    width: 250px;
    height: 250px;
  }
</style>
