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

import CloseIcon from 'vue-material-design-icons/Close.vue';
import MinimizeIcon from 'vue-material-design-icons/WindowMinimize.vue';
import RestoreIcon from 'vue-material-design-icons/WindowRestore.vue';


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
        class="w-full h-[40px] fixed z-20 flex items-center justify-between transition-colors duration-300"
        id="TopNav"
        style="background: linear-gradient(to right, rgba(217, 26, 96, 0.3) 0%, rgba(43, 43, 43, 0.9) 35%, #1e1e1e 70%);"
    >
      <!-- Left menu & logo -->
      <div class="flex items-center">
        <div class="flex items-center text-white cursor-pointer mx-2">
          <img :src="IDEIcon" width="20" alt=""/>
        </div>
        <button
            class="p-1 ml-3 rounded-lg text-white hover:bg-white/20 hover:backdrop-blur-sm hover:text-black transition duration-300"
            @click="toggleSideNav"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="size-5"
          >
            <path
                fill-rule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
            />
          </svg>
        </button>
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

        <div class="flex items-center space-x-1">
          <!-- Minimize -->
          <div title="Minimize" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">
            <MinimizeIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>

          <!-- Restore -->
          <div title="Restore" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">
            <RestoreIcon class="w-4 text-gray-400 cursor-pointer hover:text-white"/>
          </div>

          <!-- Close -->
          <div title="Close" class="flex items-center px-3 py-1 rounded-lg text-white transition duration-300">
            <CloseIcon class="w-4 text-gray-400 cursor-pointer hover:text-red-500"/>
          </div>
        </div>


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