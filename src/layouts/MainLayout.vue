<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import SideNavDesktop from "@/components/layouts/SideNavDesktop.vue";
import SideNavMobile from "@/components/layouts/SideNavMobile.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import HeadLine from "@/components/layouts/HeadLine.vue";
import Footerlayout from "@/layouts/Footerlayout.vue";
import ProjectView from "@/components/layouts/ProjectView.vue";

import Play from 'vue-material-design-icons/Play.vue'
import Debug from 'vue-material-design-icons/Bug.vue'
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'

import SettingsIcon from "vue-material-design-icons/Cog.vue";
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import AccountPlusIcon from 'vue-material-design-icons/AccountPlus.vue'

import {useUIStore} from '@/stores/ui'

const ui = useUIStore()
const openSideNav = ref(false)
const openProjectFile = ref(false)
const openDropDown = ref(false)
const isMobile = ref(window.innerWidth < 640)

const handleResize = () => {
  isMobile.value = window.innerWidth < 640
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleProjectFile = () => {
  openProjectFile.value = !openProjectFile.value
}
const toggleDropdown = () => {
  openDropDown.value = !openDropDown.value
}

const menus = [
  {
    title: "Home",
    children: [
      {
        name: 'Home A',
        route: 'dashboard',
        icon: 'Home'
      }
    ]
  }
]
</script>

<template>
  <!-- TOP NAVIGATION BAR -->
  <div class="relative top-0">
    <div
        class="w-full h-[40px] fixed z-20 px-4 flex items-center justify-between transition-colors duration-300"
        id="TopNav"
        style="background: linear-gradient(to right, rgba(217, 26, 96, 0.3) 0%, rgba(43, 43, 43, 0.9) 35%, #1e1e1e 70%);"
    >
      <!-- Left menu & logo -->
      <div class="flex items-center">
        <!-- Mobile toggle -->
        <button @click="openProjectFile = !openProjectFile" class="sm:hidden text-white mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- MacOS-style window buttons -->
        <div class="hidden sm:flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400 hover:brightness-125 cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-green-500 hover:brightness-125 cursor-pointer"></div>
        </div>

        <div class="mx-2 hidden sm:block"></div>

        <!-- Project Info -->
        <div
            class="hidden sm:flex items-center px-3 py-1 rounded-lg text-white space-x-2 hover:bg-white/10 hover:backdrop-blur-sm">
          <div class="bg-pink-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-xs font-bold">
            H
          </div>
          <span class="text-xs">hasan-website</span>
          <ChevronDown class="w-4 text-gray-300"/>
        </div>
      </div>

      <!-- Middle Search Bar (optional) -->
      <div class="w-[600px] hidden md:block text-white"></div>

      <!-- Right side buttons -->
      <div class="flex items-center space-x-1 gap-2">
        <div class="hidden sm:flex items-center space-x-1">
          <div class="flex items-center px-3 py-1 rounded-lg text-white hover:bg-white/10">
            <span class="text-xs">Current File</span>
            <ChevronDown class="w-4 text-gray-300"/>
          </div>
          <div class="px-2 py-1 rounded-lg text-white">
            <Play class="w-4 text-gray-600 cursor-pointer"/>
          </div>
          <div class="px-2 py-1 rounded-lg text-white">
            <Debug class="w-4 text-gray-600 cursor-pointer"/>
          </div>
          <div title="More Actions" class="px-2 py-1 rounded-lg text-white">
            <DotsVerticalIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
        </div>
        <div class="flex items-center space-x-1">
          <div title="Code With Me" class="px-2 py-1 rounded-lg text-white">
            <AccountPlusIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
          <div title="Search" class="px-2 py-1 rounded-lg text-white">
            <MagnifyIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
          <div title="Setting" class="px-2 py-1 rounded-lg text-white">
            <SettingsIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Side Navigations -->
    <SideNavDesktop :menus="menus" :isMobile="isMobile" :openSideNav="openSideNav"/>
    <ProjectView :isMobile="isMobile" :openSideNav="openProjectFile"/>
    <SideNavMobile :menus="menus" :isMobile="isMobile" :openSideNav="openSideNav"/>
  </div>

  <!-- Main Content -->
  <div
      v-if="!isMobile"
      :style="{ width: ui.isProjectSidebarOpen ? 'calc(100% - 240px)' : 'calc(100% - 38px)' }"
      class="absolute right-0 top-[40px] bottom-0 overflow-y-auto bg-neutral-900 text-black transition-all"
  >
    <HeadLine/>
    <div class="pl-2 pt-8">
      <slot></slot>
    </div>
  </div>

  <main
      v-else
      class="absolute top-[40px] left-0 right-0 bottom-0 overflow-y-auto bg-neutral-900 text-black"
  >
    <slot></slot>
  </main>

  <Footerlayout/>
</template>
