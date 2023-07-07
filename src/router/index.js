import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/HomePage.vue'
import Services from '@/views/ServicesPage.vue'
import Operations from "@/views/OperationsPage.vue";
import AboutUs from "@/views/AboutUs.vue";
import Contact from "@/views/ContactPage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/products',
        name: 'Services',
        component: Services,
    },
    {
        path: '/operations',
        name: 'Operations',
        component: Operations,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router