// stores/ui.js
import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        isProjectSidebarOpen: false,
    }),
})
