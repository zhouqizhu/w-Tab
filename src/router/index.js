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
    }
]

const router = createRouter({
    //使用hash模式
    history: createWebHashHistory(),
    routes,
})

export default router