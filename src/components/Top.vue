<template>
  <!-- 顶部导航栏-->
  <div class="top">
    <div class="wrap">
      <ul><li>收藏本站</li><li>关注本站</li></ul>
      <ul class="top-right">
        <li>您好，欢迎来到网上商城！[<a href="#">登录</a>][<a href="#">免费注册</a>]</li>
        <li class="top-line">|</li><li><a href="#">我的订单</a></li>
        <li class="top-line">|</li><li><a href="#">会员中心</a></li>
        <li class="top-line">|</li><li><a class="pjax" href="cart.html" >我的购物车</a></li>
        <li class="top-line">|</li><li>联系客服</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'top',
    data(){
      return{

      }
    }
  }
</script>

<style>
  body{margin:0;min-width:755px;color:#666;font-size:14px;}
  .wrap{width:1220px;margin:0 auto;}
  .top{height:30px;line-height:30px;background:#F7F7F7;border-bottom:1px solid #eee;font-size:12px;color:#666;}
  .top-right{float:right;}
  .top-line{color:#ccc;}
  .top ul{margin:0 20px;padding:0;list-style:none;}
  .top li{float:left;margin-right:10px;}
  .top a{color:#666;text-decoration:none;}
  .top a:hover{color:#e4393c;text-decoration:underline;}
</style>
