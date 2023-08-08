<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import SideBar from "./components/SideBar.vue";
import MDSideBar from "./components/MDSideBar.vue";
import Test from "./components/Test.vue";
</script>

<template >
  <div class="flex items-center justify-center h-screen w-full">
    <div class=" relative flex w-[80%] max-w-[1100px] h-[80%] rounded-xl shadow-md">
      <!-- TopNav -->
      <TopNav />
      <!-- SideBar -->
      <SideBar />
      <!-- <Test/> -->
      <RouterView
        class="w-full h-[calc(100%-55px)] mt-[55px] pt-2 pl-2 overflow-y-auto"
      />
      <!-- 手机屏幕导航栏 -->
      <MDSideBar class="md:hidden  "/>
    </div>
  </div>
</template>

<style scoped>
</style>