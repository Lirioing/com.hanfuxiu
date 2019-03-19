<template>
  <!--这是商品详情页的主体内容放置的地方-->
  <div class="container" id="content">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="left1"><img :src=goods.main_img id="bigimg"></div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="right1">
          <div class="goods_title">{{goods.name}}</div>
          <div class="goods_price">
            <span class="price">¥{{goods.price}}</span>
          </div>
          <div class="row size">
            <div class="col-md-2">
              <div class="ml">尺码</div>
            </div>
            <div id="di">
              <div class="col-xs-2 col-sm-2 col-md-1">
                <button  :[cls]="button==1?'list':'' " :ref="button==1?'btn':'' " @click="button=1">S</button>
              </div>
              <div class="col-xs-2 col-sm-2 col-md-1 button">
                <button :[cls]="button==2?'list':'' " :ref="button==2?'btn':'' " @click="button=2">M</button>
              </div>
              <div class="col-xs-2 col-sm-2 col-md-1 button">
                <button :[cls]="button==3?'list':'' " :ref="button==3?'btn':'' " @click="button=3">L</button>
              </div>
              <div class="col-xs-2 col-sm-2 col-md-1 button">
                <button :[cls]="button==4?'list':'' ":ref="button==4?'btn':'' " @click="button=4" >XL</button>
              </div>

            </div>

          </div>
          <div class="row size">
            <div class="col-md-2">
              <div class="ml"><span>样式</span></div>
            </div>
            <div id="size1">
              <div class="col-xs-3 col-sm-2 col-md-1"><img class="img" :src=goods.style_img1 id="oneimg" :[cls]="seen==1?'active_img':'' " @click="seen=1,changeimg($event)"></div>
              <div class="col-xs-3 col-sm-2 col-md-1 length" ><img class="img " :src=goods.style_img2 :[cls]="seen==2?'active_img':''" @click="seen=2,changeimg($event)"></div>
              <div class="col-xs-3 col-sm-2 col-md-1 length" ><img class="img" :src=goods.style_img3 :[cls]="seen==3?'active_img':''" @click="seen=3,changeimg($event)"></div>
            </div>
          </div>
          <div class="row size">
            <div class="col-md-2">
              <div class="ml">数量</div>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-5">
              <input type="button" value="-" class="reduce" @click="reduce">
              <input type="text" value="1" class="input" ref="num">
              <input type="button" value="+" class="add" @click="add">
              <span>库存<i id="count">{{goods.count}}</i>件</span>
            </div>
          </div>
          <div class="row size">
            <div class="col-md-2"></div>
            <div class="col-xs-12 col-sm-10 col-md-10">
              <!--<a href="#" target="_blank" class="buygo" @click="buy">立即剁手</a>-->
              <button class="buygo" @click="buy">立即剁手</button>
              <div class="joincart" @click="joincart">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 40px">
      <div class="col-xs-12 col-sm-8 col-md-3">
        <div class="shop_info">
          <div class="shopname">
            {{goods.shopname}}
          </div>
          <div class="pro">
            <div class="pro_all"><p>75</p>
              商品
            </div>
            <span></span>
            <div class="pro_all"><p>10223</p>
              粉丝数
            </div>
          </div>
          <div class="collection" id="${res.id}">
            <!--<span class="c_l"><a href="#" id="myshophref" target="_blank"><img :src=image/index.png>  进入店铺</a></span>-->
            <!--<span class="c_l"><a class="myfavshop"><img :src=image/collect.png>  关注本店</a></span>-->
          </div>
          <div class="address">所在地：<i>安徽</i></div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-9">
        <ul class="nav nav-tabs" id="myul">
          <li role="presentation" class="active"><a>商品详情</a></li>
          <li role="presentation"><a>买家评论</a></li>
          <li role="presentation"><a>商家服务</a></li>
        </ul>
        <div class="goods_info">
        <div class="clothes">
        <div class="bigclothes"><img :src=goods.info_img1></div>
        <div class="bigclothes"><img :src=goods.info_img2></div>
        <div class="bigclothes"><img :src=goods.info_img3></div>
        <div class="bigclothes"><img :src=goods.info_img4></div>
        <div class="bigclothes"><img :src=goods.info_img5></div>
        <div class="bigclothes"><img :src=goods.info_img6></div>
        </div>
        <div class="hide1">本萌物还没得人发表评论</div>
        <div class="hide1">cccc</div>
        </div>
      </div>
    </div>
    <goods-recommend :goods="goods"></goods-recommend>
  </div>
</template>

<script>
  import axios from 'axios'
  import GoodsRecommend from './GoodsRecommend'
  export default {
    name: "GoodsBody",

    components:{
      'goodsRecommend':GoodsRecommend
    },
    data: function () {


      return {
        // btn_ref:ref=btn,

        // num:1,
        goods: [],
        // main_img:goods.main_img,
        cls:"class",
        seen:0,
        button:0,
      }
    },
    methods:{
      // addclass(index) {
      //   this.active=index;
      // },
      changeimg:function () {

        this.goods.main_img=event.target.src;
        console.log(event.target.src)
      },
      reduce:function () {
        if (event.target.nextElementSibling.value > 1) {
          event.target.nextElementSibling.value--;
        }
        else {

          event.target.nextElementSibling.disabled = false;
        }
      },
      add:function () {
        event.target.previousElementSibling.value++;
      },
      //立即购买方法
      buy:function () {
        var getInfo=window.location.href.slice(window.location.href.lastIndexOf("?")+1);


        window.sessionStorage.setItem("goods_info",JSON.stringify(
          [{
            id:getInfo,
            // main_img:goods.main_img ,
            name:this.goods.name,
            goods_size:this.$refs.btn.innerText,
            quantity: this.$refs.num.value,
            price: this.goods.price,
          }]


        ));
        this.$router.push({path: '/order'})
      },
      //加入购物车方法
      joincart:function () {
        // var quantity=document.querySelector('.input').value;
        var user_id=localStorage.getItem('user_id');
        quantity:this.$refs.num.value,
        alert(quantity);
        alert(user_id)
        // alert(goodsize)
        if(user_id){
          var goodsize=document.querySelector('.list').innerText;
          alert(goodsize)
          req={'user_id':user_id,'quantity':quantity,'goods_size':goodsize};
          postData(ipconfig+'/cart/add/',req,function (res) {
            alert(res.status_text);
          })
        }else {

          // url="goods_info.html"+"?"+getInfo;
          sessionStorage.setItem('from',url);
          location.href='{path:\'/login\'}'
        }
      }

    },
    mounted()
    {
      var that = this;

      var getInfo=window.location.href.slice(window.location.href.lastIndexOf("?")+1);
      // console.log(getInfo)
      // alert(getInfo)
      // alert(window.location.href)
      axios.post(
        'http://39.105.36.78:8080/api/goods/getgoods/',
        {"id": getInfo}
      ).then(function (response) {
          that.goods = response.data;
          console.log(that.goods)
        }
      ).catch(function (error) {
          console.log(error)
        }
      )
    }
  }
</script>

<style scoped>
  .active_img{
    outline: solid 2px red!important;
  }
  .red {
    color: red;
    font-size: 14px;
  }
  .blue {
    color: blue;
    font-size: 20px;
  }

  button {
    border: 0;
    background-color: transparent;
    outline: none;
  }

  a:hover {
    text-decoration: none;
    color: #FD6B66;
  }

  img {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 83%;
  }

  .left1 {
    width: 100%;
    /*height: 700px;*/
    /*background: yellow;*/

  }

  .left1 img {
    width: 100%;
    max-width: 430px;
    height: 430px;
  }

  .right1 {
    width: 100%;
    /*height: 700px;*/
    /*background: red;*/
  }

  .right1 .goods_title {
    font-size: 1.3em;
  }

  .right1 .goods_price {
    width: 100%;
    height: 100px;
    margin-top: 15px;
    background: #FAF5F9;
    line-height: 100px;
    text-align: left;
  }

  .right1 .goods_price .price {

    font-size: 3.5em;
    color: #FD6B66;
  }

  .size {
    margin-top: 20px;
    color: #a0a0a0;
  }

  .ml {
    margin-top: 10px;
    margin-left: 20px;
  }

  .button {
    margin-left: 15px;
  }

  .list {
    /*background: yellow;*/
    width: 45px;
    height: 35px;
    outline: 2px solid #FD6B66;
    /*margin:0px 15px  auto;*/
    /*text-align: center;*/
    /*line-height: 35px;*/
    /*border: 2px solid rosybrown;*/
    /*padding-left: 15px;*/
  }

  .img {
    /*margin-left: 15px;*/
    width: 35px;
    height: 35px;
    /*border: 1px solid red;*/
    outline: 2px solid #DCDCDC;
  }

  .length {
    margin-left: 15px;
  }

  .count {
    margin-top: 25px;
    color: #a0a0a0;
  }

  .reduce {
    background: #EDEDED;
    width: 30px;
    height: 30px;
    font-weight: 900;
    text-align: center;
    border: 1px solid #A9A9A9;
  }

  .input {
    width: 40px;
    height: 30px;
    text-align: center;
    margin-left: -4px;
    outline: none;
  }

  .add {
    border: 1px solid #A9A9A9;
    width: 30px;
    height: 30px;
    text-align: center;
    font-weight: 900;
    margin-left: -4px;
    background: #EDEDED;
    margin-right: 10px;
  }

  .buygo {
    border: 1px solid #FF4466;
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #FFEFF2;
    color: #FF4466;
    font-size: 14px;
    display: inline-block;
  }

  .joincart {
    border: 1px solid #FF4466;
    width: 100px;
    height: 40px;
    margin-left: 20px;
    text-align: center;
    line-height: 40px;
    background: #FF4466;
    color: white;
    font-size: 14px;
    display: inline-block;
  }

  .shop_info {
    min-width: 270px;
    border: 1px solid #F6F6F6;
  }

  .shop_info .shopname {
    width: 100%;
    height: 60px;
    background: #F6F6F6;
    text-align: center;
    line-height: 60px;
    font-size: 1.3em;
    color: #FF4466;
  }

  .shop_info .pro {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .shop_info .pro .pro_all {
    text-align: center;
    display: inline-block;
    color: #999999;
  }

  .shop_info .pro .pro_all p {
    color: #FF4466;
    font-size: 2em;
  }

  .shop_info .pro span {
    border: 1px solid gainsboro;
  }

  .shop_info .collection {
    margin-top: 20px;
    /*min-width: 400px;*/
    display: flex;
    justify-content: space-around;
    color: #99A5C2;
  }

  .collection .c_l {
    width: 100px;
    height: 30px;
    border: 1px solid #E4E4E4;
    text-align: center;
    line-height: 30px;
  }

  .collection .c_l img {
    width: 20px;
    height: 20px;
  }

  .shop_info .address {
    margin-top: 20px;
  }

  .goods_info .clothes {
    /*width: 400px;*/
  }

  .goods_info .clothes .bigclothes {
    width: 100%;
  }

  .goods_info .clothes .bigclothes img {
    width: 100%;
  }

  .hide1 {
    display: none;
  }

  .recommend {
    width: 100%;
    height: 35px;
    margin-top: 40px;
    background: #c9c9c9;
    border-bottom: 2px solid #E4393C;
  }

  .recommend .border {
    width: 100px;
    height: 35px;
    background: #E4393C;
    text-align: center;
    line-height: 35px;
    color: white;
  }

  .com_a {
    width: 100%;
    margin-top: 30px;
  }

  .com_a .shop_image {
    width: 100%;
    height: 260px;
    /*text-align: center;*/
  }

  .com_a .shop_image img {
    width: 100%;
    max-width: 280px;
    height: 260px;
    background-size: cover;
  }

  .com_a .shop_price {
    color: #FD6B66;
    font-size: 1.8em;
    margin-left: 20px;
  }

  .com_a .shop_text {
    /*width: 100%;*/
    margin-top: 5px;
    margin-left: 20px;
  }

  .com_a .shop_user {
    margin-top: 5px;
    margin-left: 20px;
  }

  .com_a .shop_user a {
    color: rgba(128, 128, 128, 0.36);
  }

  .joincart {
    cursor: pointer;
  }

  .active {
    /*width: 45px;*/
    /*height: 35px;*/
    /*outline: 2px solid #FD6B66;*/
    color: red;
  }
</style>
