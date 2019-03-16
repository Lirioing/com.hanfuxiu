<template>
  <!--这里是登录页面,登录页面的内容放置在这里-->
  <div class="container">
    <div class="row">
      <div class="mywidth">
        <div class="col-lg-4 myform">
          <div class="aaa">
            <span>登录</span>
            <div class="bbb">
              还没有账号?
              <router-link to="/regist">30秒注册</router-link>
            </div>
          </div>
          <form class="form-horizontal mylogin" action="#">
            <div class="form-group row">
              <label class="col-sm-3 control-label">用户名:</label>
              <div class="col-sm-9">
                <!--用v-model绑定input输入框,获取input输入框中的值,绑定一个input输入框的change时间,对用户的telephone进行表单验证-->
                <input class="form-control" id="inputTel3" placeholder="Telephone" v-model="username"
                       v-on:change="checkTelphone">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-offset-3 col-sm-9" id="tel_error">
                <!--输出change事件中telephone的错误信息-->
                <p>{{tel_error}}</p>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-3 control-label">密码:</label>
              <div class="col-sm-9">
                <!--用v-model绑定input输入框,获取input输入框中的值,绑定一个input输入框的change时间,对用户的password进行表单验证-->
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password"
                       v-model="password" v-on:change="checkPassword">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-offset-3 col-sm-9" id="psd_error">
                <!--输出change事件中password的错误信息-->
                <p>{{psd_error}}</p>
              </div>
            </div>
            <div class="form-group row">
              <div class=" col-sm-9">
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> 记住密码
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-offset-3 col-sm-3">
                <!--添加一个点击事件-->
                <a class="btn btn-default mybtn" id="mysubmit" v-on:click="login">登录</a>
              </div>
              <div class="col-sm-6">
                <a href="#" style="line-height: 34px;color: #cccccc">忘记密码</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //导入axios和公用的Bus
  import axios from 'axios'
  import Bus from '../../bus.js'
  export default {
    name: "Login",
    data: function () {
      return {
        psd_error: "",
        tel_error: "",
        username: "",
        password: ""
      }
    },
    mounted: function () {
      //页面渲染的时候从localStorage中取的token,判断token是否存在,存在,判断是否过期
      let token = localStorage.getItem('token');
      if (token) {
        //token存在,发送axios,根据后来发来的response,判断token是否过期
        axios.post(
          'http://39.105.36.78:8080/api/user/login/',
          { "token":token}
        ).then((response) => {
          if (response.data && response.data.status_code == 'X103'){
            //token没过期,不允许用户进行二次登录
            this.$router.push({path:"/"});
          }
        }).catch((error)=>{
          console.log(error)
        })
      } else {
      //    token过期,什么操作都不进行
      }
    },
    methods: {
      //login方法,取到用户输入的telephone和password,进行登录,登录之后把返回回来的数据存到localStorage中,
      login: function () {
        var that = this;
        axios.post(
          'http://39.105.36.78:8080/api/user/login/',
          {"telephone": this.username, "password": this.password, "token": null}
        ).then(function (response) {
          if (response.data && response.data.status_code == 'X103') {
            // console.log(typeof(response.data.status_code))
            window.localStorage.setItem('user_id', response.data.id);
            window.localStorage.setItem('username', response.data.username)
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('telephone', response.data.telephone);
            //通过Bus发送一个自定义事件,把用户名传给NavHeader组件,NavHeader组件,拿到值把原先的登录两个字给覆盖掉
            Bus.$emit('val',response.data.username);
            //返回上一个页面
            that.$router.go(-1);
          } else {
            alert(response.data.status_text);
          }
        })
          .catch(function (error) {
              console.log(error)
            }
          )
      },
      //检查电话号码格式的方法,如果不正确,错误信息出现在tel_error中
      checkTelphone: function () {
        var regMobile = /^1[3,5,8]\d{9}$/;
        if (this.username) {
          if (regMobile.test(this.username)) {
            this.tel_error = '';

          } else {
            this.tel_error = '*手机号码格式不正确';
          }
        } else {
          this.tel_error = '*手机号码不能为空';
        }
      },
      //检查电话号码格式的方法,如果不正确,错误信息出现在psd_error中
      checkPassword() {
        var regMobile = /^\w{6,}$/;
        if (this.password) {
          if (regMobile.test(this.password)) {
            this.psd_error = '';
          } else {
            this.psd_error = '*密码必须大于六位';
          }
        } else {
          this.psd_error = '*密码不能为空';
        }
      }
    }
  }

</script>

<style scoped>
  .myform {
    position: relative;
    left: 640px;
    top: 160px;
  }

  .mylogin {
    border: solid 1px #cccccc;
    padding: 20px;
    background: #ffffff;

  }

  .aaa {
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    font-size: 24px;
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: #cccccc;
    background: #ffffff;
  }

  .bbb {
    color: #cccccc;
    font-size: 10px;
    float: right;
    margin-right: 20px;
  }

  .bbb a {
    color: #ff0000;
  }

  .mybtn {
    background: #cccccc;
  }

  .mywidth {
    width: 100%;
    height: 670px;
    background: #36b0ca;
    margin: auto;
  }

  div[id$='error'] {
    color: red;
    font-size: 0.7em;
    height: 1em;
  }

</style>
