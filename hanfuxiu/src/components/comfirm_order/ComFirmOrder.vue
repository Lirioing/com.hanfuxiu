<template>
<!--这里是确认订单页面-->
  <div>
    <!--导航下面的搜索-->
    <nav-search></nav-search>
    <!--搜索下面的那个小导航,右边是个我的点单按钮-->
    <comfirm-nav></comfirm-nav>
    <!--确认订单的主体部分-->
    <comfirm-order-body></comfirm-order-body>
  </div>
</template>

<script>
  //<!--导入确认订单的body组件、nav组件和axios-->
  import ComFirmOrderBody from './ComFirmOrderBody'
  import ComFirmNav from './ComFirmNav'
  import axios from 'axios'
export default {
name: "ComFirmOrder",
  components:{
    'comfirm-order-body':ComFirmOrderBody,
    'comfirm-nav':ComFirmNav,
  },
  mounted:function () {
    //从后台获取token
    let token = window.localStorage.getItem('token');
    //发送axios,去判断token有没有过期
    if (token) {
      axios.post(
        'http://39.105.36.78:8080/api/user/login/',
        {"token": token}
      ).then((response) => {
        if (response.data && response.data.status_code == 'X103') {
          // console.log(response.data.usermassage)
        //  判断token没有过期的话,是可以输出usermassage的,token没过期,在确认订单页面不进行任何操作
        }else{
          //token过期,跳到登录页面
          this.$router.push({path:'/login'})
        }
      }).catch((error) => {
        console.log(error)
      })
    } else {
      //没有token,跳到登录页面
      this.$router.push({path:'/login'})
    };
  }

}
</script>

<style scoped>

</style>
