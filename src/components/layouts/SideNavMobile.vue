<script setup>

import SideNavItem from "./SideNavItem.vue"

const props = defineProps({
  isMobile: Boolean,
  openSideNav: Boolean,
  menus: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div
      v-if="isMobile && openSideNav"
      class="fixed inset-0 z-[99] w-[240px] top-[60px] h-full bg-gray-200 text-black transition-colors duration-300"
  >
    <ul class="mt-[20px] w-full px-5 pb-2 pt-[7px]">
      <template v-for="(group, index) in menus" :key="index">
        <h2 class="text-gray-500 uppercase text-xs font-bold mb-2">
          {{ group.name }}
        </h2>
        <SideNavItem
            v-for="menu in group.children"
            :key="menu.route"
            :openSideNav="openSideNav"
            :iconString="menu.icon"
            :routeMenu="menu.route"
            :title="menu.name"
        />
      </template>
    </ul>

  </div>


</template>

<style scoped>

</style>
