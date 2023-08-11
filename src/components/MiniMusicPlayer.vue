<script setup>
import { toRefs } from "vue";

const props = defineProps({
  musicPlaying: Boolean,
});

const { musicPlaying } = toRefs(props); //props变则musicPlaying变

const emit = defineEmits(["showMusicPlayer","musicPause",'msPlay']);

const showMusicPlayer = () => {
  emit("showMusicPlayer");
};
const musicPause = () => {
  emit('musicPause')
}
const msPlay = () => {
  emit('msPlay')
}
</script>
<template>
  <!--  -->
  <div
    id="MiniMusicPlayer"
    class="z-50 absolute right-0 bottom-[68px] md:bottom-0 md:right-0 md:w-[80%] w-full p-2 bg-white"
  >
    <!-- 进度条 -->
    <div class="mb-1">
      <div class="relative">
        <input
          id="inputRange"
          class="z-50 w-full cursor-pointer opacity-0"
          type="range"
          name=""
          min="0"
          max="100"
          value="20"
        />
        <div
          id="progressBar"
          class="h-0.5 bg-gradient-to-r w-10 from-purple-500 to-pink-500 absolute top-2 left-0"
        >
          <div
            id="dot"
            class="w-2 h-2 rounded-full bg-pink-500 absolute -top-1 right-0 cursor-pointer"
          ></div>
        </div>
        <!-- 
                  @touchstart="test1($event)"
        @touchsend="test2($event)"
        @mousemove="modifyInputRange($event)"
        @mousedown="modifyInputRange($event)" 
                @change="modifyInputRange($event)"
         -->
      </div>
      <!-- <div class="flex justify-between text-xs text-gray-500">
        <div>00:00</div>
        <div>01:00</div>
      </div> -->
    </div>
    <!-- 播放组件 -->
    <div class="flex w-full items-center justify-between gap-2 h-8">
      <!-- 当屏幕大于768px显示 -->
      <div class="flex items-center justify-center" @click="showMusicPlayer">
        <img
          src="/public/artist/img/1.webp"
          alt=""
          class="w-10 h-10 rounded-md p-0.5"
        />
        <div>
          <!-- 歌名和爱心 -->
          <div class="text-xs text-gray-400">枫-周几轮</div>
          <div>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
        </div>
      </div>

      <button class="text-lg text-gray-500">
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
      <button class="text-[#18181b] text-xl">
        <!-- 左 -->
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button
        v-if="musicPlaying"
        class="w-16 h-16 text-3xl text-[#18181b]"
        @click="musicPause"
      >
        <ion-icon name="pause-outline"></ion-icon>
      </button>
      <button
        v-else
        class="w-16 h-16 text-3xl text-[#18181b]"
        @click="msPlay"
      >
        <!-- 播放 -->
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button class="text-xl text-[#18181b]">
        <!-- 右 -->
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <button class="hidden md:block text-lg text-gray-500">
        <!-- 音量 -->
        <ion-icon name="volume-low-outline"></ion-icon>
      </button>
      <button class="text-lg text-gray-500">
        <!-- 菜单 -->
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  </div>

  <!-- --- -->
</template>