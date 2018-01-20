<template>
  <div>
    <header class="loginHeader">
      <div class="loginimg">
        <div>
          <img src="/static/img/xiaomi_mi_1193422_easyicon.net.svg" alt="">
          <p>小米账号登录</p>
        </div>
      </div>
      <div v-if="change">
        <div class="inputform">
          <form action="">
            <div style="display: flex; justify-content: center" class="quhao">
              <div>
                <span>+86</span>
              </div>
              <input type="text" placeholder="手机号码">
            </div>
            <div style="display: flex; justify-content: center" class="yzm">
              <input type="text" placeholder="短信验证码">
              <div>
                <button>获取验证码</button>
              </div>
            </div>

          </form>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <el-button type="primary" round style="width: 80%">立即登录/注册</el-button>
          <el-button round style="width: 80%; margin-top: 20px" round @click="change = false">用户名和密码登录</el-button>
        </div>
      </div>
      <div v-if="!change">
        <div class="inputform">
          <form action="">
            <div style="display: flex; justify-content: center" class="quhao">
              <div>
                <span></span>
              </div>
              <input type="text" placeholder="邮箱/手机号码/邮箱ID" style="border-left: none">
            </div>
            <div style="display: flex; justify-content: center" class="yzm">
              <input type="text" placeholder="密码" style="width: 278px">
              <div>
                <button><img src="/static/img/眼睛.svg" alt="" style="width: 20px"></button>
              </div>
            </div>

          </form>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <el-button type="primary" round style="width: 80%">立即登录/注册</el-button>
          <el-button round style="width: 80%; margin-top: 20px" round @click="change = true">手机号码登录</el-button>
        </div>
      </div>
      <div style="text-align: center;margin-top: 30px">
        <p style="opacity: .5">-------------其他方式登录-------------</p>
      </div>
      <div>
        <ul class="qita">
          <li><img src="/static/img/qq.svg" alt=""></li>
          <li><img src="/static/img/weibo.svg" alt=""></li>
          <li><img src="/static/img/支付宝认证.svg" alt=""></li>
        </ul>
      </div>
      <div style="text-align: center;margin-top: 30px;opacity: .5">
        <span>简体</span>
        <span>|</span>
        <span>繁体</span>
        <span>|</span>
        <span>English</span>
        <span>|</span>
        <span>常见问题</span>
      </div>
    </header>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return {
            change:true
          }
      }
    }
</script>

<style scoped>
  .loginimg{
    text-align: center;
  }
  .loginimg img{
    margin-top: 60px;
    width: 60px;
    height: 60px;
  }
  .loginimg p{
    font-size: 20px;
  }
  .inputform{
    text-align: center;
    margin-top: 30px;
  }
  .quhao,.yzm{
    width: 100%;
    height: 40px;
  }
  .quhao div{
    width: 61px;
    line-height: 40px;
    height: 40px;
    border: 1px solid rgba(0,0,0,.2);
    border-bottom:none;
    border-right:none;
    border-top-left-radius: 20px;
  }
  .quhao input{
    width: 250px;
    border: 1px solid rgba(0,0,0,.2);
    border-bottom:none;
    /*border-left:none;*/
    border-top-right-radius: 20px;
    text-indent: 1em;
  }
  .quhao div,.yzm button{
    height: 40px;
  }
  .yzm input{
    border: 1px solid rgba(0,0,0,.2);
    border-bottom-left-radius: 20px;
    width: 231px;
    text-indent: 1em;
  }
  .yzm button{
    /*outline: none;*/
    border: none;
    border-top: 1px solid rgba(0,0,0,.2);
    border-right: 1px solid rgba(0,0,0,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
    border-bottom-right-radius: 20px;
    background-color: white;

  }
  .qita{
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .qita li img{
    width: 60px;
    padding: 0 10px;
  }
</style>
