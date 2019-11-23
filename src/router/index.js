import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import PasswordRecovery from '../views/PasswordRecovery.vue'
import Signup from '../views/Signup.vue'
import ErrorList from '../views/ErrorList.vue'
import ErrorDetails from '../views/ErrorDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },

  {
    path: '/passwordrecovery',
    name: 'passwordrecovery',
    component: PasswordRecovery
  },

  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorList
  },
  {
    path: '/error/:id',
    name: 'errorDetails',
    component: ErrorDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
