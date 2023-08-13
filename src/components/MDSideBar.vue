
<template>
    <div
      id="MDSideNav"
      class="dark:bg-slate-900 dark:text-white absolute md:hidden bottom-0 left-0  w-full rounded-xl  bg-[#ffffff] "
    >
      <div class="flex justify-between mx-auto p-2">
        <MDMenuItem  iconString="首页" name="Home" pageUrl="/home" />
        <MDMenuItem
          iconString="我的歌单"
          name="SongList"
          pageUrl="/songlist"
        />
        <MDMenuItem
          iconString="我喜欢"
          name="Favourite"
          pageUrl="/favourite"
        />
        <MDMenuItem
          iconString="最近播放"
          name="History"
          pageUrl="/history"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import MDMenuItem from "./MDMenuItem.vue";
  </script>