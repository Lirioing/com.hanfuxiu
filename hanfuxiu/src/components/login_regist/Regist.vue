<template>
  <!--这里是注册页面存放的地方-->
  <div class="container-fluid mycontainer">
    <div class="container">
      <div class="row">
        <div class="mywidth">
          <div class="col-xs-6 col-sm-6 col-md-5 col-lg-4 myform">
            <div class="aaa">注册</div>
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
                <div class="col-sm-offset-3 col-sm-9">
                  <!--添加一个点击事件,用来进行注册-->
                  <a href="#" class="btn btn-default mybtn" id="mysubmit" @click="regist">注册</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //导入axios
  import axios from 'axios'
  export default {
    name: "Regist",
    data: function () {
      return {
        psd_error: "",
        tel_error: "",
        username: "",
        password: ""
      }
    },
    methods: {
      //注册方法,
      regist: function () {
        var that = this;
        axios.post(
          'http://39.105.36.78:8080/api/user/person/',
          {"telephone": this.username, "password": this.password}
        ).then(function (response) {
          if (response.data && response.data.status_code == 'X101') {
            //注册成功,跳转到登录页面
            that.$router.push({path:'/login'});
          } else {
            //注册失败弹出状态文本
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
  .mywidth{
    width: 100%;
    height: 670px;
    margin: auto;
    background: rgba(225, 167, 50, 0.16);
  }
  .mycontainer{
    background: rgba(225, 167, 50, 0.16);
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547725145174&di=2146a3a5017703ed9837b0cc09e1df50&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn1%2Fs350x449_jfs%2Ft17893%2F323%2F2320871320%2F129414%2F2a7d0ecf%2F5af2a9d4Nb68318fa.jpg%2521cc_350x449.jpg");
    background-repeat: no-repeat;
    background-position:30%;
  }
  .myform{
    position: relative;
    left: 54%;
    top: 160px;
  }
  @media (max-width: 768px){
    .myform{
      position: relative;
      left: 20%;
      top: 160px;
    }
  }
  @media (min-width: 768px) {
    .myform{
      position: relative;
      left: 36%;
      top: 160px;
    }
  }
  @media (min-width: 970px) {
    .myform{
      position: relative;
      left: 50%;
      top: 160px;
    }
  }

  .mylogin{
    border: solid 1px #cccccc;
    padding: 20px ;
    background: rgba(225, 167, 50, 0.16);
  }
  .aaa{
    height: 60px;
    line-height: 60px;
    padding-right: 44px;
    font-size: 24px;
    border-top:1px solid ;
    border-left:1px solid ;
    border-right:1px solid ;
    border-color: #cccccc;
    text-align: right;
    background: rgba(225, 167, 50, 0.16);
  }
  .mybtn{
    background: #cccccc;
    margin-top: 10px;
  }
  div[id$='error']{
    color: red;
    font-size: 0.7em;
    height: 1em;
  }

</style>
