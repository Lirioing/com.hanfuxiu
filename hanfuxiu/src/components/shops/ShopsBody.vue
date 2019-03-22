<template>
<!--这里是店铺的的主体内容放置的位置-->
  <div>
    <nav class="navbar navbar-default mynav">
      <div class="container-fluid mycontainer-fluid" >
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">流烟昔冷</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">关注</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">搜本店</button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="mybackground">
          <div class="container myshops">
            <div class="myshop">
              <div class="myshoptop">
                <img src="https://pic.hanfugou.com/pc/2016/10/4/16/f0193305a4bc47358cd1848d5280f4c4.png_100x100.jpg" alt="">
                <p style="display: inline-block;padding: 0">流烟昔冷</p>
              </div>
              <div class="myshopcenter">
                <span class="glyphicon glyphicon-star-empty star"></span>
                <a href="#">
                  <span class="mystar">关注</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container  mycontainer">
      <div class="row">
        <div class="col-lg-12 col-md-12 mydiv">
          <a href="#"class="col-md-1 col-sm-3 col-xs-3">all</a>
          <a href="#"class="col-md-1 col-sm-3 col-xs-3">上新</a>
          <a href="#"class="col-md-1 col-sm-3 col-xs-3">分类</a>
          <div class="col-md-4">
            <a href="#" class="col-md-3 col-sm-3 col-xs-3">排序:</a>
            <a href="#" class="col-md-3 col-sm-3 col-xs-3">时间</a>
            <a href="#" class="col-md-3 col-sm-3 col-xs-3">销量</a>
            <a href="#" class="col-md-3 col-sm-3 col-xs-3">价格</a>
          </div>
          <a href="#" class="col-md-offset-3 col-md-2 col-sm-3 col-xs-3">关于我们</a>
        </div>
      </div>
      <shop-goods :goods="goods"></shop-goods>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import ShopGoods from './ShopGoods'
export default {
name: "ShopsBody",
  components: {
    'shopGoods': ShopGoods,
  },
  data:function () {
    return{
      goods:[],
    }
  },
  // methods:function(){
  //
  // },
  mounted:function (){
    var that = this;

    var getInfo=window.location.href.slice(window.location.href.lastIndexOf("?")+1);
    // console.log(getInfo)
    // alert(getInfo)
    // alert(window.location.href)
    axios.post(
      'http://192.168.2.6:8080/api/goods/shop/',
      {"shop_id": getInfo}
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
  .mynav{
    margin:0;
  }
  .mycontainer-fluid{
    background: red;
    width: 100%;
    padding-left:120px ;
    padding-right:120px ;
    /*max-width: 990px;*/
  }
  .mybackground{
    min-height: 300px;
    background-image:url('https://pic.hanfugou.com/pc/2016/6/7/14/bd27ad93fdf24f7c82a076a78c40609f.jpg_1920x315.jpg');
  }
  .mycontainer{
    background: rgba(234, 234, 234, 0.31);
    min-height: 200px;
    text-align: center;
    max-width: 1100px;
  }
  .myshops{
    padding: 0;
    max-width: 1100px;
    padding-top: 20px;

  }
  .myshop{
    width: 200px;
    height: 200px;
    background: #ffffff;
  }
  .myshoptop{
    height: 100px;
    width: 100%;
    background: #f2f2f2;
  }
  .myshoptop img{
    width: 60px;
    height: 60px;
    margin: 10px 20px 10px 20px;
  }
  .myshoptop>span{
    padding-left:120px ;
  }
  .mycontainer a{
    color: #2C2C2C;
  }

  .mydiv {
    height: 60px;
    border-bottom: 1px solid #cccccc;
    line-height: 60px;
    font-size: 1.2em;
  }
  .myinput{
    height: 30px;
  }
  .sort{
    height: 60px;
    border-bottom: 1px solid #cccccc;
    line-height: 60px;
    font-size: 1.2em;

  }
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
