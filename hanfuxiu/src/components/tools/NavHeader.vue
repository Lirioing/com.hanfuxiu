<template>
  <!--整个页面的导航-->
  <nav class="navbar navbar-default my-nav" id="nav1">
    <div class="container-fluid  my-nav-limit-len">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed nav-mycount-btn" id="nav-btn1" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <img src="../../assets/mycount.svg" alt="">
        </button>
        <img class="navbar-brand nav-my-position" src="../../assets/iconPosition.svg">
        <span class="navbar-brand nav-my-position" id="nav-my-positions">苏州</span>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <!--这里是一个简陋的登录按钮,只显示一个值登录,注册页面从登录页面进去,注册在登录里面有个router-link进行跳转,整个页面上,没有其他途径进入注册页面-->
            <router-link to="/login" class="nav-username nav-a" id="myname">{{username}}</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!--我的汉服代表首页,购物车,我的订单,个人中心点击可以进行路由跳转-->
          <li>
            <router-link to="/" class="nav-a" id="firstPage">我的汉服</router-link>
          </li>
          <li>
            <router-link to="/cart" class="nav-a" target="_blank" id="myCart">购物车</router-link>
          </li>
          <li>
            <router-link to="/order" class="nav-a" target="_blank" id="myOrder">我的订单</router-link>
          </li>
          <li>
            <router-link to="/self" class="nav-a" target="_blank" id="personalCentral">个人中心</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  //导入axios,导入公用的Bus
  import axios from 'axios'
  import Bus from '../../bus.js'
  export default {
    name: "nav-main",
    data: function () {
      return{
        //设置登录的默认值
        username:"登录"
      }
    },
    mounted: function () {
      //公共Bus的自定义事件val,获取从login发来的数据,绑定但username中
      var vm =this
      Bus.$on('val',(data)=>{
        vm.username=data;
      });
      //登录那个router-link在页面上显示登录或者用户名,
      //取的token,判断token,有token且token没过期,从usermassage中取的username,
      // token过期从localStorage中取的username,没有token显示登录二字
      let token = window.localStorage.getItem('token');
      if (token) {
        axios.post(
          'http://39.105.36.78:8080/api/user/login/',
          {"token": token}
        ).then((response) => {
          if (response.data && response.data.status_code == 'X103') {
            this.username=response.data.usermassage.username;
          }else{
            this.username=window.localStorage.getItem('username');
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
      };

    }
  }
</script>

<style scoped>
  .my-nav-limit-len {
    max-width: 1290px;
  }

  .my-nav {
    min-height: 36px;
    margin-bottom: 0;
  }

  .nav-my-position {
    height: 36px;
    padding: 9px 15px;
  }

  #nav-my-positions {
    height: 36px;
    font-size: 14px;
    padding: 11px 0;
  }

  .nav-a {
    height: 36px;
    font-size: 14px;
    padding: 11px 15px !important;
    /*float: left;*/
  }

  .nav-username {
    color: #b6976b !important;
  }

  .nav-mycount-btn {
    border: none;
    margin: 3px 15px 3px 0;
    padding: 0;
  }
</style>
