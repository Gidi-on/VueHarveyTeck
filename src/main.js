import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faBell,
  faBriefcase,
  faCalendar,
  faCaretDown,
  faCircleLeft,
  faCommentDots,
  faDownload,
  faEnvelope,
  faFaceSmile,
  faFileLines,
  faFilePdf,
  faFolderMinus,
  faGear,
  faGrip,
  faInbox,
  faMagnifyingGlass,
  faPaperPlane,
  faPaperclip,
  faPenToSquare,
  faPlus,
  faPrint,
  faShoppingCart,
  faSquareCheck,
  faStarHalfStroke,
  faTag,
  faTrash,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faGrip,
  faShoppingCart,
  faCalendar,
  faEnvelope,
  faCommentDots,
  faSquareCheck,
  faBriefcase,
  faFileLines,
  faFolderMinus,
  faUser,
  faMagnifyingGlass,
  faBars,
  faGear,
  faBell,
  faInbox,
  faStarHalfStroke,
  faPenToSquare,
  faPaperPlane,
  faTrash,
  faCaretDown,
  faPaperclip,
  faPlus,
  faCircleLeft,
  faArrowLeft,
  faArrowRight,
  faTag,
  faPrint,
  faTrash,
  faFilePdf,
  faDownload,
  faFileLines,
  faFaceSmile
);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
