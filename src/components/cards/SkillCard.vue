<script setup>
import {computed} from "vue";

const props = defineProps({
  title: String,
  icon: String,
  level: Number,
  bgClass: String,
  animationClass: {
    type: String,
    default: 'fade-in-up'
  },
  delay: {
    type: String,
    default: '0.4s'
  },
  intersectName: {
    type: String,
    required: true
  },
  showSection: {
    type: Function,
    required: true
  },
  visible: {
    type: Object,
    required: true
  }
})

const isVisible = computed(() => props.visible[props.intersectName])

const intersectOptions = {
  name: props.intersectName,
  callback: props.showSection
}
</script>

<template>
  <div
      class="relative overflow-hidden p-4 rounded-2xl shadow-md transition-all duration-300 ease-out"
      :class="[bgClass, animationClass, { show: isVisible }]"
      :style="{ transitionDelay: delay }"
      v-intersect="intersectOptions"
  >
    <div class="relative z-10">
      <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
        <img :src="icon" :alt="title" class="object-contain" width="32" height="32" />
      </div>
      <h3 class="text-lg font-medium text-white mb-1">{{ title }}</h3>
      <div class="flex space-x-1 mt-2">
        <div
            v-for="(filled, index) in 5"
            :key="index"
            :class="filled <= level ? 'bg-white' : 'bg-white/30'"
            class="h-1.5 rounded-full"
            :style="{ width: filled <= level ? '1rem' : '0.75rem' }"
        />
      </div>
    </div>
    <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
  </div>
</template>

<style scoped>

</style>