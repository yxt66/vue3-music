<script setup>
import { ref } from "vue";
import { useSongStore } from "@/stores/song.js";

const songStore = useSongStore();

// let audio = ref(null);
// let selectSongIndex = ref(-1);

// const emits = defineEmits(["musicPlaying"]);

// const playMusic = (song, index) => {
//   selectSongIndex.value = index;
//   if (audio) {
//     audio.src = "";
//   }
//   audio = new Audio(`/vue3-music/artist/songs/${song.name}`);

//   emits("musicPlaying", audio); //通知组件开始播放音乐
// };
</script>
<template>
  <div>
    <div class="flex gap-2">
      <img
        class="shrink-0 sm:w-40 sm:h-40 w-32 h-32 object-cover rounded-full"
        src="/public/artist/img/2.jpeg"
        alt=""
      />

      <div class="flex flex-col justify-between h-40 overflow-hidden">
        <div class="text-2xl font-bold">G.E.M邓紫棋</div>
        <div class="text-xs text-gray-500 leading-normal mt-2">
          邓紫棋，又名G.E.M.，原名邓诗颖，是一名香港创作女歌手。2008年7月10日，以16岁之龄出道，
          <!-- 取得香港三大乐坛颁奖礼新人金奖。2012年，发行专辑《Xposed》
            并夺得香港IFPI成为全年最高销量香港女歌手，凭借《Xposed》
            于2013年入围第24届金曲奖最佳女歌手，
            成为入围金曲歌后最年轻的女歌手... -->
        </div>
        <button
          class="flex justify-center items-center gap-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-white"
        >
          <ion-icon name="play-outline"></ion-icon>
          <span class="shrink-0 text-sm">播放全部</span>
        </button>
      </div>
    </div>
    <!-- songlist -->
    <div
      class="flex p-3 justify-between w-full text-xs md:text-sm text-gray-500"
    >
      <div>歌曲</div>
      <div>歌手</div>
      <div>专辑</div>
    </div>
    <div
      v-for="(song, index) in songStore.songsList"
      :key="index"
      class="flex items-center gap-2 text-sm py-2 cursor-pointer text-[#18181b]"
      @click="songStore.initAudio(song, index)"
    >
      <!-- <ion-icon
        name="heart-outline"
        :class="song.favourite ? 'text-[#F02C56]' : ''"
        class="text-xl"
        @click.stop="songStore.addLoveSong(song,index)"
      ></ion-icon> -->
      <div
        :class="song.favourite ? 'fill-[#F02C56]' : ''"
        @click.stop="songStore.addLoveSong(song, index)"
      >
        <svg
          class="w-5 h-5"
          v-if="!song.favourite"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
          ></path>
        </svg>
        <svg
          v-else
          class="w-5 h-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
          ></path>
        </svg>
      </div>

      <span :class="index === songStore.music.musicIndex ? 'text-[#F02C56]' : ''">
        {{ song.name.replace(".mp3", "") }}
      </span>
    </div>

  </div>
</template>