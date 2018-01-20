<template>
  <div>
    <div>
      <div style="height: 0px;">
        <img src="/static/img/carbg.png" alt="" style="width: 100%;height: 1px;opacity: 0.1">
      </div>
      <header>
        <router-link to="/" slot="left">
          <mt-button icon="back" class="button"></mt-button>
        </router-link>
        <p>购物车</p>
        <router-link to="/search" slot="right">
          <mt-button icon="search" class="button"></mt-button>
        </router-link>
      </header>
    </div>
    <mt-cell
      title="登录享更多优惠"
      :to="link"
      is-link
      value="去登陆" style="margin-top: 60px;">
    </mt-cell>
    <div class="toHome">
      <span>购物车还是空的</span>
      <router-link to="/">去逛逛</router-link>
    </div>
    <div >
      <img src="/static/img/cainixihuan.jpg" alt="" style="width: 100%">
    </div>
    <ul class="proShow-Mes">
      <li>
        <img src="/static/img/body-1.png" alt="">
        <p>红米Note 5A 16</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>
        <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
      </li>
      <li>
        <img src="/static/img/body-2.png" alt="">
        <p>红米4</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>
        <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
      </li>
      <li>
        <img src="/static/img/body-3.png" alt="">
        <p>红米Note 5A 16</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>

      </li>
      <li>
        <img src="/static/img/body-4.png" alt="">
        <p>红米Note 5A 16</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>

      </li>
      <li>
        <img src="/static/img/body-5.png" alt="">
        <p>红米Note 5A 16</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>

      </li>
      <li>
        <img src="/static/img/body-6.png" alt="">
        <p>红米Note 5A 16</p>
        <p>5.5英寸大屏</p>
        <span>￥ 699</span>
        <span class="topImg"><img src="/static/img/-50.png" alt=""></span>
      </li>

    </ul>
    <v-baseline></v-baseline>
  </div>

</template>

<script>
  import baseLine from '../components/home/baseline'
  export default {
    name: "Cart",
    data () {
      return {
        link:'http://localhost:8080/#/login'
      }
    },
    components:{
      'v-baseline':baseLine
    }
  }
</script>

<style scoped>
  header{
    background: #DDDDDD;
    height: 60px;
    display: flex;
    position: fixed;
    z-index: 99999;
    width: 100%;
  }
  .button{
    /*display: block;*/
    border: none;
    outline: none;
    box-shadow: none;
    background: #DDDDDD;
    height: 60px;
  }
  header p{
    text-align: center;
    width: 80%;
    line-height: 60px;
  }
  .toHome{
    text-align: center;
    width: 100%;
    height: 80px;
    background-color:	#D3D3D3;
    line-height: 80px;
  }
  .toHome span{
    opacity: 0.25;
  }
  .toHome a{
    color: #333333;
    opacity: .8;
    text-decoration: none;
    border: 1px solid #666666;
    padding: 2px;
    border-radius: 5px;
  }
  .proShow-Mes{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .proShow-Mes li{
    width: 50%;
    /*border: 1px solid red;*/
    height: 15rem;
    padding: 2px;
    position: relative;
  }
  .proShow-Mes li>p:nth-child(3){
    font-size: 12px;
    color: #666666;
  }
  .proShow-Mes li>span{
    color: red;
  }
  .proShow-Mes li>.topImg{
    position: absolute;
    top:0;
    left: 0;
  }
  .proShow-Mes li .topImg img{
    width: 6rem;
    height: 1.5rem;
  }

  .proShow-Mes li>img{
    width: 100%;
    height: 10rem;
  }
</style>
