import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Classity from '@/view/classity'
import Cart from '@/view/cart'
import Me from '@/view/me'
import Search from '@/view/search'
import Login from '@/view/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classity',
      component: Classity
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/me',
      component: Me
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
