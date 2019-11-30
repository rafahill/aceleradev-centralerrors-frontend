import Vue from 'vue'

import Router from 'vue-router';
import Login from './views/Login.vue'
import PasswordRecovery from './views/PasswordRecovery.vue'
import Signup from './views/Signup.vue'
import ErrorList from './views/ErrorList.vue'
import ErrorDetails from './views/ErrorDetails.vue'
import Callback from './views/Callback.vue';
import NotLogged from './views/NotLogged.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router)

const router = new Router({
mode: 'history',
routes:  [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
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
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback,
  },
  {
    path: '/403',
    name: '403',
    component: NotLogged,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
]
});

router.beforeEach(async (to, from, next) => {
  if (to.path.includes('autoLogin')) {
    router.app.$auth.newLogin(to.query.user, to.query.pw, (err) => {
      if (err && err.code == "invalid_grant") {
        console.log("Invalid grant", err);
        next('login')
      } else if (err) {
        console.log("Error", err);
        next('login');
      }
    });
    //router.app.$auth.login();
    next('');
  } else if (router.app.$auth.isAuthenticated() && to.name == 'login') {
    next('/error');
  } else if (to.name == 'callback' || to.name == '403' || to.name == 'login' || to.name == 'signup' || to.name == 'passwordrecovery') { // check if "to"-route is "callback" and allow access
    next();
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
  
  } else { // trigger auth0 login
    next('login');
    // router.app.$auth.login();
  }
});
export default router
