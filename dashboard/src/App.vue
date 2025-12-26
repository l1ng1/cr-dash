<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { useMainStore } from './stores/mainStore';
import API from './api/color'

const bc =ref(useMainStore().colorOfTheDay);
const colorName = ref('');

onBeforeMount(()=>{
  changeBodyColor()
})

function rgbToHex(r:number, g:number, b:number) {
  return (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

async function changeBodyColor(){
  document.querySelector('body').style.backgroundColor = bc.value
  const rgbString = document.querySelector('body').style.backgroundColor;
  const numbers = rgbString.match(/\d+/g)
  colorName.value = await API.getNameOfColor(rgbToHex(numbers[0],numbers[1],numbers[2]))
}

</script>

<template>
  <h1>{{colorName}}</h1>
</template>

<style scoped>
  
</style>
