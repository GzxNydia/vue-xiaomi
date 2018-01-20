<template>
  <div>
    <div style="height: 0px;">
      <img src="/static/img/carbg.png" alt="" style="width: 100%;height: 1px;opacity: 0.1">
    </div>
    <header>
      <router-link to="/" slot="left">
        <mt-button icon="back" class="button"></mt-button>
      </router-link>
      <p>分类</p>
      <router-link to="/search" slot="right">
        <mt-button icon="search" class="button"></mt-button>
      </router-link>
    </header>
    <v-aside></v-aside>
  </div>

</template>

<script>
  import Aside from '../components/classity/aside'
  export default {
    name: "Classity",
    components:{
      'v-aside':Aside
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
  p{
    text-align: center;
    width: 80%;
    line-height: 60px;
  }

</style>
