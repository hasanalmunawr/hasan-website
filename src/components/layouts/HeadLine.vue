<script setup>
import {RouterLink, useRoute} from "vue-router";

const isActiveLink = (pathRoute) => {
  const route = useRoute();
  return route.path === pathRoute;
}
</script>

<template>
  <footer
      class="fixed w-full z-10 top-10 text-xs text-white bg-neutral-900 border-b border-neutral-700 flex items-center px-2 py-1 font-mono h-10"
  >
    <!-- Tabs -->
    <div class="flex items-center space-x-1 ">
      <!-- Active Tab -->
      <RouterLink
          to="/"
          :class="[isActiveLink('/') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">HOME.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

      <RouterLink
          to="/about"
          :class="[isActiveLink('/about') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">ABOUT.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

      <RouterLink
          to="/skill"
          :class="[isActiveLink('/skill') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">SKILLS.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

      <RouterLink
          to="/experiences"
          :class="[isActiveLink('/experiences') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">EXPERIENCE.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

      <RouterLink
          to="/projects"
          :class="[isActiveLink('/projects') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">PROJECTS.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

      <RouterLink
          to="/contact"
          :class="[isActiveLink('/contact') ? 'border-b-3 border-blue-600' : '', 'flex items-center bg-neutral-900 text-white px-3 py-3 rounded-t-sm']">
        <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
        <span class="text-[11px]">CONTACT.md</span>
        <button
            class="ml-2 text-neutral-400 hover:text-red-500 text-[11px] transition"
            title="Close"
        >
          ×
        </button>
      </RouterLink>

    </div>
  </footer>
</template>


<style scoped>

</style>