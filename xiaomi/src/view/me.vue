<template>
  <div class="body">
    <div>
      <header class="hd">
        <div class="user">
          <div class="wimg">
            <div class="img">
              <img src="../images/svg/footer_me1.svg" alt="">
            </div>
          </div>
          <router-link to="/login">
            <span>登录/注册</span>
          </router-link>
        </div>
      </header>
    </div>
    <mt-cell
      title="我的订单"
      to="#"
      is-link
      value="全部订单">
    </mt-cell>
    <ul class="section1">
      <li><img src="../images/svg/待付款.svg" alt=""></li>
      <li><img src="../images/svg/物流.svg" alt=""></li>
      <li><img src="../images/svg/xiuli.svg" alt=""></li>
      <li>待付款</li>
      <li>待收货</li>
      <li>退换修</li>
    </ul>
    <div>
      <mt-cell title="会员福利"
               to="#"
               is-link
               >
      <img slot="icon" src="../images/svg/VIP.svg" width="24" height="24">
    </mt-cell>
      <mt-cell title="我的福利"
               to="#"
               is-link
               >
        <img slot="icon" src="../images/svg/钱包.svg" width="24" height="24">
      </mt-cell>
      <mt-cell title="服务中心"
               to="#"
               is-link
               >
        <img slot="icon" src="../images/svg/heart.svg" width="24" height="24">
      </mt-cell>
      <mt-cell title="小米之家"
               to="#"
               is-link
               >
        <img slot="icon" src="../images/svg/shop.svg" width="24" height="24">
      </mt-cell>
      <mt-cell title="F码通道"
               to="#"
               is-link
               >
        <img slot="icon" src="../images/svg/F.svg" width="24" height="24">
      </mt-cell>
      <mt-cell title="设置"
               to="#"
               is-link
               style="margin-top: 10px;"
      >
        <img slot="icon" src="../images/svg/setting.svg" width="24" height="24">
      </mt-cell>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Me"
  }
</script>

<style scoped>
  .body{
    background-color: gainsboro;
  }
.hd{
  width: 100%;
  height: 100px;
  background-image: url("/static/img/carbg.png");
  background-size: 100%;
  background-color: rgba(255,165,0,.9);
}
.wimg{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: yellow;
  float: left;

}
.hd .user .img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #FF8533;
  text-align: center;
  position: relative;
  top: 2px;
  left: 2px;
}

.img img{
  width: 50px;
  height: 50px;
}
.hd .user{
  width: 100%;
  height: 65px;
  padding: 20px;
}
.hd a{
  text-decoration: none;
  color: white;
  float: left;
  margin-top: 25px;
  margin-left: 25px;
}
  .section1{
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    text-align: center;
    border-bottom: 1px solid rgba(0,0,0,.1);
    background-color: white;
  }
  .section1 li{
    width: 33%;
  }
  .section1 span{
    font-size: 12px;
  }
 .section1 li img{
  width: 20%;
  height: 100%;
  }
</style>
