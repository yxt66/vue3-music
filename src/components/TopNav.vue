<script setup>
import { ref } from "vue";
//黑暗模式
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
console.log(isDark.value);
const toggleDark = useToggle(isDark);
let showMenu = ref(false);
</script>
<template>
  <!-- nav -->
  <div
    id="TopNav"
    class="dark:border-none z-30 fixed border-b w-full md:w-[80%] h-[55px] max-w-[1100px] rounded-t-lg p-6 flex items-center"
  >
    <!-- logo -->
    <div class="w-full flex items-center gap-3" @click="$router.push('/home')">
      <img width="25" src="../assets/vite.svg" alt="" />
      <span class="hidden md:inline-block text-[14px]">Tao Music</span>
    </div>
    <!-- search -->
    <div
      class="hidden w-full md:flex items-center border dark:border-none max-w-[380px] rounded-full"
    >
      <input
        type="text"
        class="w-full pl-3 bg-transparent focus:outline-none text-[15px] "
        placeholder="Search..."
      />
      <div class="flex p-1">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
    <!-- nav-right -->
    <div class="w-full flex items-center justify-end gap-3">
      <!-- 黑暗模式 -->
      <div @click="toggleDark()">
        <svg
          v-if="!isDark"
          class="w-6 h-6 border-2 rounded-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            class="fill-slate-950 stroke-gray-950"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            class="stroke-gray-950"
          ></path>
        </svg>
        <svg
        v-else
          viewBox="0 0 24 24"
          fill="none"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            class="fill-sky-400/20"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            class="fill-slate-200"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            class="fill-slate-200"
          ></path>
        </svg>
      </div>
      <div class="flex items-center">
        <button
          class="flex items-center  border-none bg-gradient-to-r from-purple-500 to-pink-500 text-white border rounded-md px-2 py-[5px]"
        >
          <span class="mx-4 font-medium text-[12px]">登录</span>
        </button>
      </div>

      <div class="hidden flex items-center">
        <div class="relative">
          <button class="mt-1" @click="showMenu = !showMenu">
            <img
              class="rounded-full"
              src="/public/artist/img/1.webp"
              width="27"
              alt=""
            />
          </button>
          <div
            @mouseleave="showMenu = !showMenu"
            v-if="showMenu"
            class="absolute w-32 top-[40px] -right-6 shadow-xl border rounded-lg p-3 bg-white"
          >
            <button class="flex items-center hover:bg-gray-100 w-full p-2">
              <ion-icon name="person-outline"></ion-icon>
              <span class="pl-2 font-semibold text-xs">个人中心</span>
            </button>
            <button class="w-full flex items-center hover:bg-gray-100 p-2">
              <ion-icon name="log-out-outline"></ion-icon>
              <span class="pl-2 font-semibold text-xs">退出登录</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>