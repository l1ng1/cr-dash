import { ref, computed } from 'vue'

import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  

  function generateColorFromDate(date: Date): string {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const seed = year * 10000 + month * 100 + day
    const hue = seed % 360
    const saturation = 60 + (seed % 26)
    const lightness = 50 + ((seed * 7) % 21)
    
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }
  
  const colorOfTheDay = computed(() => {
    console.log(generateColorFromDate(new Date()))
    return generateColorFromDate(new Date())
  })

  return {
    colorOfTheDay
  }
})