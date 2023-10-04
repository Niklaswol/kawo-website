import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/HomePage.vue'
import Services from '@/views/ServicesPage.vue'
import OBC from '@/views/ObcDetail.vue'
import FLEX from '@/views/FlexDetail.vue'
import CHARTER from "@/views/CharterDetail.vue";
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
        path: '/products/obc',
        name: 'OBC',
        component: OBC
    },
    {
        path: '/products/flex',
        name: 'FLEX',
        component: FLEX
    },
    {
        path: '/products/charter',
        name: 'CHARTER',
        component: CHARTER
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