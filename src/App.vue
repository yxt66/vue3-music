<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import SideBar from "./components/SideBar.vue";
import MDSideBar from "./components/MDSideBar.vue";
import Test from "./components/Test.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
</script>

<template >
  <div class="flex items-center justify-center h-screen w-full">
    <div class="relative flex w-screen h-screen md:w-[80%] md:h-[80%] md:rounded-xl md:shadow-md max-w-[1100px] ">
      <!-- TopNav -->
      <TopNav />
      <!-- SideBar -->
      <SideBar />
      <!-- <Test/> -->
      <RouterView
        class="w-full h-[calc(100%-55px)] mt-[55px] pt-2 pl-2 overflow-y-auto"
      />
      <!-- 手机屏幕导航栏 -->
      <MDSideBar />
      <MusicPlayer ></MusicPlayer>
    </div>
    
  </div>
</template>

<style scoped>
</style>