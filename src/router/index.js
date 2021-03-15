import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Auth/Login.vue'
import Home from '../components/Dashboard.vue';
import TopFiveEmployees from '../components/TopFiveEmployees.vue';
import loggedInUsersPosition from '../components/loggedInUsersPosition.vue';


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            auth: true
        }
    },

    {
        path: '/top-five-employees',
        name: 'topFiveEmployee',
        component: TopFiveEmployees,
        meta: {
            auth: true
        }
    },

    {
        path: '/logged-in-users-position',
        name: 'loggedInUsersPosition',
        component: loggedInUsersPosition,
        meta: {
            auth: true
        }
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    //logged in redirect to dashboard
    if (to.path === '/login' && loggedIn) {
        next({ name: 'Home' })
        return
    }
    next()
})

export default router