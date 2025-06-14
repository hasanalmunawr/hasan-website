import { defineStore } from 'pinia'

export const useFolderStore = defineStore('menu', {
    state: () => ({
        openMenus: {},
    }),
    actions: {
        toggle(itemLabel) {
            this.openMenus[itemLabel] = !this.openMenus[itemLabel];
        },
        setOpen(itemLabel, value) {
            this.openMenus[itemLabel] = value;
        },
        resetAll() {
            this.openMenus = {};
        }
    },
})
