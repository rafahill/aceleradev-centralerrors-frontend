import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import auth from '@/auth';

Vue.config.productionTip = false;
// Components
import './components'
Vue.use(auth);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


