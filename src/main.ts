import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSelect from "vue-select";
import i18n from './i18n';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "vue-select/dist/vue-select.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


const app = createApp(App);

app.use(router);
app.use(i18n);

app.component("vue-select", VueSelect);
app.mount("#app");
