import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/shops',
      name: 'Shops',
      component: Shops
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/comfirmorder',
      name: 'ComFirmOrder',
      component: ComFirmOrder
    },
  ]
})
