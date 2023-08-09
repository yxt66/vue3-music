<template>
  <div
    v-if="!showPlayer"
    class="z-40 absolute top-0 left-0 w-screen h-screen bg-white"
  >
    <!-- PalyerNav -->
    <div @click="showPlayer = !showPlayer" class="my-4">
      <ion-icon name="chevron-down-outline"> </ion-icon>
    </div>
    <!-- ArtistImg --><!-- lyrics -->
    <div class="overflow-y-auto h-2/3 bg-pink-700">
      <img
        src="/public/artist/img/2.jpeg"
        class="mx-auto w-[90%] h-[50%] rounded-md object-cover"
      />
      <img
        src="/public/artist/img/2.jpeg"
        class="mx-auto w-[90%] h-[50%] rounded-md object-cover"
      />
      <img
        src="/public/artist/img/2.jpeg"
        class="mx-auto w-[90%] h-[50%] rounded-md object-cover"
      />
      <img
        src="/public/artist/img/2.jpeg"
        class="mx-auto w-[90%] h-[50%] rounded-md object-cover"
      />
    </div>
    <!-- 进度条 -->
    <div>进度条</div>
    <!-- 播放组件 -->
    <div class="flex w-full h-32 items-center justify-between gap-3 px-6">
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
      <button class="text-[#18181b] text-2xl"  >
        <!-- 左 -->
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <!-- <button>
        停止
        <ion-icon name="pause-outline"></ion-icon>
      </button> -->
      <button class=" w-16 h-16 text-5xl text-[#18181b]">
        <!-- 播放 -->
        <ion-icon name="play-outline"></ion-icon>
      </button>
      <button class="text-2xl text-[#18181b]">
        <!-- 右 -->
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <!-- <button>
        音量
        <ion-icon name="volume-low-outline"></ion-icon>
      </button> -->
      <button class="text-xl text-gray-500 ">
        <!-- 菜单 -->
        <ion-icon name="reorder-three-outline"></ion-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showPlayer = ref(false);
</script>