<script setup>
import {
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

import { useSongStore } from "@/stores/song.js";
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import SideBar from "./components/SideBar.vue";
import MDSideBar from "./components/MDSideBar.vue";
import Test from "./components/Test.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import MiniMusicPlayer from "./components/MiniMusicPlayer.vue";
//当组件挂载的时候给window绑定事件，让浏览器页面刷新的时候执行事件(暂停音乐)
// 页面关闭时先执行onbeforeunload，最后onunload
// 页面刷新时先执行onbeforeunload，然后onunload，最后onload。

onMounted(() => {
  useSongStore().resetMusicPaused();
  useSongStore().getSongsList();
});

let show = ref(false);
</script>

<template >
  <div
    class="dark:bg-slate-800 dark:text-white flex items-center justify-center h-screen w-full"
  >
    <div
      class="relative flex w-screen h-screen md:w-[80%] md:h-[80%] md:rounded-xl md:shadow-md max-w-[1100px]"
    >
      <!-- TopNav -->
      <TopNav />
      <!-- SideBar -->
      <SideBar />
      <!-- <Test/> -->
      <RouterView
        id="RouterView"
        class="w-full h-[calc(100%-55px)] mt-[55px] pt-2 pl-2 pb-16 overflow-y-auto"
      />
      <!-- 手机屏幕导航栏 -->
      <MDSideBar />
      <!-- 播放器加歌词组件 -->
      <MusicPlayer
        v-show="show"
        @hiddenMusicPlayer="show = false"
      ></MusicPlayer>
      <!-- 下方的播放器 -->
      <MiniMusicPlayer
        v-show="!show"
        @showMusicPlayer="show = !show"
      ></MiniMusicPlayer>
    </div>
  </div>
</template>

<style scoped>
#RouterView:hover::-webkit-scrollbar-thumb {
  background-color: gray;
}
#RouterView::-webkit-scrollbar {
  appearance: none;
  width: 4px;
}
#RouterView::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 15px;
}
</style>