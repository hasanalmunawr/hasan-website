<script setup>

import SideNavItem from "./SideNavItem.vue"
import Folder from 'vue-material-design-icons/FolderOutline.vue';
import DesktopTower from 'vue-material-design-icons/DesktopTower.vue';



const props = defineProps({
  isMobile: Boolean,
  openSideNav: Boolean,
  menus: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})


</script>

<template>
  <div
      v-if="!isMobile"
      class="h-full top-10 fixed bg-neutral-800 z-0 transition-colors border-r-2 border-neutral-900 duration-300"
      id="SideNav"
      :class="[!openSideNav ? 'w-[40px]' : 'w-[240px]', 'hidden sm:block']"
  >
    <!-- Scrollable wrapper -->
    <div class="h-full overflow-y-auto">
      <ul class="w-full transition-all duration-300 space-y-2">
        <!-- Item 1 -->
        <li>
          <button
              class="w-full flex justify-center text-gray-400 p-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors duration-200 hover:text-white">
            <Folder class="mr-1 text-[10px]"/>
          </button>
        </li>

        <hr class="border-white/20"/>

        <!-- Item 2 -->
        <li>
          <button
              class="w-full flex justify-center text-gray-400 p-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors duration-200 hover:text-white">
            <DesktopTower class="mr-1 text-[10px]"/>
          </button>
        </li>
      </ul>

    </div>
  </div>


</template>

<style scoped>

</style>
