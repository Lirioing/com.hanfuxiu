<template>
  <!--这里是带搜索框的那个导航条-->
  <nav class="navbar navbar-default navbar-second">
    <div class="container-fluid navbar-second-container my-nav-limit-len">
      <div class="navbar-header">
        <button type="button" id="btn-2" class="navbar-toggle collapsed my-navbar-btn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div id="hidden-div2" style="display: none">
          <a href="">首页</a>
          <a href="">汉衣库</a>
          <a href="#">我的关注</a>
          <a href="#">关于我们</a>
        </div>
        <router-link to="/" class="navbar-brand mynavbar-brand-a"></router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

        <form class="navbar-form navbar-left my-navbar-form">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <a  class="btn btn-default" id="btn">搜宝贝</a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavSearch"
  }
</script>

<style scoped>
  /*第二层导航开始*/
  .my-nav-limit-len{
    max-width: 1290px;
  }
  .navbar-second{
    height: 100px;
    /*background: url(https://img.alicdn.com/tfs/TB1JrfnAVzqK1RjSZFvXXcB7VXa-1920-100.png) top center no-repeat #ff9000;*/
    background-color: #ff4466;
    margin-bottom: 0;
  }
  .mynavbar-brand-a{
    background: url("https://www.hanfugou.com/App_Image/base_icon.png");
    width: 310px;
    height: 36px;
    display: inline-block;
    margin-top: 32px;
  }
  .my-navbar-form{
    margin-top: 33px;
    float: right !important;
  }
  .my-navbar-btn{
    margin-top: 33px;
    color: #636363;
    background-color:#f8f8f8 ;
  }
</style>
