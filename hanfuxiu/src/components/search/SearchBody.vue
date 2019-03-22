<template>
  <!--这里是search的主体内容存放的地方-->

  <div class="container header" style="display:block" id="container">
    <div class="row di ">
      <div class="col-md-1">
        <img class="image" src="../../assets/protype_girl.png">
      </div>
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-1 icon"><a :[cls]="send==1?'color':'' " :ref="send==1?'btn':'' " @click="send=1,collection($event)">女款套装</a>:</div>
          <div class="col-md-1 one"><a :[cls]="send==2?'color':'' " :ref="send==2?'btn':'' " @click="send=2,collection($event)">对襟襦裙</a></div>
          <div class="col-md-1 one"><a :[cls]="send==3?'color':'' " :ref="send==3?'btn':'' " @click="send=3,collection($event)">齐胸襦裙</a></div>
          <div class="col-md-1 one"><a :[cls]="send==4?'color':'' " :ref="send==4?'btn':'' " @click="send=4,collection($event)">袒领襦裙</a></div>
          <div class="col-md-1 one"><a :[cls]="send==5?'color':'' " :ref="send==5?'btn':'' " @click="send=5,collection($event)">袄裙</a></div>
          <div class="col-md-1 one"><a class="color" ref="btn"></a></div>
        </div>
      </div>
    </div>
    <div class="row di" id="row">
      <div class="col-md-1">
        <img class="image" src="../../assets/protype_boy.png">
      </div>
      <div class="col-md-11">
        <div class="row">
          <div class="col-md-1 icon"><a :[cls]="send==6?'color':'' " :ref="send==6?'btn':'' " @click="send=6,collection($event)">男款套装</a>:</div>
          <div class="col-md-1 one"><a :[cls]="send==7?'color':'' " :ref="send==7?'btn':'' " @click="send=7,collection($event)">衣裳</a></div>
          <div class="col-md-1 one"><a :[cls]="send==8?'color':'' " :ref="send==8?'btn':'' " @click="send=8,collection($event)">直缀</a></div>
          <div class="col-md-1 one"><a :[cls]="send==9?'color':'' " :ref="send==9?'btn':'' " @click="send=9,collection($event)">深衣</a></div>
          <div class="col-md-1 one"><a :[cls]="send==10?'color':'' " :ref="send==10?'btn':'' " @click="send=10,collection($event)">道袍</a></div>
          <div class="col-md-1 one"><a :[cls]="send==11?'color':'' " :ref="send==11?'btn':'' " @click="send=11,collection($event)">其他</a></div>
        </div>
      </div>
    </div>
    <div class=" second" id="price">
      <div class="sort"><span>排序</span>： <a class="color_sort" :[cls]="order==0?'color':'' " :ref="order==0?'ord':'' " @click="order=1,sort($event)">最新</a>
        <a :[cls]="order==2?'color':'' " :ref="order==2?'ord':'' " @click="order=2,sort($event)">价格↑</a><a :[cls]="order==3?'color':'' " :ref="order==3?'ord':'' " @click="order=3,sort($event)">价格↓</a></div>
    </div>


    <search_none :goods="goods" v-if="goods.status_code"></search_none>
    <search_goods :goods="goods" v-else></search_goods>
    <div class="pager" id="page">
      <ul  v-for="page in pages">
        <li class="active" @click="paging"><a>{{page}}</a></li>
      </ul>
    </div>
    <!--<div><p>{{msg}}</p></div>-->
  </div>


</template>

<script>
  import axios from 'axios'
  import Bus from '../../eventBus'
  import Search_goods from './Search_goods'
  import Search_none from './Search_none'
  // let bus = new Vue();

  export default {

    name: "SearchBody",
    components: {
      'search_goods': Search_goods,
      'search_none':Search_none

    },

    data: function () {

      return {
        cls:"class",
        send:0,
        order:0,
        goods: [],
        pages:0,
        name:''
      }

    },

    mounted(){
      axios.post(
        'http://192.168.2.6:8080/api/serach/serachsAll/',
        {"class":"1",'sort':'create_date','page':'0'}).then(function (response) {
        console.log(response.data)
        console.log(response.data.status_code)
          that.goods=[];
        // j<=Math.ceil(res.length/8)
        if (response.data.status_code!=10004){
          that.goods=response.data.slice(0,8);
          that.pages=0
          that.pages=Math.ceil(response.data.length/8)
          console.log(that.goods);
        }
        else {
          that.pages=0;
          that.goods=response.data
          console.log('ok')
        }
          console.log(that.goods);
        }
      ).catch(function (error) {
          console.log(error)
        }
      );
      var that=this;

      // console.log(search_goods)
      Bus.$on('search',function (search_goods) {
        console.log('ok')
        that.goods=search_goods.slice(0,8);
        that.pages=Math.ceil((search_goods.length-1)/8)
        console.log(that.goods)
        that.name=search_goods[search_goods.length-1]
        console.log(that.name)

      });
    },
    methods: {
      collection: function (e) {
        var user = {'class': e.target.innerText, 'sort': 'create_date'}
        var that = this;

        axios.post(
          'http://192.168.2.6:8080/api/serach/serachscol/',
          user).then(function (response) {
          console.log(response.data.status_code)
          that.goods=[];
          that.name=''
          if (response.data.status_code!=10004){
            that.goods=response.data.slice(0,8);
            that.pages=0
            that.pages=Math.ceil(response.data.length/8)
          }
          else {
            that.pages=0;
            that.goods=response.data
            console.log('ok')
          }
          console.log(that.goods)
          // console.log(that.pages)
          // that.goods=that.goods.concat();
          }
        ).catch(function (error) {
            console.log(error)
          }
        )

      },
      sort:function (e) {
        var type=this.$refs.btn.innerText;
        console.log(type)
        var user = {'name':'%'+this.name+'%','class':type, 'sort': e.target.innerText}
        var that = this;
        axios.post(
          'http://192.168.2.6:8080/api/serach/serachssort/',
          user).then(function (response) {
          console.log(response.data.status_code)
            that.goods=[];
          if (response.data.status_code!=10004){
            that.goods=response.data.slice(0,8);
            that.pages=0;
            that.pages=Math.ceil(response.data.length/8)
          }
          else {
            that.pages=0;
            that.goods=response.data
            console.log('ok')
          }
            console.log(that.goods);
            // that.goods=that.goods.concat();
          }
        ).catch(function (error) {
            console.log(error)
          }
        )
      },
      paging:function () {
        var type=this.$refs.btn.innerText;
        var order=this.$refs.ord.innerText
        var user={'name':'%'+this.name+'%','class':type,'sort':order,'page':(event.target.innerText-1)*8}
        var that = this;
        axios.post(
          'http://192.168.2.6:8080/api/serach/serachssortpage/',
          user).then(function (response) {
            that.goods=[];
          that.goods=response.data.slice(0,8);
          // that.pages=Math.ceil(response.data.length/8)
            console.log(that.goods);
            // that.goods=that.goods.concat();
          }
        ).catch(function (error) {
            console.log(error)
          }
        )
      }
  }
  }
</script>

<style scoped>
  body ul li a {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #FFE9FF;
  }
  .color{
    color: #FD6B66;
  }
  a {
    color: rgba(0, 0, 0, 0.76);
    text-decoration: none;
    cursor: pointer;

  }

  a:hover {
    color: #FD6B66;
  }

  ul {
    list-style: none;
  }

  .header {

    /*width: 1100px;*/
    /*width: 85%;*/
    background: white;
  }

  .di {
    border-bottom: 1px #ddd dashed;
  }

  .image {
    padding-top: 15px;
    padding-left: 25px;
    padding-bottom: 20px;
  }

  .icon {
    padding-top: 20px;
    padding-left: 2px;
    margin-left: 45px;
  }

  .one {
    padding-top: 20px;
    padding-left: 2px;
  }

  .tan {
    padding-bottom: 20px;
  }

  .big {
    margin-top: 20px;
    padding-left: 2px;
    margin-left: 45px;
  }

  .second {
    /*width: 85%;*/
    /*min-width: 1100px;*/
    height: 50px;
    margin: auto;
    background: #FAFAFA;
    display: flex;
    align-items: center;
  }

  .second .sort {
    color: grey;
    margin-left: 40px;
  }

  .second .sort a {
    padding-left: 20px;
  }

  @media only screen and (max-width: 1200px) {
    .second > div.range {
      display: none;
    }
  }

  .second .range {
    margin-left: 70px;
  }

  .second .range a {
    padding-left: 20px;
  }

  .second .status {
    /*margin-left: 80px;*/
    /*max-width: 100px;*/
    display: none;
  }

  .second .status a {
    padding-left: 20px;
  }

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
  .pager{
    /*margin: auto;*/
    margin-top: 30px;
    margin-left: 200px;
    text-align: center;

  }
  .pager ul{
    margin: auto;

  }
  .pager ul li {

    float: left;
  }
  .pager ul li a{
    /*margin: auto;*/
    line-height: 30px;
    width: 40px;
    height: 30px;
    margin-left: 25px;
  }
</style>
