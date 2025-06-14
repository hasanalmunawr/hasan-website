<script setup>
import {reactive, ref} from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {useRoute} from "vue-router";
import { useUIStore } from '@/stores/ui'
import { useFolderStore } from '@/stores/folder'

const uiStore = useUIStore()
const folderStore = useFolderStore()

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
    label: 'hasan-website / src',
    children: [
      { label: 'HOME.md', icon: 'pi pi-user', link: '/' },
      { label: 'ABOUT.md', icon: 'pi pi-user', link: '/about' },
      { label: 'EXPERIENCE.md', icon: 'pi pi-user', link: '/experiences' },
      { label: 'SKILL.md', icon: 'pi pi-user', link: '/skill' },
      { label: 'PROJECT.md', icon: 'pi pi-user', link: '/projects' },
      { label: 'CONTACT.md', icon: 'pi pi-user', link: '/contact' },
    ],
  },
])

const openMenus = reactive({})

// function toggle(item) {
//   openMenus[item.label] = !openMenus[item.label];
// }

const toggle = (item) => {
  folderStore.toggle(item.label)
}

const isOpen = (label) => folderStore.openMenus[label]

const isActiveLink = (pathRoute) => {
  const route = useRoute();
  return route.path === pathRoute;
}

</script>

<template>
  <div
      v-if="!isMobile"
      class="h-full top-10 left-10 fixed z-11 transition-colors border-r-2 border-neutral-900 duration-300"
      id="SideNav"
      :class="[!uiStore.isProjectSidebarOpen ? 'w-[0px]' : 'w-[200px]', 'hidden sm:block']"
  >
    <!-- Scrollable wrapper -->
    <div class="h-full text-white border-r border-neutral-700">
      <div class="h-full overflow-y-auto">
        <div class="flex items-center border-b border-neutral-700 bg-neutral-800 py-2 px-3 mb-2 space-x-2 text-white transition duration-300 hover:backdrop-blur-sm">
          <span class="text-xs">Project</span>
          <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" />
        </div>
        <ul class="space-y-1">
          <li v-for="item in menu" :key="item.label">
            <div
                class="flex justify-between items-center cursor-pointer px-2 py-1 rounded hover:bg-neutral-700 text-xs"
                @click="toggle(item)"
            >
              <div class="flex items-center gap-2 text-xs text-gray-300">
                <!-- Toggle Icon -->
                <font-awesome-icon :icon="isOpen(item.label) ? ['fas', 'chevron-down'] : ['fas', 'chevron-right']" size="xs" />

                <!-- Folder Icon -->
                <font-awesome-icon :icon="['fas', 'folder']" />
                <span class="text-white">{{ item.label }}</span>
              </div>
            </div>

            <!-- Child -->
            <ul v-if="item.children && isOpen(item.label)" class="pl-5 mt-1 space-y-1">
              <li
                  v-for="child in item.children"
                  :key="child.label"
                  :class="[
        isActiveLink(child.link) ? 'text-white bg-neutral-700' : '',
        'px-2 py-0.5 rounded hover:bg-neutral-600 cursor-pointer text-xs'
      ]"
              >
                <RouterLink :to="child.link" class="flex items-center gap-1 hover:text-white">
                  <div class="text-blue-400 text-[11px] font-bold mr-1">M</div>
                  <i :class="child.icon + ' text-[10px]'"></i>
                  <span>{{ child.label }}</span>
                </RouterLink>
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