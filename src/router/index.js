import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top'
import Head from '../components/Head'
import MainNavigation from '../components/MainNavigation'
import MallContent from '../components/MallContent'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'
import GoodsList from '../components/GoodsList'
import GoodsInformation from '../components/GoodsInformation'
import ShoppingCart from '../components/ShoppingCart'



Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path:"/",
      components:{
        top:Top,
        head1:Head,
        mainNavigation:MainNavigation,
        mallContent:MallContent,
        bottom:Bottom,
        footer1:Footer
      }
    },
    {
      path:"/goodsList",
      components:{
        top:Top,
        head1:Head,
        mainNavigation:MainNavigation,
        mallContent:GoodsList,
        bottom:Bottom,
        footer1:Footer
      }
    },
    {
      path:"/goodsInformation/:id",
      name:'id',
      components:{
        top:Top,
        head1:Head,
        mainNavigation:MainNavigation,
        mallContent:GoodsInformation,
        bottom:Bottom,
        footer1:Footer
      }
    },
    {
      path:"/shoppingCart",
      name:'shoppingCart',
      components:{
        top:Top,
        head1:Head,
        mainNavigation:MainNavigation,
        mallContent:ShoppingCart,
        bottom:Bottom,
        footer1:Footer
      }
    },
  ]
})
