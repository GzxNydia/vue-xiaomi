<template>
    <div style="margin-top: 90px">
      <div class="proShow-two" style="height: 12rem;">
        <img src="/static/img/zhineng-top.png" alt="">
      </div>
      <div style="width: 100%;">
        <img src="/static/img/zhineng-1.png" alt="" style="width: 100%;height: 100%;">
      </div>
    </div>
</template>

<script>
    export default {
        name: "home3"
    }
</script>

<style scoped>
  .el-menu-item{
    height: 45px;
    line-height: 45px;
    padding: 0 5px;
    margin: 0 8px;
  }
  .nav .ispr.if{
    width:2rem;
    height:2rem;
    margin:2px auto;
    background-image:url(/static/svg/footer_me1.svg);
    background-size:2rem 2rem;
    overflow:hidden;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .logoFour{
    width: 100%;
    height: 5rem;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-around;
  }
  .logoFour li{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .logoFour img{
    width: 100%;
    height: 100%;
    /*height: 1.52rem;*/
  }
  .proShow{
    width: 100%;

  }
  .proShow-one,.proShow-two{
    width: 100%;
    display: flex;
  }
  .proShow-one img{
    width: 100%;
    height: 10rem;
  }
  .proShow-two img{
    width: 100%;
    height: 14rem
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
    /*border: 1px solid red;*/
    position: relative;
  }
  .proShow-one .pSo-right img{
    position: relative;
    width: 100%;
    height: 7.4rem;
  }
  .proShow-con .proShow-one .pSo-left{
    height: 10rem;
  }
  .proShow-con .proShow-one .pSo-right{
    height: 10rem;
  }
  .proShow-con .pSo-right{
    padding: 25px;
  }
  .proShow-con .pSo-right p:nth-child(2){
    color: #666666;
    font-size: 14px;
  }
  .proShow-con .pSo-right span{
    color: red;
  }
  .proShow-three{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .proShow-three li{
    width: 50%;
    /*border: 1px solid red;*/
    height: 15rem;
    padding: 2px;
    position: relative;
  }
  .proShow-three li>p:nth-child(3){
    font-size: 12px;
    color: #666666;
  }
  .proShow-three li>span{
    color: red;
  }
  .proShow-three li>.topImg{
    position: absolute;
    top:0;
    left: 0;
  }
  .proShow-three li .topImg img{
    width: 6rem;
    height: 1.5rem;
  }

  .proShow-three li>img{
    width: 100%;
    height: 10rem;
  }
  .proShow-four {
    width: 100%;
    padding: 5px;
    background-color: rgb(252, 158, 46);
  }
  .proShow-four>li{
    background-color: #fff;
    margin-top: 5px;
  }
  .proShow-four>li>div{
    display: flex;
    height: 5rem;
    width: 100%;
  }
  .proShow-four .pSf-left{
    width: 85%;
  }
  .proShow-four .pSf-right span{
    color: red;
  }
  .proShow-four .pSf-left>p{
    line-height: 2rem;
  }
  .proShow-four .pSf-left>p:nth-child(2){
    color: #666666;
    font-size: 14px;
  }
</style>
