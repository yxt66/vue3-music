<script setup>
import { toRefs, ref } from "vue";
import { useSongStore } from "@/stores/song.js";

const changevolumeSlider = (event) => {
  const volumeSlider = document.querySelector("#volumeSlider");
  // const SliderValueBox = document.querySelector("#SliderValueBox");
  useSongStore().music.volume = volumeSlider.value;
  useSongStore().music.audio.volume = volumeSlider.value / 100;
  console.log(useSongStore().music.audio.volume, volumeSlider.value);
};
//
let showSlider = ref(false);
const emit = defineEmits(["showMusicPlayer"]);

//播放下一首歌
const playNextMusic = () => {
  useSongStore().playNextMusic();
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
};
</script>
<template>
  <!--  -->
  <div
    id="MiniMusicPlayer"
    class="dark:bg-slate-800 z-50 absolute right-0 bottom-[68px] md:bottom-0 md:right-0 md:w-[80%] w-full p-2 bg-white"
  >
    <!-- 进度条 -->
    <Slider class="ml-0.5 mb-1" />
    <!-- 播放组件 -->
    <div class="flex w-full items-center h-8">
      <!-- 当屏幕大于768px显示 -->
      <div class="basis-1/3 max-w-[35%] relative flex items-center">
        <img
          src="/public/artist/img/1.webp"
          alt=""
          class="w-10 h-10 rounded-md p-0.5"
          @click="emit('showMusicPlayer')"
        />
        <div class="h-10 overflow-hidden">
          <!-- 歌名和爱心 -->
          <div class="h-1/2 w-full text-xs text-gray-400 truncate">
            {{
              useSongStore().music.musicName
                ? useSongStore().music.musicName.replace(".mp3", "")
                : ""
            }}
          </div>
          <div class="h-1/2 w-full">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div class="basis-1/3 flex items-center h-full justify-between">
        <!-- 随机播放按钮 -->
        <button class="hidden w-5 h-5 text-lg">
          <svg
            t="1691895082624"
            class="icon w-full h-full"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4585"
          >
            <path
              d="M914.2 705L796.4 596.8c-8.7-8-22.7-1.8-22.7 10V688c-69.5-1.8-134-39.7-169.3-99.8l-45.1-77 47-80.2c34.9-59.6 98.6-97.4 167.4-99.8v60.1c0 11.8 14 17.9 22.7 10l117.8-108.1c5.8-5.4 5.8-14.6 0-19.9L796.4 165c-8.7-8-22.7-1.8-22.7 10v76H758c-4.7 0-9.3 0.8-13.5 2.3-36.5 4.7-72 16.6-104.1 35-42.6 24.4-78.3 59.8-103.1 102.2L513 432l-24.3-41.5c-24.8-42.4-60.5-77.7-103.1-102.2C343 263.9 294.5 251 245.3 251H105c-22.1 0-40 17.9-40 40s17.9 40 40 40h140.3c71.4 0 138.3 38.3 174.4 99.9l47 80.2-45.1 77c-36.2 61.7-103 99.9-174.4 99.9H105c-22.1 0-40 17.9-40 40s17.9 40 40 40l142 0.1h0.2c49.1 0 97.6-12.9 140.2-37.3 42.7-24.4 78.3-59.8 103.2-102.2l22.4-38.3 22.4 38.3c24.8 42.4 60.5 77.8 103.2 102.2 33.1 18.9 69.6 30.9 107.3 35.4 3.8 1.2 7.8 1.8 11.9 1.8l15.9 0.1v55c0 11.8 14 17.9 22.7 10L914.2 725c5.9-5.5 5.9-14.7 0-20z"
              p-id="4586"
              fill="#707070"
            ></path>
          </svg>
        </button>

        <!-- 顺序播放按钮 -->
        <button class="w-5 h-5">
          <svg
            t="1691894797861"
            class="dark:fill-white h-4 w-4 fill-[#707070]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3369"
          >
            <path
              d="M725.333333 170.666667V88.234667a21.333333 21.333333 0 0 1 34.986667-16.426667l175.786667 146.474667a21.333333 21.333333 0 0 1-13.696 37.717333H85.333333V170.666667h640zM85.333333 768h853.333334v85.333333H85.333333v-85.333333z m0-298.666667h853.333334v85.333334H85.333333v-85.333334z"
              p-id="3370"
              fill="#707070"
            ></path>
          </svg>
        </button>
        <!-- 单曲循环按钮 -->
        <button class="hidden w-5 h-5">
          <svg
            t="1691895209290"
            class="dark:fill-white h-full w-full fill-[#707070]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6761"
            width="64"
            height="64"
          >
            <path
              d="M545.3 630.5c-11 0-20-9-20-20V405.9c0-11 9-20 20-20s20 9 20 20v204.6c0 11-9 20-20 20z"
              p-id="6762"
              fill="#707070"
            ></path>
            <path
              d="M478.5 491.2c-5.1 0-10.2-2-14.1-5.9-7.8-7.8-7.8-20.5 0-28.3l67.1-67.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-67.1 67.1c-4 4-9.1 5.9-14.2 5.9z"
              p-id="6763"
            ></path>
            <path
              d="M169.6 791c-5.7 0-11.4-2.4-15.3-7.1-27.4-32.6-48.8-69.2-63.5-109-15.3-41.1-23-84.4-23-128.7 0-49.9 9.8-98.3 29-143.8 18.6-44 45.2-83.5 79.2-117.4 33.9-33.9 73.4-60.6 117.4-79.2 45.6-19.3 93.9-29 143.8-29h274c11 0 20 9 20 20s-9 20-20 20h-274c-181.7 0-329.5 147.8-329.5 329.5 0 77.5 27.4 152.7 77.2 211.9 7.1 8.5 6 21.1-2.4 28.2-3.8 3-8.4 4.6-12.9 4.6z"
              p-id="6764"
              fill="#707070"
            ></path>
            <path
              d="M712.7 215.5c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-4 3.9-9.1 5.9-14.2 5.9z"
              p-id="6765"
              fill="#707070"
            ></path>
            <path
              d="M586.9 847.3h-274c-11 0-20-9-20-20s9-20 20-20h274c181.7 0 329.5-147.8 329.5-329.5 0-77.5-27.4-152.7-77.2-211.9-7.1-8.5-6-21.1 2.4-28.2 8.5-7.1 21.1-6 28.2 2.4 27.4 32.6 48.8 69.2 63.5 109 15.3 41.1 23 84.4 23 128.7 0 49.9-9.8 98.3-29 143.8-18.6 44-45.2 83.5-79.2 117.4s-73.4 60.6-117.4 79.2c-45.6 19.3-94 29.1-143.8 29.1z"
              p-id="6766"
              fill="#707070"
            ></path>
            <path
              d="M378.4 915.6c-5.1 0-10.2-2-14.1-5.9l-67.1-67.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l67.1 67.1c7.8 7.8 7.8 20.5 0 28.3-3.9 4-9.1 5.9-14.2 5.9z"
              p-id="6767"
              fill="#707070"
            ></path>
          </svg>
        </button>
        <!--上一首-->
        <button class="w-5 h-5" @click="playPreviousMusic">
          <svg
            t="1691896362703"
            class="dark:fill-white h-full w-full fill-[#707070]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="9253"
          >
            <path
              d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z"
              p-id="9254"
            ></path>
          </svg>
        </button>
        <button
          v-if="!useSongStore().music.musicPaused"
          class="w-10 h-10 text-xl text-[#18181b]"
          @click="useSongStore().initAudio()"
        >
          <ion-icon name="pause-outline" class="w-full h-full"></ion-icon>
        </button>
        <button
          v-else
          class="dark:text-white w-10 h-10 text-xl text-[#18181b]"
          @click="useSongStore().initAudio()"
        >
          <ion-icon name="play-outline" class="w-full h-full"></ion-icon>
        </button>
        <!-- 下一首 -->
        <button class="w-5 h-5" @click="playNextMusic">
          <svg
            t="1691896338766"
            class="dark:fill-white h-full w-full fill-[#707070]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8221"
          >
            <path
              d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z"
              p-id="8222"
            ></path>
          </svg>
        </button>

        <!-- 音量组件 -->

        <div class="hidden md:block w-5 h-5 relative">
          <div
            v-if="showSlider"
            class="z-50 absolute h-[4px] hover:h-[8px] hover:block transition-all w-28 -top-4 left-3 origin-bottom-left -rotate-90 rounded-lg bg-gray-200"
          >
            <div
              id="SliderValueBox"
              :style="`width:${useSongStore().music.volume}%`"
              class="w-0 h-full bg-gradient-to-r from-purple-300 to-pink-400 rounded-lg"
            ></div>
            <input
              @blur="showSlider = false"
              id="volumeSlider"
              type="range"
              class="absolute top-0 left-0 appearance-none w-full h-full bg-transparent rounded-lg"
              min="0"
              max="100"
              :value="useSongStore().music.volume"
              @change="changevolumeSlider"
              @mousemove="changevolumeSlider"
            />
          </div>
          <!--  @mousemove="changevolumeSlider" -->
          <svg
            @click="showSlider = !showSlider"
            class="dark:text-white w-full h-full text-gray-500"
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
      </div>

      <div
        class="dark:text-white basis-1/3 h-full text-lg text-gray-500 flex items-center justify-end"
      >
        <!-- 菜单 -->

        <svg
          t="1691894208486"
          class="w-5 f-5"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1474"
        >
          <path
            d="M384 802.133333A122.026667 122.026667 0 0 1 256 896a118.613333 118.613333 0 0 1-128-106.666667A118.613333 118.613333 0 0 1 256 682.666667a151.04 151.04 0 0 1 42.666667 5.973333V253.013333a49.92 49.92 0 0 1 33.706666-47.786666l245.333334-75.093334A48.213333 48.213333 0 0 1 640 177.92v75.093333A51.626667 51.626667 0 0 1 597.333333 298.666667q-42.666667 9.813333-213.333333 42.666666v450.133334a58.453333 58.453333 0 0 1 0 10.666666z"
            p-id="1475"
            fill="#515151"
          ></path>
          <path
            d="M682.666667 384h170.666666a42.666667 42.666667 0 0 1 0 85.333333h-170.666666a42.666667 42.666667 0 0 1 0-85.333333z m-85.333334 170.666667h256a42.666667 42.666667 0 0 1 0 85.333333h-256a42.666667 42.666667 0 0 1 0-85.333333z m0 170.666666h256a42.666667 42.666667 0 0 1 0 85.333334h-256a42.666667 42.666667 0 0 1 0-85.333334z"
            opacity=".3"
            p-id="1476"
            fill="#515151"
          ></path>
        </svg>
      </div>
    </div>
  </div>

  <!-- --- -->
</template>
<style scoped>
#volumeSlider::-webkit-slider-thumb {
  appearance: none;
  width: 0px;
  height: 0px;
}
</style>