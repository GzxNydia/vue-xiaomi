<template>
  <div class="proShow" style="display: flex;flex-wrap: wrap">
    <div class="proShow-one">
      <div class="pSo-left">
        <img src="/static/img/left1.jpg" alt="">
      </div>
      <div class="pSo-right">
        <img src="/static/img/right1.png" alt="">
        <img src="/static/img/right2.png" alt="">
      </div>
    </div>
    <div>
      <img src="/static/img/main-4.png" alt="" style="width: 100%;height: 10rem">
    </div>
    <div>
      <img src="/static/img/main-5.png" alt="" style="width: 100%;height: 10rem">
    </div>
    <div>
      <img src="/static/img/main-6.png" alt="" style="width: 100%;height: 14rem">
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
    <div>
      <img src="/static/img/main-5.png" alt="" style="width: 100%;height: 10rem">
    </div>
    <div>
      <img src="/static/img/main-6.png" alt="" style="width: 100%;height: 14rem">
    </div>
  </div>

  </div>

</template>
<style scoped>
  .proShow{
    width: 100%;

  }
  .proShow-one{
    display: flex;
  }
  .proShow-one .pSo-left{
    width: 50%;
    height: 15rem;
    /*border: 1px solid red;*/
  }
  .proShow-one .pSo-left img{
    width: 99%;
    height: 100%;
  }
  .proShow-one .pSo-right{
    width: 50%;
    height: 15rem;
    position: relative;
  }
  .proShow-one .pSo-right img{
    position: relative;
    width: 100%;
    height: 7.4rem;
  }
  .proShow-Mes{
    width: 100%;
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

