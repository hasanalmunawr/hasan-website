<script setup>

import {nextTick, onMounted, ref} from "vue";

const mainContent = ref(null)
const lineCount = ref(31)

const updateLineCount = () => {
  if (mainContent.value) {
    const contentHeight = mainContent.value.offsetHeight
    const lineHeight = 24 // px, adjust if needed
    lineCount.value = Math.ceil(contentHeight / lineHeight)
  }
}

onMounted(async () => {
  await nextTick()
  updateLineCount()
  window.addEventListener('resize', updateLineCount)
})
</script>

<template>
  <div class="text-white h-screen ">
    <div class="flex h-full">

      <!-- Gutter Line Numbers -->
      <div ref="gutter" class="pr-4 text-right select-none text-gray-500 font-mono text-sm border-r border-[#3c3f41]">
        <div v-for="line in lineCount" :key="line">{{ line }}</div>
      </div>

      <!-- Main Content -->
      <div ref="mainContent"  class="pb-8 max-w-6xl mx-auto ">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>