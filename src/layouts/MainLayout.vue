<script setup>

import {computed, ref} from "vue";
import SideNavDesktop from "@/components/layouts/SideNavDesktop.vue";
import SideNavMobile from "@/components/layouts/SideNavMobile.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import IDEIcon from '../assets/images/icon-IDE.png'
import HeadLine from "@/components/layouts/HeadLine.vue";
import Footerlayout from "@/layouts/Footerlayout.vue";


import Play from 'vue-material-design-icons/Play.vue'
import Debug from 'vue-material-design-icons/Bug.vue'
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue'

import SettingsIcon from "vue-material-design-icons/Cog.vue";
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import AccountPlusIcon from 'vue-material-design-icons/AccountPlus.vue'


const openSideNav = ref(false);
const openDropDown = ref(false);
const isMobile = computed(() => window.innerWidth < 640);
const toggleSideNav = () => {
  openSideNav.value = !openSideNav.value;
};
const toggleDropdown = () => {
  openDropDown.value = !openDropDown.value;
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
  },
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
        <!-- MacOS-style window buttons -->
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-400 hover:brightness-125 cursor-pointer"></div>
          <div class="w-3 h-3 rounded-full bg-green-500 hover:brightness-125 cursor-pointer"></div>
        </div>
        <div class="mx-2"></div>
        <div
            class="flex items-center px-3 py-1 rounded-lg text-white space-x-2 transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm">
          <div class="bg-pink-500 text-white rounded-lg w-6 h-6 flex items-center justify-center text-xs font-bold">
            PB
          </div>
          <span class="text-xs">personal-branding</span>
          <ChevronDown class="w-4 text-gray-300"/>
        </div>
        <div
            class="flex items-center px-3 py-1 rounded-lg text-white space-x-2 transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm">
          <span class="text-xs">Version control</span>
          <ChevronDown class="w-4 text-gray-300"/>
        </div>

      </div>

      <!-- Middle Search Bar -->
      <div class="w-[600px] hidden md:block text-white">
        <!--        <button @click="toastIsi">-->
        <!--        </button>-->
      </div>

      <!-- Right profile picture -->
      <div class="relative flex items-center space-x-2 gap-4">

        <div class="flex items-center space-x-1">

          <div
              class="flex items-center px-3 py-1 rounded-lg text-white space-x-2 transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm">
            <span class="text-xs">Current File</span>
            <ChevronDown class="w-4 text-gray-300"/>
          </div>
          <!-- Add user -->
          <div class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <Play class="w-4 text-gray-600 cursor-pointer"/>
          </div>

          <!-- Search -->
          <div class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <Debug class="w-4 text-gray-600 cursor-pointer"/>
          </div>

          <!-- Setting -->
          <div title="More Actions" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <DotsVerticalIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
        </div>

        <div class="flex items-center space-x-1">

          <!-- Add user -->
          <div title="Code With Me" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <AccountPlusIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>

          <!-- Search -->
          <div title="Search" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <MagnifyIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>

          <!-- Setting -->
          <div title="Setting" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300 ">
            <SettingsIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>
        </div>

<!--        <div class="flex items-center space-x-1">-->
<!--          &lt;!&ndash; Minimize &ndash;&gt;-->
<!--          <div title="Minimize" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">-->
<!--            <MinimizeIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>-->
<!--          </div>-->

<!--          &lt;!&ndash; Restore &ndash;&gt;-->
<!--          <div title="Restore" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">-->
<!--            <RestoreIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>-->
<!--          </div>-->

<!--          &lt;!&ndash; Close &ndash;&gt;-->
<!--          <div title="Close" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">-->
<!--            <CloseIcon class="w-4 text-gray-400 cursor-pointer hover:text-red-500"/>-->
<!--          </div>-->
<!--        </div>-->


      </div>
    </div>

    <!-- Side Navigation bar -->
    <SideNavDesktop :menus="menus" :isMobile="isMobile" :openSideNav="openSideNav"/>

    <!-- Mobile friendly Side Nav -->
    <SideNavMobile :menus="menus" :isMobile="isMobile" :openSideNav="openSideNav"/>
  </div>


  <!-- SLOT FOR DESKTOP VIEW -->
  <div
      v-if="!isMobile"
      :style="{
    width: openSideNav ? 'calc(100% - 240px)' : 'calc(100% - 38px)'
  }"
      class="h-[calc(100vh-60px)] absolute right-0 mt-14 transition-colors duration-300 bg-neutral-900 text-black  "
  >
    <HeadLine/>
    <div class="pl-2 pt-8">
      <slot></slot>
    </div>
  </div>

  <!-- SLOT FOR MOBILE VIEW -->
  <main
      v-if="isMobile"
      :style="{
    marginTop: '60px',
    marginLeft: isMobile ? '0' : (openSideNav ? '240px' : '70px')
  }"
      class="h-[calc(100vh-60px)] absolute transition-all duration-300 transition-colors bg-neutral-900 text-black  "
  >
    <slot></slot>
  </main>

  <Footerlayout/>
</template>

<style scoped>

</style>