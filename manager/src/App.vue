<template>
  <div id="app">
    <MyHeader></MyHeader>
    <SideBar></SideBar>
    <PageBoard></PageBoard>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import SideBar from "@/components/SideBar";
import PageBoard from "@/components/PageBoard";

export default {
  name:"App",
  components:{
    MyHeader,
    SideBar,
    PageBoard,
  },
}
</script>


<style lang="scss">
  #app{
    height: 100%;
  }
</style>
