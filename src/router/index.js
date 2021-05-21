import { createRouter, createWebHistory } from 'vue-router' //กดจากหน้าไหนไปหน้าไหน เป็นประวัติ
import firebase from 'firebase'
import Users from '../views/Home.vue'
import About from '../views/About.vue'
import A1 from '../views/A1.vue'
import A2 from '../views/A2.vue'
import A3 from '../views/A3.vue'
import A4 from '../views/A4.vue'
import A5 from '../views/A5.vue'
import Q1 from '../views/Q1.vue'
import Q2 from '../views/Q2.vue'
import Q3 from '../views/Q3.vue'
import Q4 from '../views/Q4.vue'
import Q5 from '../views/Q5.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Mypost from '../views/Mypost.vue'
import Myarticle from '../views/Myarticle.vue'
import Myquestion from '../views/Myquestion.vue'
import Following from '../views/Following.vue'
import Follower from '../views/Follower.vue'



const routerHistory = createWebHistory()

const routes = [

    {
        path: '/',
        redirect: '/signin'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/signin'
    },
    {
        path: '/signin',
        name: Signin,
        component: Signin
    },
    {
        path: '/signup',
        name: Signup,
        component: Signup
    },
    {
        path: '/question',
        name: Q1,
        component: Q1
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
        path: '/article',
        name: A1,
        component: A1
    },
    {
        path: '/article2',
        name: A2,
        component: A2
    },
    {
        path: '/article3',
        name: A3,
        component: A3
    },
    {
        path: '/article4',
        name: A4,
        component: A4
    },
    {
        path: '/article5',
        name: A5,
        component: A5
    },
    {
        path: '/question2',
        name: Q2,
        component: Q2
    },
    {
        path: '/question3',
        name: Q3,
        component: Q3
    },
    {
        path: '/question4',
        name: Q4,
        component: Q4
    },
    {
        path: '/question5',
        name: Q5,
        component: Q5
    },
    {
        path: '/follower',
        name: Follower,
        component: Follower
    },
    {
        path: '/following',
        name: Following,
        component: Following
    },
    {
        path: '/myarticle',
        name: Myarticle,
        component: Myarticle
    },
    {
        path: '/mypost',
        name: Mypost,
        component: Mypost
    },
    {
        path: '/myquestion',
        name: Myquestion,
        component: Myquestion
    }

    
]

const router = createRouter({
    history: routerHistory,
    routes
})



export default router