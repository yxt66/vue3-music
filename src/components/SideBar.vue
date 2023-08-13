
<template>
  <div
    id="SideNav"
    class=" dark:bg-slate-900 hidden md:block min-w-[20%] w-[20%] rounded-bl-xl h-full bg-[#f1f5f9] overflow-auto "
  >
    <div class="w-full mx-auto mt-[55px]">
      <MenuItem iconString="首页" name="Home" pageUrl="/home" />
      <MenuItem
        iconString="我的歌单"
        name="SongList"
        pageUrl="/songlist"
      />
      <MenuItem
        iconString="我喜欢"
        name="Favourite"
        pageUrl="/favourite"
      />
      <MenuItem
        iconString="最近播放"
        name="History"
        pageUrl="/history"
      />
    </div>
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
</script>