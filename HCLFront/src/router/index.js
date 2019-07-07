import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import register from '@/components/Register'
import mainPage from '@/components/MainPage'
import address from '@/components/Address'
import shopdetail from '@/components/ShopDetail'
import personalcenter from '@/components/PersonalCenter'
import personalOrder from '@/components/PersonalOrder'
import home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: shopdetail
    },
    {
      path:'/personalorder',
      name:'personalorder',
      component:personalOrder
    },
    {
      path:'/personalcenter',
      name:'personalcenter',
      component:personalcenter
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path:'*',
      redirect:'/order'
    }
  ]
})
