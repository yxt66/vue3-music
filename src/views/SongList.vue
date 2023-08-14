<script setup>
import { ref } from "vue";
import { useSongStore } from "@/stores/song.js";

const songStore = useSongStore();
let searchValue = '';

let songsList = ref(null);
function search() {
  if(!searchValue) {
    songsList.value = [...useSongStore().songsList]
  }
  if(!searchValue.trim().toLocaleLowerCase()) return;
  let copySongsList = [];
  copySongsList= [...useSongStore().songsList];
  const searchRes = copySongsList.filter(item => {
    return  item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())
  });
  songsList.value = searchRes;
}
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

      <div class="flex flex-col justify-between h-40 w-full overflow-hidden">
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
    <!-- search -->
    <div class="flex justify-between">
      <div></div>
      <div class="relative flex items-center p-2 mt-4 rounded-full overflow-hidden">
        <div

          class="animate-[wiggle_8s_linear_infinite]
          absolute w-44 h-44 left-0 bg-gradient-to-r from-purple-50 to-pink-500"
        ></div>
        <div
          class="absolute inset-0.5 rounded-full bg-white dark:bg-slate-600"
        ></div>
        <input
          type="text"
          v-model="searchValue"
          @keyup="search"
          class="z-10 w-5 h-5 focus:w-40 text-transparent focus:text-black outline-none border-none placeholder:text-transparent focus:placeholder:text-sm focus:placeholder:text-gray-500 dark:focus:placeholder:text-white bg-transparent transition-all duration-300 ease-in-out "
          placeholder="搜索歌曲"
        />
        <svg
          class="z-0 absolute right-1.5 w-6 h-6 dark:fill-black fill-pink-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            id="SVGRepo_tracerCarrier"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill=""
              d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <!-- songlist -->
    <div
      class="flex p-3 justify-between w-full text-xs md:text-sm text-gray-500 dark:text-white"
    >
      <div>歌曲</div>
      <div>歌手</div>
      <div>专辑</div>
    </div>
    <div
      v-for="(song, index) in  songsList||songStore.songsList"
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
          class="w-5 h-5 dark:fill-white"
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

      <span
        class="dark:text-white"
        :class="index === songStore.music.musicIndex ? 'text-[#F02C56]' : ''"
      >
        {{ song.name.replace(".mp3", "") }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>