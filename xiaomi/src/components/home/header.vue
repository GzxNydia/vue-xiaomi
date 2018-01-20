<template>
  <div class="header">
    <section>
      <img src="../../images/logo.png" alt="" >
    </section>
    <div class="search-box">
      <router-link to="search">搜索商品名称</router-link>
    </div>
    <div class="me">
      <router-link to="me">
        <div class="nav"><div class="if ispr"></div></div>
      </router-link>
    </div>
    <div class="list">
      <mt-navbar class="page-part" :selected.sync="selected" style="background: #DCDCDC">
        <mt-tab-item id="1"><router-link to="home">推荐</router-link></mt-tab-item>
        <mt-tab-item id="2"><router-link to="">手机</router-link></mt-tab-item>
        <mt-tab-item id="3">智能</mt-tab-item>
        <mt-tab-item id="4">电视</mt-tab-item>
        <mt-tab-item id="5">电脑</mt-tab-item>
      </mt-navbar>
    </div>
  </div>

</template>
<style scoped>
  .header{
    width: 100%;
    background: #DDDDDD;
    position: fixed;
    top: 0;
    z-index: 98999;
  }
  section{
    float:left;
  }
  img{
    width: 27.59px;
    height: 17.84px;
    margin-left: 10px;
    margin-top: 15px;
  }
  .me{
    margin-left: 10px;
    margin-top: 5px;
    /*float:left;*/
  }
  .nav .ispr.if{
    width:2rem;
    height:2rem;
    margin:2px auto;
    background-image:url(../../images/svg/footer_me1.svg);
    background-size:2rem 2rem;
    overflow:hidden;
  }
  .list{
    position: absolute;
    width: 100%;

  }
  a{
    text-decoration: none;
    color: inherit;
  }
  .search-box {
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    width: 16rem;
    height: 5rem;
    border-radius: 3px;
    line-height: 2rem;
    overflow: hidden;
    background: #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-indent: 1em;
    opacity: 0.5;

  a {
    font-size: 0.15rem;
    color: rgba(0, 0, 0, 0.1);
    padding-left: 0.55rem;
    padding-top: 0.1rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: inline-block;

  }

  }
</style>
