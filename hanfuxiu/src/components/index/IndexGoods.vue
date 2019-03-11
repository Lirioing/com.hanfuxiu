<template>
  <!--这里是甄选好货-->
  <div class="row interval-row" id="section-goods-recommend">         <!--interval间隔-->
    <p class="col-xs-12 col-sm-12 col-md-12 goods-recommend-p">臻选好货</p>
    <div class="col-xs-12 col-sm-6 col-md-3 goods-recommend " v-for="good in goods">                  <!--recommend推荐-->
      <div class="goods-recommend-div" id="">
        <a href="" class="myhref" target="_blank"><img src="" alt="" class="IMG"></a>
        <p class="goods-price"><i>￥</i><span></span></p>
        <p class="goods-title">
          <a href="" target="_blank" class="href-a"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexGoods",
    data:function () {
      return{
        goods:[]
      }
    },
    mounted() {
      this.$ajax
      .post(
        '/goods/shop/',
        {'shop_id':'1'},
        response =>{
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data.json);
          } else {
            console.log(response.message);
          }
        })
    }

  }
</script>

<style scoped>

</style>
