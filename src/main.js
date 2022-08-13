import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import VueMask from "v-mask";

Vue.config.productionTip = false;
Vue.use(VueMask);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
