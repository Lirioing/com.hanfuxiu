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

import axios from 'axios'

//1. 导入vuex   npm install vuex --save
import Vuex from 'vuex'
import store from './vuex/store'

//2. 全局使用VUEX
Vue.use(Vuex);

//3. 新建store
Vue.config.productionTip = false;


Vue.config.productionTip = false;

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
});
