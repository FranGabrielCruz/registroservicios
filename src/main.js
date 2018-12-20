import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import principal from './components/principal.vue';
import Login from './components/Login.vue';
import Menu  from './components/Menu.vue';
import Busq  from './components/Busqueda.vue';
import Pie  from './components/Footer.vue';
import Cliente  from './components/Cliente.vue';
import Actualizacion  from './components/Actualizacion.vue';
import Registro  from './components/Registro.vue';

Vue.use(VueRouter)
const router=  new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
      {
          path: "/",
          name: "Login",
          component: Login
      },
      {
          path: "/principal",
          name: "principal",
          component: principal
      },
      {
          path: "/cliente",
          name: "Cliente",
          component: Cliente
      },
      {
          path: "/actualizacion",
          name: "Actualizacion",
          component: Actualizacion
      },
      {
          path: "/registro",
          name: "Registro",
          component: Registro
      }

  ]
})
Vue.config.productionTip = false;
Vue.component('barra-menu',Menu);
Vue.component('barra-busqueda',Busq);
Vue.component('barra-foot',Pie);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

