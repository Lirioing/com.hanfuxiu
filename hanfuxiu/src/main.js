// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//创建头部导航组件,第一个小的导航条
import NavHeader from './components/tools/NavHeader'
//创建头部的导航的搜索那个导航,第二个导航条
import NavSearch from './components/tools/NavSearch'
//创建页面底部信息,
import NavFooter from './components/tools/NavFooter'
import router from './router'

// import
//QS是axios库中带的，不需要我们再npm安装一个

import Api from './ajax.js';
Vue.prototype.$ajax = Api;


Vue.config.productionTip = false

//注册成为全局组件
Vue.component('nav-header',NavHeader);
Vue.component('nav-search',NavSearch);
Vue.component('nav-footer',NavFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})