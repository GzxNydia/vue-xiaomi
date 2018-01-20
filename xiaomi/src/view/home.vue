<template>
  <div class="index">
    <v-header></v-header>
    <v-swipe></v-swipe>
    <v-section1></v-section1>
    <v-section2></v-section2>
    <v-baseline></v-baseline>

  </div>

</template>

<script>
    import Header from '../components/home/header'
    import Swipe from '../components/home/swipe'
    import Section1 from '../components/home/section1'
    import Section2 from '../components/home/section2'
    import baseLine from '../components/home/baseline'
    export default {
      name: "Home",
      components:{
        'v-header':Header,
        'v-swipe':Swipe,
        'v-section1':Section1,
        'v-section2':Section2,
        'v-baseline':baseLine,

      }
    }
</script>

<style scoped>
  .index {
    width: 100%;
    padding-bottom: 14vw;
    padding-top: 88px;
  }
</style>
