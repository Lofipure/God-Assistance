import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import routerConfig from './router.config';

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
