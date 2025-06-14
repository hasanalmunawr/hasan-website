import './assets/main.css'
import router from "@/router/index.js";
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons you want to use
import { faUser, faCoffee, faChevronRight, faChevronDown, faFolder  } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faUser, faCoffee, faChevronDown, faChevronRight, faFolder )

// Import state management
import {createPinia} from "pinia";

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
