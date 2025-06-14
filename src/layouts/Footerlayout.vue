<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {computed} from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbMap = {
  '/': ['hasan-website', 'src', 'HOME.md'],
  '/about': ['hasan-website', 'src', 'ABOUT.md'],
  '/experiences': ['hasan-website', 'src', 'EXPERIENCE.md'],
  '/skill': ['hasan-website', 'src', 'SKILL.md'],
  '/projects': ['hasan-website', 'src', 'PROJECT.md'],
  '/contact': ['hasan-website', 'src', 'CONTACT.md'],
}

const currentBreadcrumb = computed(() => {
  return breadcrumbMap[route.path] || []
})

</script>

<template>
  <footer
      class="fixed w-full z-20 bottom-0 text-xs text-white bg-neutral-800 border-t-1 border-neutral-900 flex items-center justify-between px-4 py-2 font-mono"
  >
    <!-- Kiri -->
    <div class="flex items-center space-x-2">
      <div class="bg-neutral-800 text-[4px] text-neutral-800 rounded border-4 border-blue-600">
        wp
      </div>
      <template v-for="(item, index) in currentBreadcrumb" :key="index">
        <template v-if="index > 0">
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="xs" />
        </template>
        <span class="text-[10px]">{{ item }}</span>
      </template>
    </div>

    <!-- Tengah -->
    <div class="hidden sm:flex items-center space-x-1 text-gray-300">

    </div>

    <!-- Kanan -->
    <div class="flex items-center space-x-3 text-gray-400">

      <span>Vue: 3.5</span>
      <span>2 spaces</span>
      <span>UTF-8</span>
    </div>
  </footer>
</template>

<style scoped>

</style>