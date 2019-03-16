<template>
  <div>
    <!--for循环,循环输出从购物车传来的要进行购买的商品,从商品详情页过来的只有一件商品-->
    <div class="goods" v-for="good in goods">
      <div class="td-2 col-md-1">
        <a href="">
          <!--绑定src,把图片的地址传过来-->
          <img :src="good.main_img" class="img-a" alt="">
        </a>
      </div>
      <div class="td-3 col-md-6">
        <p class="">
          <a href="" class="a-title">{{good.name}}</a>
        </p>
      </div>
      <div class="td-4 col-md-2">
        <p class="goods-size">
          型号: &nbsp;&nbsp;&nbsp;
          <span class="size" v-text="good.goods_size"></span>
        </p>
      </div>
      <div class="td-4 col-md-2">
        <p class="goods-size">
          数量: &nbsp;&nbsp;&nbsp;
          <span class="size">x{{good.quantity}}</span>
        </p>
      </div>
      <div class="td-5 col-md-1">{{good.price}}元</div>
    </div>
  </div>
</template>

<script>
  //导入axios
  import axios from 'axios'
  export default {
    name: "ComFirmOrderGoods",
    data: function () {
      return {
        goods: [
          {
            main_img: "",
            name: "",
            goods_size: "",
            quantity: "",
            price: '',
          }
        ]
      }
    },
    mounted: function () {
      var url = window.location.href;
      //确认订单页面有2条路过来,
      // 一条是从购物车里选中,点结算,跳转过来
      //另一条是从商品详情页,选择好数量型号后,点购买跳过来
      //本页面的解决思路是,购物车跳转过来的,在url上传来商品id,类似http://localhost:8080/#/comfirmorder?2,3
      //商品详情页跳转过来的,不需要再url上携带数据,把本页面需要的数据存到sessionStorage中去
      //所以本页面应用一个判断条件,来解决这两条路线,indexOf,找到返回找到的下标,找不到返回-1
      if (url.indexOf('?')!=-1) {
        //发送axios,从购物车表中取的对应goods_id的商品,渲染到页面上
        var getInfo1 = url.slice(url.indexOf('?') + 1).split(',');
        //在info中添加一个user_id字段
        var info = {"user_id": window.localStorage.getItem('user_id')}
        //循环把商品id放入到json中,商品id的下标作为商品id的key
        for (var i in getInfo1) {
          info[i] = getInfo1[i];
        }
        //发送axios字段
        axios.post(
          'http://39.105.36.78:8080/api/cart/checkout/', info)
          .then((response) => {
            if (response.data) {
              // console.log(response.data);
              this.goods = response.data;
            } else {
              alert(response.data.status_text);
            }
          })
          .catch(function (error) {
              console.log(error)
            }
          )
      }
      else {
        //从sessionStorage中获取商品信息
        this.goods=JSON.parse(window.sessionStorage.getItem("goods_info"))
      }
      //想父组件发射一条数据,把商品的信息传递给父组件
      this.$emit('childByValue', this.goods)
    },
  }
</script>

<style scoped>
  .goods {
    clear: both;
  }

  .td-2 a img {
    height: 60px;
    width: 60px;
  }

  .td-2, .td-3, .td-4, .td-5 {
    line-height: 60px;
  }

  .a-title {
    color: #2C2C2C;
  }
</style>
