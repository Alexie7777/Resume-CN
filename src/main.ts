import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAt,
  faMobileScreen,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

library.add(faUserCheck, faGithub, faMobileScreen, faAt);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueClipboard)
  .use(ToastPlugin)
  .mount("#app");
