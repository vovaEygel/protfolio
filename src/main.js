import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false;
import './styles/protfolio.scss';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");