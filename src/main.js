import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import auth from '@/auth';
Vue.prototype.$http = axios;
Vue.config.productionTip = false


// Components
import './components'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


Vue.use(auth);

Vue.prototype.$http = axios;
