<template>
  <div class="box">
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img v-bind:src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        imgUrl:{
          img1:'/static/img/lunbo1.jpg',
          img2:'/static/img/lunbo2.jpg',
          img3:'/static/img/lunbo3.jpg',
          img4:'/static/img/lunbo4.jpg'
        }
      }
    }
  }
</script>
<style scoped>
  .box{
    height: 207px;
    width: 100%;
  }
  img{
    height: 100%;
    width: 100%;
  }
</style>
