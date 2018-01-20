<template>
  <div>
  <header>
    <router-link to="/" slot="left">
      <mt-button icon="back" class="button"></mt-button>
    </router-link>
    <input type="text" placeholder="搜索商品名称">
    <router-link to="/classity" slot="right">
      <mt-button icon="search" class="button"></mt-button>
    </router-link>
  </header>
  <div class="contant">
    <div class="title">热门搜索</div>
    <div>
      <img src="/static/img/main-5.png" alt="" style="width: 100%;height: 10rem">
    </div>
    <ul class="tuijian">
      <li>红米5新品</li>
      <li>电视56英寸</li>
      <li>净水器厨下</li>
      <li>小米MIX2</li>
    </ul>
  </div>
  </div>



</template>
<style>
header{
  background: #DDDDDD;
  height: 60px;
}
.button{
  /*display: block;*/
  border: none;
  outline: none;
  box-shadow: none;
  background: #DDDDDD;
  height: 60px;
}
  input{
    border: none;
    line-height: 30px;
    text-indent: 1em;
    opacity: 0.5;
    width: 75%;
  }
  .title{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-indent: 1em;
    font-weight: bold;
  }
  .tuijian{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .tuijian li {
    width: 30%;
    height: 40px;
    background-color: #ff5816;
    text-align: center;
    line-height: 40px;
    margin: 5px;
    opacity: 0.6;
    border-radius: 5px;

  }
</style>
