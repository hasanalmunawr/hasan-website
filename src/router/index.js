import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillView from "@/views/SkillView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/skill',
            name: 'skill',
            component: SkillView
        },
        {
            path: '/experiences',
            name: 'experiences',
            component: ExperienceView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },


    ]
})

export default router;