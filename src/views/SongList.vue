<script setup>
import { ref } from "vue";

let songs = ref([
  { name: "Letting Go - 蔡健雅.mp3" },
  { name: "Music灰姑娘 - 梁咏琪.mp3" },
  { name: "人世间-电视剧《人世间》主题曲 - 雷佳.mp3" },
  { name: "光字片-《人世间》歌曲 - 周深.mp3" },
  { name: "如愿 - 王菲.mp3" },
  { name: "旺仔小乔 - 樱花树下的约定（完整版）.mp3" },
  { name: "是妈妈是女儿 - 黄绮珊,希林娜依高.mp3" },
  { name: "桃花诺 - G.E.M.邓紫棋.mp3" },
  { name: "等你下课(with 杨瑞代) - 周杰伦,周杰伦.mp3" },
  { name: "路过人间 - 郁可唯.mp3" },
  { name: "飘雪(Live) - 梁玉莹.mp3" },
  { name: "飞花(Live) - 李克勤,梁玉莹.mp3" },
]);
let audio = ref(null);
const playMusic = (songName) =>{
  console.log(audio)
  if(audio){
    audio.src = ''
  }
  audio = new Audio(`/vue3-music/artist/songs/${songName}`);
  audio.play()
}
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
    <div v-for="(song, index) in songs" :key="index" 
    class="
    flex items-center gap-2 text-sm md:text-base py-2 cursor-pointer
    " 
    @click="playMusic(song.name)">
      <ion-icon name="heart-outline" ></ion-icon>
      {{ song.name.replace(".mp3", "") }}
    </div>

  </div>
</template>