<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import SideBar from "./components/SideBar.vue";
import MDSideBar from "./components/MDSideBar.vue";
import Test from "./components/Test.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import MiniMusicPlayer from "./components/MiniMusicPlayer.vue";
let show = ref(false);
let musicIsPlaying = ref(false);
let audio = ref(null);
const musicPlaying = value => {
  musicIsPlaying.value = true;
  audio = value || audio;
  audio.play();
}
const musicPause = () => {
  musicIsPlaying.value = false;
  audio.pause();
}
</script>

<template >
  <div class="flex items-center justify-center h-screen w-full">
    <div
      class="relative flex w-screen h-screen md:w-[80%] md:h-[80%] md:rounded-xl md:shadow-md max-w-[1100px]"
    >
      <!-- TopNav -->
      <TopNav />
      <!-- SideBar -->
      <SideBar />
      <!-- <Test/> -->
      <RouterView
        @musicPlaying="musicPlaying"
        class="w-full h-[calc(100%-55px)] mt-[55px] pt-2 pl-2 overflow-y-auto"
      />
      <!-- 手机屏幕导航栏 -->
      <MDSideBar />
      <!-- 播放器加歌词组件 -->
      <MusicPlayer v-show="show" @showMusicPlayer="show = false" :musicPlaying="musicIsPlaying" ></MusicPlayer>
      <!-- 下方的播放器 -->
      <MiniMusicPlayer v-show="!show" @showMusicPlayer="show = !show" :musicPlaying="musicIsPlaying" @musicPause="musicPause" @msPlay="musicPlaying"></MiniMusicPlayer>
    </div>
  </div>
</template>

<style scoped>
</style>