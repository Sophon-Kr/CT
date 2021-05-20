import { createRouter, createWebHistory } from 'vue-router' //กดจากหน้าไหนไปหน้าไหน เป็นประวัติ

import Users from '../views/Home.vue'
import About from '../views/About.vue'
import AddUser from '../views/AddUser.vue'
import Signin from '../views/Signin.vue'
import Question from '../views/QnA.vue'

const routerHistory = createWebHistory()

const routes = [
    {
        path: '/signin',
        name: Signin,
        component: Signin
    },
    {
        path: '/question',
        name: Question,
        component: Question
    },
    {
        path: '/',
        redirect: '/users'
    },

    {
        path: '/users',
        name: Users,
        component: Users
    },
    {
        path: '/about',
        name: About,
        component: About
    },
    {
        path: '/adduser',
        name: AddUser,
        component: AddUser
    }
    
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router 
