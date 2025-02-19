import { createRouter, createWebHistory } from "vue-router";
import TheLogin from "@/components/TheLogin.vue"
import TheHome from "@/components/TheHome.vue"
import TheRegister from "@/components/TheRegister.vue";
import PageMember from "@/components/PageMember.vue"
import ProductShow from "@/components/ProductShow.vue";
import CartShow from "@/components/CartShow.vue";
const routes = [
    {
        patch: '/',
        name: 'Home',
        component: TheHome
    },
    {
        path: '/Login',
        name: 'Login',
        component: TheLogin
    },
    {
        path: '/register',
        name: 'Register',
        component: TheRegister
    },
    {
        path:'/pagemember',
        name:'PageMember',
        component: PageMember
    },
    {
        path:'/ProductShow/:pdId',
        name:'ProductShow',
        component: ProductShow
    },
    {
        path:'/cartShow/:cartId',
        name:'CartShow',
        component: CartShow
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),routes
})

export default router;