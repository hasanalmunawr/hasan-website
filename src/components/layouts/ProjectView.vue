<script setup>
import {reactive, ref} from "vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue"
import Folder from 'vue-material-design-icons/Folder.vue'
import FileDocument from 'vue-material-design-icons/FileDocument.vue'

const props = defineProps({
  isMobile: Boolean,
  openSideNav: Boolean,
  isLoading: {
    type: Boolean,
    default: false
  }
})

const menu = ref([
  {
    label: 'User',
    icon: 'pi pi-users',
    children: [
      { label: 'All Users', icon: 'pi pi-user', link: '/users' },
      { label: 'Add User', icon: 'pi pi-user-plus', link: '/users/add' },
    ],
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    children: [
      { label: 'General', icon: 'pi pi-sliders-h', link: '/settings/general' },
      { label: 'Security', icon: 'pi pi-shield', link: '/settings/security' },
    ],
  },
])

const openMenus = reactive({})

function toggle(item) {
  openMenus[item.label] = !openMenus[item.label];
}

// const toggle = (item) => {
//   if (item.children) {
//     openMenus.value[item.label] = !openMenus.value[item.label]
//   } else if (item.link) {
//     window.location.href = item.link
//   }
// }
</script>

<template>
  <div
      v-if="!isMobile"
      class="h-full top-10 left-10 fixed bg-neutral-800 z-11 transition-colors border-r-2 border-neutral-900 duration-300"
      id="SideNav"
      :class="[!openSideNav ? 'w-[0px]' : 'w-[200px]', 'hidden sm:block']"
  >
    <!-- Scrollable wrapper -->
    <div class="h-full bg-neutral-800 text-white">
      <div class="h-full overflow-y-auto p-2">
        <div class="flex items-center px-2 mb-1 rounded text-white transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm">
          <span class="text-xs">Project</span>
          <ChevronDown class="text-gray-300"/>
        </div>
        <hr class="border-white/20"/>
        <ul class="space-y-1">
          <li v-for="item in menu" :key="item.label">
            <div
                class="flex justify-between items-center cursor-pointer px-2 py-1 rounded hover:bg-neutral-700 text-xs"
                @click="toggle(item)"
            >
              <div class="flex items-center gap-1 text-xs text-gray-300">
                <!-- Toggle Icon -->
                <component
                    :is="openMenus[item.label] ? ChevronDown : ChevronRight"
                    class="w-3 h-3 translate-y-[1px]"
                />

                <!-- Folder Icon -->
                <svg
                    class="w-4 h-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7h4l2 2h10a1 1 0 011 1v7a1 1 0 01-1 1H3V7z"
                  />
                </svg>

                <!-- Label -->
                <span class="text-white">{{ item.label }}</span>
              </div>

            </div>

            <!-- Child menu -->
            <ul v-if="item.children && openMenus[item.label]" class="pl-5 mt-1 space-y-1">
              <li
                  v-for="child in item.children"
                  :key="child.label"
                  class="px-2 py-0.5 rounded hover:bg-neutral-700 cursor-pointer text-xs"
              >
                <a :href="child.link" class="flex items-center gap-1 text-gray-300 hover:text-white">
                  <i :class="child.icon + ' text-[10px]'"></i>
                  <span>{{ child.label }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>