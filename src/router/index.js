import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/Home')
    },
    {
        path: '/explore',
        name: 'Explore',
        component: () => import('../views/explore/Explore')
    },
    {
        path: '/information',
        name: 'Information',
        component: () => import('../views/information/Information')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Authentication/Login')
    },    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Authentication/Register')
    }
]

const router = createRouter({
    //使用hash模式
    history: createWebHashHistory(),
    routes,
})

export default router