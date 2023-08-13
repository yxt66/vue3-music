<template>
  <div class="w-full h-auto">
    <div class="relative w-full h-0.5  rounded-lg bg-slate-200">
      <div
        id="progressSliderBox"
        class="w-0 h-0.5  rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
      ></div>
      <input
        id="progressSlider"
        type="range"
        min="0"
        max="100"
        value="0"
        class="absolute left-0 top-0 w-full h-0.5 appearance-none bg-transparent rounded-lg"
        @change="changeprogressSlider"
      />
      <!--
        change只有input有
        @mousedown -- @touchstart
        @mouseup 鼠标抬起 @touchend
        @mousemove="changeprogressSlider"
        @touchmove="changeprogressSlider"
       -->
    </div>
    <div class="flex justify-between text-xs text-gray-400">
      <div>
        {{ useSongStore().music.startMin }}:{{ useSongStore().music.startSec }}
      </div>
      <div>
        {{ useSongStore().music.endMin }}:{{ useSongStore().music.endSec }}
      </div>
    </div>
  </div>
</template>

<script setup >
import { useSongStore } from "@/stores/song.js";

const changeprogressSlider = (event) => {
  // event.preventDefault(); 会使滑动块无法拖动 也就无法动态后去input的value值
  console.log(event.currentTarget.value);
  //修改歌曲进度
  useSongStore().updateProgress(event.currentTarget.value);
};
</script>

<style scoped>

/* 兼容性
#Slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
} */
#volumeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  width: 0px;
  height: 0px;
}
#progressSlider:hover::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  width: 7px;
  height: 7px;
  background-color: #e879f9;
  border-radius: 100%;
  transition: all 0.1s;
}
#progressSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  width: 0px;
  height: 0px;
  background-color: #e879f9;
  border-radius: 100%;
  transition: all 0.1s;
}
</style>