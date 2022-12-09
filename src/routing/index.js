import { createWebHistory, createRouter } from "vue-router"
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import NotFound from '../views/NotFound.vue'

import "primevue/resources/themes/vela-green/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const routes = [{
    path: "/",
    name: "Home",
    component: HomePage
},
{
    path: "/about",
    name: "About",
    component: AboutPage
    // component:()=>import('../components/About')
},
// catchall 404
{
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
}
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router