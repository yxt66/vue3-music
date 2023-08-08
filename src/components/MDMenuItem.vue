<script setup>
import { toRefs, ref } from "vue";



const props = defineProps({
  iconString: String,
  pageUrl: String,
  name: String,
});
const { iconString, pageUrl, name } = toRefs(props);
let icon = ref("");

if (iconString.value === "首页") {
    icon.value = "home-outline";
}
if (iconString.value === "我的歌单") icon.value = "musical-note-outline";
if (iconString.value === "我喜欢") icon.value = "heart-outline";
if (iconString.value === "最近播放") icon.value = "cloud-done-outline";


</script>
<template>
  <div
    id="MenuItem"
    class="p-2"
    @click="$router.push(`${pageUrl}`)"
  >
    <router-link 
    :class="$route.fullPath === pageUrl ? 'text-[#F02C56] ' :''"
    class="flex flex-col items-center " :to="pageUrl">
      <ion-icon :name="$route.fullPath === pageUrl ? icon.replace('-outline','') : icon" />
      <span 
      class=" font-extralight	 text-sm">
        {{ iconString }}
      </span>
    </router-link>
  </div>
</template>
