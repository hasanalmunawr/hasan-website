<script setup>

import {computed, toRefs} from "vue";
import Home from "vue-material-design-icons/Home.vue";


const props = defineProps({
  openSideNav: Boolean,
  iconString: String,
  routeMenu: String,
  title: String
})

const { openSideNav, iconString } = toRefs(props)

const menuIcon = computed(() => {
  const icon = {
    Home: Home,
  };

  return icon[props.iconString] || Home; // Gunakan default jika tidak ditemukan
});


const isActive = computed(() => {
  return true
})

const navLink = () => {
  // router.get(route(props.routeMenu))
  console.log()
}

</script>

<template>
  <li
      @click="navLink"
      :class="[
      openSideNav ? 'flex items-center gap-4 text-left' : 'flex justify-center',
      'p-2 font-semibold rounded-lg cursor-pointer transition-colors duration-200 mb-2',
      isActive ? 'text-white' : 'text-white'
    ]"
  >
    <component :is="menuIcon" class="mr-2 text-lg" />
    <span v-if="openSideNav" class="text-base">{{ title }}</span>
  </li>
</template>

<style scoped>

</style>
