<template>
  <el-container>
    <el-container class="classityContent">
    <el-aside  style="width: 80px;height:100%;background-color:rgb(238, 241, 246);">
      <el-menu :default-active="active" @select="handleSelect2">
        <el-menu-item index="1">新品</el-menu-item>
        <el-menu-item index="2">手机</el-menu-item>
        <el-menu-item index="3">智能</el-menu-item>
        <el-menu-item index="4">电视</el-menu-item>
        <el-menu-item index="5">电脑</el-menu-item>
        <el-menu-item index="6">家电</el-menu-item>
        <el-menu-item index="7">路由</el-menu-item>
        <el-menu-item index="8">电源</el-menu-item>
        <el-menu-item index="9">耳机</el-menu-item>
        <el-menu-item index="10">音箱</el-menu-item>
        <el-menu-item index="11">礼品</el-menu-item>
        <el-menu-item index="12">生活</el-menu-item>
        <el-menu-item index="13">米粉卡</el-menu-item>
        <el-menu-item index="14">零售店</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main id="scrollDiv">
      <div v-for="index in datas">
        <img src="/static/img/main-5.png" alt="" style="width: 100%">
        <div>{{index}}
          <ul class="proShow-Mes">
            <li>
              <img src="/static/img/body-1.png" alt="">
            </li>
            <li>
              <img src="/static/img/body-2.png" alt="">
            </li>
            <li>
              <img src="/static/img/body-3.png" alt="">
            </li>
            <li>
              <img src="/static/img/body-4.png" alt="">
            </li>
            <li>
              <img src="/static/img/body-5.png" alt="">
            </li>
            <li>
              <img src="/static/img/body-6.png" alt="">
            </li>

        </ul>
        </div>
      </div>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "aside",
        data(){
          return {
            datas:[
              '新品',
              '手机',
              '智能',
              '电视',
              '电脑',
              '家电',
              '路由',
              '智能',
              '电源',
              '耳机',
              '音箱',
              '礼品',
              '生活',
              '米粉卡',

            ],
            scroll: '',
            scrollTop:0,
            divOffsetTop:[],
            lastTop:0,
            active:'1',
            length:0

          }
        },
      mounted(){
        this.checkDivScroolTop();
      },
      methods:{
        divTip(){
          var a = document.getElementById('scrollDiv').children;
          for(let i=0;i<a.length;i++){
            this.divOffsetTop.push(a[i].offsetTop)
          }
          this.divOffsetTop.push((2*a[a.length-1].offsetTop - a[a.length-2].offsetTop))
          this.length = this.divOffsetTop.length
          console.log(this.divOffsetTop  )
        },
        checkDivScroolTop(){
          this.divTip();

          var scrollDiv = document.getElementById('scrollDiv');
          scrollDiv.addEventListener('scroll',this.bijiao);
        },
        bijiao(){
          this.scrollTop = document.getElementById('scrollDiv').scrollTop;
          // console.log(this.scrollTop)
          for(let i=0;i<this.divOffsetTop.length;i++){
            if(this.scrollTop > this.divOffsetTop[i] && this.scrollTop < this.divOffsetTop[i+1]){
              // console.log(i+1)
              let index = i+1
              this.active =  index.toString();
            }
          }
        },
        handleSelect2(key, keyPath) {
          let a = keyPath;
          let b = a[0]-1;
          document.getElementById('scrollDiv').scrollTop=this.divOffsetTop[b];
          // console.log(b)
        }
      },
      computed:{
      }

    }
</script>

<style scoped>
  .classityContent{
    background-color: #fdfdfd;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 50px 0
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #FFF;
    color: #333;
    padding-top: 0;
    position: relative;
    text-align: center;
    line-height: 160px;
  }
  .el-main::-webkit-scrollbar {
    display: none;
  }
  .el-aside::-webkit-scrollbar {
    display: none;
  }
  .el-menu-item{
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .proShow-Mes{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .proShow-Mes li{
    width: 30%;
  }
  .proShow-Mes li img{
    width: 50px;
  }
  .proShow-Mes li p{
    width: 50px;
  }
</style>
