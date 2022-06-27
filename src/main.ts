import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "vue-universal-modal/dist/index.css";

import VueUniversalModal from "vue-universal-modal";

const app = createApp(App);

app.use(createPinia());

app.use(VueUniversalModal, { teleportTarget: "#modals" });

app.mount("#app");
