import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

app.use(router);

app.mount("#app");
