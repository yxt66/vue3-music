
<template>
  <div
    v-if="!showPlayer"
    class="md:w-full md:h-full z-50 absolute top-0 left-0 w-screen h-screen bg-white"
  >
    <!-- PalyerDownIcon -->
    <div class="m-4">
      <ion-icon name="chevron-down-outline" @click="showPlayer = !showPlayer">
      </ion-icon>
    </div>
    <!-- ArtistImg -- and !-- lyrics -->

    <div
      class="overflow-y-auto md:overflow-y-hidden h-2/3 flex flex-col md:flex-row"
    >
      <!-- ArtistImg -->

      <div class="md:w-[50%] md:h-full w-full h-[50%] p-5">
        <img
          src="/public/artist/img/1.webp"
          width="100"
          class="md:m-10 md:w-[80%] md:h-[80%] w-[80%] h-full mx-auto rounded-lg object-cover"
        />
      </div>

      <!-- lyrics -->
      <div class="md:w-[50%] md:h-full md:overflow-y-auto text-center">
        <div v-for="(lyr, index) in lyric" :key="index">{{ lyr.span }}</div>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="px-3">
      <div class="relative">
        <input
          id="inputRange"
          class="z-50 w-full cursor-pointer opacity-0"
          type="range"
          name=""
          min="0"
          max="100"
          value="0"
          @change="modifyInputRange($event)"
          @mousedown="mouseDown($event)"
        />
        <div
          id="progressBar"
          class="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 absolute top-2 left-0"
        >
          <div
            id="dot"
            class="hi w-2 h-2 rounded-full bg-pink-500 absolute -top-1 right-0 cursor-pointer"
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
      <div class="flex justify-between text-xs text-gray-500">
        <div>00:00</div>
        <div>01:00</div>
      </div>
    </div>
    <!-- 播放组件 -->
    <div class="flex w-full h-36 items-center justify-between gap-3 px-6">
      <!-- md:屏幕大于768px的播放图片 -->
      <!-- <div>
        <img src="/public/artist/img/1.webp" alt="" class="w-14 h-14 rounded-lg">
      </div> -->

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
      <button class="text-[#18181b] text-2xl">
        <!-- 左 -->
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <!-- <button>
        停止
        <ion-icon name="pause-outline"></ion-icon>
      </button> -->
      <button class="w-16 h-16 text-5xl text-[#18181b]">
        <!-- 播放 -->
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button class="text-2xl text-[#18181b]">
        <!-- 右 -->
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <button class="hidden md:block text-xl text-gray-500">
        <!-- 音量 -->
        <ion-icon name="volume-low-outline"></ion-icon>
      </button>
      <button class="text-xl text-gray-500">
        <!-- 菜单 -->
        <ion-icon name="musical-notes-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";

const showPlayer = ref(false);
const lyric = [
  { time: "00:00.00", span: "枫 - 周杰伦 (Jay Chou)" },
  { time: "00:03.79", span: "词：弹头（宋健彰）" },
  { time: "00:07.58", span: "曲：周杰伦" },
  { time: "00:11.37", span: "编曲：钟兴民" },
  { time: "00:15.17", span: "制作人：周杰伦" },
  { time: "00:18.96", span: "乌云在我们心里搁下一块阴影" },
  { time: "00:24.55", span: "" },
  { time: "00:26.02", span: "我聆听沉寂已久的心情" },
  { time: "00:31.29", span: "" },
  { time: "00:31.95", span: "清晰透明就像美丽的风景" },
  { time: "00:38.96", span: "" },
  { time: "00:39.79", span: "总在回忆里才看的清" },
  { time: "00:44.40", span: "" },
  { time: "00:47.15", span: "被伤透的心能不能够继续爱我" },
  { time: "00:53.01", span: "" },
  { time: "00:54.23", span: "我用力牵起没温度的双手" },
  { time: "00:59.78", span: "" },
  { time: "01:00.75", span: "过往温柔已经被时间上锁" },
  { time: "01:08.07", span: "只剩挥散不去的难过" },
  { time: "01:14.22", span: "" },
  { time: "01:15.60", span: "缓缓飘落的枫叶像思念" },
  { time: "01:20.91", span: "我点燃烛火温暖岁末的秋天" },
  { time: "01:27.09", span: "" },
  { time: "01:28.02", span: "极光掠夺天边" },
  { time: "01:31.54", span: "北风掠过想你的容颜" },
  { time: "01:35.48", span: "" },
  { time: "01:35.98", span: "我把爱烧成了落叶" },
  { time: "01:39.58", span: "却换不回熟悉的那张脸" },
  { time: "01:44.06", span: "缓缓飘落的枫叶像思念" },
  { time: "01:49.42", span: "为何挽回要赶在冬天来之前" },
  { time: "01:56.24", span: "" },
  { time: "01:56.84", span: "爱你穿越时间" },
  { time: "02:00.01", span: "两行来自秋末的眼泪" },
  { time: "02:04.48", span: "让爱渗透了地面" },
  { time: "02:08.12", span: "我要的只是你在我身边" },
  { time: "02:12.92", span: "" },
  { time: "02:26.84", span: "被伤透的心能不能够继续爱我" },
  { time: "02:32.92", span: "" },
  { time: "02:33.83", span: "我用力牵起没温度的双手" },
  { time: "02:40.16", span: "过往温柔已经被时间上锁" },
  { time: "02:46.98", span: "" },
  { time: "02:47.77", span: "只剩挥散不去的难过" },
  { time: "02:52.92", span: "" },
  { time: "02:54.77", span: "在山腰间飘逸的红雨随着北风凋零" },
  { time: "03:04.59", span: "" },
  { time: "03:05.10", span: "我轻轻摇曳风铃" },
  { time: "03:09.12", span: "想唤醒被遗弃的爱情" },
  { time: "03:14.86", span: "" },
  { time: "03:15.78", span: "雪花已铺满了地" },
  { time: "03:18.41", span: "" },
  { time: "03:19.39", span: "深怕窗外枫叶已结成冰" },
  { time: "03:23.81", span: "缓缓飘落的枫叶像思念" },
  { time: "03:29.14", span: "我点燃烛火温暖岁末的秋天" },
  { time: "03:36.21", span: "极光掠夺天边" },
  { time: "03:39.71", span: "北风掠过想你的容颜" },
  { time: "03:44.16", span: "我把爱烧成了落叶" },
  { time: "03:47.89", span: "却换不回熟悉的那张脸" },
  { time: "03:52.24", span: "缓缓飘落的枫叶像思念" },
  { time: "03:57.60", span: "为何挽回要赶在冬天来之前" },
  { time: "04:04.71", span: "爱你穿越时间" },
  { time: "04:08.22", span: "两行来自秋末的眼泪" },
  { time: "04:13.33", span: "" },
  { time: "04:18.64", span: "让爱渗透了地面" },
  { time: "04:22.19", span: "我要的只是你在我身边" },
];

function modifyInputRange($event) {
  window.addEventListener('mousedown',mouseDown);
  window.addEventListener('mouseup',mouseUp)
  // console.log(document.getElementById("inputRange").value);
  document.getElementById("progressBar").style.width = `${
    document.getElementById("inputRange").value
  }%`;
}
let flag = false
function mouseDown($event){
  flag = true
  console.log($event);
  window.addEventListener('mousemove',mouseMove)
}
function mouseMove($event){
  if(flag){
    document.getElementById("progressBar").style.width = ($event.clientX-92) +'px'  
  }
}
function mouseUp($event){
  flag = false
}
</script>