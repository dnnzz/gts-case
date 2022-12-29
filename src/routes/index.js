import { createRouter, createWebHistory } from "vue-router"
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
import Page3 from '@/pages/Page3'

const routeInfos = [
    {
        path : "/",
        component : Page1
    },
    {
        path : "/page-2",
        component : Page2
    },
    {
        path : "/page-3",
        component : Page3
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;