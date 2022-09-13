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

import VueClipboard from "vue3-clipboard";

library.add(faUserCheck, faGithub, faMobileScreen, faAt);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueClipboard)
  .mount("#app");
