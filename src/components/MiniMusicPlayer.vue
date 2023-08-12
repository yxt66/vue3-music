<script setup>
import { toRefs ,ref} from "vue";

const props = defineProps({
  musicPlaying: Boolean,
});

const { musicPlaying } = toRefs(props); //props变则musicPlaying变

const emit = defineEmits(["showMusicPlayer", "musicPause", "msPlay"]);

const showMusicPlayer = () => {
  emit("showMusicPlayer");
};
const musicPause = () => {
  emit("musicPause");
};
const msPlay = () => {
  emit("msPlay");
};

const changeSlider = () =>{
  const Slider = document.querySelector('#Slider');
  const SliderValueBox = document.querySelector('#SliderValueBox');
  SliderValueBox.style.width = `${Slider.value}%`
}
let showSlider = ref(false)
</script>
<template>
  <!--  -->
  <div
    id="MiniMusicPlayer"
    class="z-50 absolute right-0 bottom-[68px] md:bottom-0 md:right-0 md:w-[80%] w-full p-2 bg-white"
  >
    <!-- 进度条 -->
    <div class="mb-1">
      <div class="relative" >
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

      <button class="w-5 h-5 text-lg text-gray-500">
        <!-- 随机 -->
        <ion-icon name="shuffle-outline" class="w-full h-full"></ion-icon>
      </button>
      <!-- <button>
        单曲
        <ion-icon name="bicycle-outline"></ion-icon>
      </button>
      <button>
        顺序
        <ion-icon name="repeat-outline"></ion-icon>
      </button> -->
      <button class="w-5 h-5 text-[#18181b] text-xl">
        <!-- 左 -->
        <ion-icon name="chevron-back-outline" class="w-full h-full"></ion-icon>
      </button>
      <button
        v-if="musicPlaying"
        class="w-10 h-10 text-xl text-[#18181b]"
        @click="musicPause"
      >
        <ion-icon name="pause-outline" class="w-full h-full"></ion-icon>
      </button>
      <button v-else class="w-10 h-10 text-xl text-[#18181b]" @click="msPlay">
        <!-- 播放 -->
        <ion-icon name="play-outline" class="w-full h-full"></ion-icon>
      </button>
      <button class="w-5 h-5 text-xl text-[#18181b]">
        <!-- 右 -->
        <ion-icon
          name="chevron-forward-outline"
          class="w-full h-full"
        ></ion-icon>
      </button>
      <!-- <button class="hidden md:block text-lg text-gray-500">
        音量 
        <ion-icon name="volume-low-outline"></ion-icon>
      </button> -->

      <!-- 音量组件 -->
      <div class="w-5 h-5 relative ">
        <div
          v-if="showSlider"
          class=" z-50 absolute h-[4px] hover:h-[8px] hover:block transition-all w-28 -top-4 left-3 origin-bottom-left -rotate-90 rounded-lg bg-gray-200"
        >
          <div
            id="SliderValueBox"
            class="w-[20%] h-full bg-gradient-to-r from-purple-300 to-pink-400 rounded-lg "
          ></div>
          <input
            @blur="showSlider = false"
            id="Slider"
            type="range"
            name=""
            class=" absolute top-0 left-0 appearance-none w-full h-full  bg-transparent rounded-lg"
            min="0"
            max="100"
            value="20"
            @touchmove="changeSlider"
            @change="changeSlider"
            @mousemove="changeSlider"
          />
          <!--
            @touchstart="changeSlider"
            @touchsend="changeSlider" 
          -->
        </div>
        <svg
          
          @click="showSlider = !showSlider"
          class="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
              fill="currentColor"
              data-original="#000000"
            ></path>
            <path
              d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z"
              fill="currentColor"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      </div>
      <button class="w-5 h-5 text-lg text-gray-500">
        <!-- 菜单 -->
        <ion-icon name="menu-outline" class="w-full h-full"></ion-icon>
      </button>
    </div>
  </div>

  <!-- --- -->
</template>
<style scoped>
#Slider::-webkit-slider-thumb {
  appearance: none;
  width: 0;
  height: 0;
  /* cursor: pointer; */
}
</style>