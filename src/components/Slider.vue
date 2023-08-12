<template>
  <div class="w-full h-auto " >
    <div class="relative w-full h-0.5 rounded-lg bg-slate-200">
      <div id="progressSliderBox" class="w-10 h-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <input id="progressSlider" type="range" 
      min="0" max="100" value="30"
      class="absolute left-0 top-0 w-full h-0.5
      appearance-none bg-transparent rounded-lg
      "
      @change="changeprogressSlider"
      @mousemove="changeprogressSlider"
      @touchmove="changeprogressSlider"
      >
    </div>
    <div class=" flex justify-between text-xs text-gray-400">
      <div>00:00</div>
      <div>03:00</div>
    </div>
  </div>
</template>

<script setup>
const changeprogressSlider = () => {
  const progressSlider = document.querySelector('#progressSlider');
  const progressSliderBox = document.querySelector('#progressSliderBox');
  progressSliderBox.style.width = `${progressSlider.value}%`

}
</script>

<style scoped>

/* #Slider {
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
  transition: all .1s ;
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
  /* cursor: pointer; */
  transition: all .1s ;
}

</style>