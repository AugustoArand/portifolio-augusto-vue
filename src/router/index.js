import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AllProjects from '../views/AllProjects.vue'
import AdminPanel from '../views/AdminPanel.vue'

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
    },
    {
        path: '/admin',
        name: 'AdminPanel',
        component: AdminPanel
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
