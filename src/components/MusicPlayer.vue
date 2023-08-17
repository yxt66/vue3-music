
<template>
  <div
    class="dark:text-white dark:bg-slate-800 md:w-full md:h-full z-50 absolute top-0 left-0 w-screen h-screen bg-white"
  >
    <!-- PalyerDownIcon -->
    <div class="m-4 ">
      <ion-icon name="chevron-down-outline" @click="emit('hiddenMusicPlayer')" class="hover:text-[#F02C56]">
      </ion-icon>
    </div>
    <!-- ArtistImg -- and !-- lyrics -->

    <div
      class="overflow-y-auto md:overflow-y-hidden h-2/3 flex flex-col md:flex-row"
    >
      <!-- ArtistImg -->

      <div class="md:w-[50%] md:h-full w-full h-[50%] p-5">
        <img
          :src="lyrics[useSongStore().music.musicIndex].musicImg"
          width="100"
          class="md:m-10 md:w-[80%] md:h-[80%] w-[80%] h-full mx-auto rounded-lg object-cover"
        />
      </div>

      <!-- lyrics -->
      <div class="md:w-[50%] md:h-full md:overflow-y-auto text-center">
        <div v-for="(item, index) in lyrics[useSongStore().music.musicIndex].lyric" :key="index">{{ item.word }}</div>
      </div>
    </div>


    <!--  -->
    <!-- 进度条 -->
    <Slider class="p-2"/>
    <!-- 播放组件 -->
    <div class="dark:text-white dark:bg-slate-800 bg-gradient-to-b from-white to-[#ddd6fe] flex w-full h-36 items-center justify-between gap-3 px-6">

      <button class="text-xl text-gray-500">
        <!-- 随机 -->
        <ion-icon name="shuffle-outline"></ion-icon>
      </button>
      <!-- <button>
        单曲
        <ion-icon name="bicycle-outline"></ion-icon>
      </button>
      <button>
        顺序
        <ion-icon name="repeat-outline"></ion-icon>
      </button> -->
      <button class="text-[#18181b] text-2xl"  @click="playPreviousMusic">
        <!-- 左 -->
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button 
      @click="useSongStore().initAudio()"
      v-if="!useSongStore().music.musicPaused" class="w-16 h-16 text-4xl text-[#18181b] "
>
        <ion-icon name="pause-outline"></ion-icon>
      </button>
      <button 
      @click="useSongStore().initAudio()"
      v-else class=" w-16 h-16 text-4xl text-[#18181b] ">
        <!-- 播放 -->
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button class="text-2xl text-[#18181b]" @click="playNextMusic">
        <!-- 右 -->
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <!-- 音量
      <button class="hidden md:block text-xl text-gray-500">
        <ion-icon name="volume-low-outline"></ion-icon>
      </button> 
      -->
      <button class="text-xl text-gray-500">
        <!-- 菜单 -->
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
    <!-- --- -->

    
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { useSongStore } from "@/stores/song.js";
//导入歌词
import lyrics from '../../public/artist/songs/lyric.json'
console.log(lyrics)
// const props = defineProps({
//   musicPlaying:Boolean
// });
const emit = defineEmits(['hiddenMusicPlayer']);

//播放下一首歌
const playNextMusic = () => {
  let tempIndex = null;
  let musicListLength = useSongStore().songsList.length;
  let musicIndex = useSongStore().music.musicIndex;
  if (musicIndex + 1 >= musicListLength) {
    tempIndex = 0;
  } else {
    tempIndex = musicIndex + 1;
  }
  useSongStore().audioHook(useSongStore().songsList[tempIndex].name, tempIndex);
};
//播放上一首歌
const playPreviousMusic = () => {
  let tempIndex = null;
  let musicListLength = useSongStore().songsList.length;
  let musicIndex = useSongStore().music.musicIndex;
  if (musicIndex - 1 < 0) {
    tempIndex = musicListLength - 1;
  } else {
    tempIndex = musicIndex - 1;
  }
  useSongStore().audioHook(useSongStore().songsList[tempIndex].name, tempIndex);
}
</script>

<style scoped>

</style>