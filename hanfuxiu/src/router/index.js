import Vue from 'vue'
import Router from 'vue-router'
//导入首页，购物车，我的订单，个人中心，商品详情页，商品搜索页，店铺页，注册页面，登录页面和确认订单页面组件
import Index from '@/components/index/Index'
import Cart from '@/components/cart/Cart'
import Order from '@/components/order/Order'
import Self from '@/components/self/Self'
import Goods from '@/components/goods_info/Goods'
import Search from '@/components/search/Search'
import Shops from '@/components/shops/Shops'
import Regist from '@/components/login_regist/Regist'
import Login from '@/components/login_regist/Login'
import ComFirmOrder from '@/components/comfirm_order/ComFirmOrder'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      //首页
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      //购物车页面
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      //我的订单页面
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      //个人中心页面
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      // 商品详情页
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      //商品搜索页面
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      //店铺页面
      path: '/shops',
      name: 'Shops',
      component: Shops
    },
    {
      //注册页面
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      //登录页面
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //确认订单页面
      path: '/comfirmorder',
      name: 'ComFirmOrder',
      component: ComFirmOrder
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
