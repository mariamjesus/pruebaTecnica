import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;



/*--------------------REGISTER BOOTSTRAP---------------------------------*/
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Importar los archivos CSS de Bootstrap y BootstrapVue (el orden es importante)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Haz que BootstrapVue esté disponible en todo tu proyecto
Vue.use(BootstrapVue);
// Opcionalmente, instale el plugin de componentes de iconos BootstrapVue
Vue.use(IconsPlugin);
/*-----------------------------------------------------------------------*/
new Vue({
  render: (h) => h(App),
}).$mount("#app");