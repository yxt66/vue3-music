<script setup>
import { ref } from "vue";

const showMenu = ref(false);
</script>
<template>
  <!-- nav -->
  <div
    id="TopNav"
    class="z-30 fixed border-b w-full md:w-[80%] h-[55px] max-w-[1100px] rounded-t-lg p-6 flex items-center"
  >
    <!-- logo -->
    <div class="w-full flex items-center gap-3">
      <img width="25" src="../assets/vite.svg" alt="" />
      <span class="hidden md:inline-block text-[14px]">Tao Music</span>
    </div>
    <!-- search -->
    <div
      class="hidden w-full md:flex items-center border max-w-[380px] rounded-full"
    >
      <input
        type="text"
        class="w-full pl-3 bg-transparent focus:outline-none text-[15px] fon"
        placeholder="Search..."
      />
      <div class="flex p-1">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
    <!-- nav-right -->
    <div class="w-full flex items-center justify-end gap-3">
      <div class="flex items-center">
        <button
          class="flex items-center bg-[#F02C56] text-white border rounded-md px-2 py-[5px]"
        >
          <span class="mx-4 font-medium text-[12px]">Log in</span>
        </button>
      </div>

      <div class="flex items-center">
        <div class="relative">
          <button class="mt-1" @click="showMenu = !showMenu">
            <img class="rounded-full" src="/favicon.ico" width="27" alt="" />
          </button>
          <div
            v-if="showMenu"
            class="absolute w-40 top-[47px] right-2 shadow-xl border rounded-lg p-3 bg-white"
          >
            <button class="flex items-center hover:bg-gray-100 w-full p-2">
              <ion-icon name="person-outline"></ion-icon>
              <span class="pl-2 font-semibold text-xs">Profile</span>
            </button>
            <button class="w-full flex items-center hover:bg-gray-100 p-2 ">
              <ion-icon name="log-out-outline"></ion-icon>
              <span class="pl-2 font-semibold text-xs">Log out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>