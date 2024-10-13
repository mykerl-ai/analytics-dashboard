import { createApp } from "vue";
import "./style.css";
import "./index.css";
import router from "./router";
import store from "./store"; // Import the store

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";

const app = createApp(App);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(store)
  .use(router)

  .mount("#app");
