<template>
  <div
    v-if="!showPlayer"
    class="md:w-full md:h-full z-40 absolute top-0 left-0 w-screen h-screen bg-white"
  >
    <!-- PalyerNav -->
    <div @click="showPlayer = !showPlayer" class="m-4">
      <ion-icon name="chevron-down-outline"> </ion-icon>
    </div>
    <!-- ArtistImg --><!-- lyrics -->

    <div class="overflow-y-auto md:overflow-y-hidden h-2/3 flex flex-col md:flex-row ">
      <!-- ArtistImg -->

      <div class="md:w-[50%] md:h-full 
      w-full h-[50%] p-5
      ">
        <img
          src="/public/artist/img/2.jpeg"
          width="100"
          class=" md:m-10 md:w-[80%]  md:h-[80%] 
          w-[80%]  h-full mx-auto
          rounded-lg object-cover
          "
        />
      </div>

      <!-- lyrics -->
      <div class="md:w-[50%] md:h-full   md:overflow-y-auto">
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>
        <div>枫-周杰伦</div>

      </div>

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
import { ref } from "vue";

const showPlayer = ref(false);
</script>