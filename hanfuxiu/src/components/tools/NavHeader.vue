<template>
  <nav class="navbar navbar-default my-nav" id="nav1">
    <div class="container-fluid  my-nav-limit-len">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed nav-mycount-btn" id="nav-btn1" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <img src="../../assets/mycount.svg" alt="">
        </button>
        <img class="navbar-brand nav-my-position" src="../../assets/iconPosition.svg">
        <span class="navbar-brand nav-my-position" id="nav-my-positions">苏州</span>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="login.html" class="nav-username nav-a" id="myname">登录</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/" class="nav-a" id="firstPage">我的汉服</router-link></li>
          <li><router-link to="/cart" class="nav-a" target="_blank" id="myCart">购物车</router-link></li>
          <li><router-link to="/order" class="nav-a" target="_blank" id="myOrder">我的订单</router-link></li>
          <li><router-link to="/self" class="nav-a" target="_blank" id="personalCentral">个人中心</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "nav-main"
}
</script>

<style scoped>
  .my-nav-limit-len{
    max-width: 1290px;
  }
  .my-nav{
    min-height: 36px;
    margin-bottom: 0;
  }
  .nav-my-position{
    height: 36px;
    padding: 9px 15px;
  }
  #nav-my-positions{
    height: 36px;
    font-size: 14px;
    padding: 11px 0;
  }
  .nav-a{
    height: 36px;
    font-size: 14px;
    padding: 11px 15px !important;
    /*float: left;*/
  }
  .nav-username{
    color: #b6976b !important;
  }
  .nav-mycount-btn{
    border: none;
    margin:3px 15px 3px 0 ;
    padding: 0;
  }
</style>
