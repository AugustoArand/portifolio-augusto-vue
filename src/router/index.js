import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProjects from '../views/AllProjects.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projetos',
        name: 'AllProjects',
        component: AllProjects
    }
]

const router = createRouter({
    history: createWebHistory('/portifolio-augusto-vue/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router
