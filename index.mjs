import { createProfileNav } from "./handlers/createNav.mjs";
import { handleLogButton } from "./handlers/logout.mjs";
import { router } from "../../router.mjs";

const hamburgerMenu = document.querySelector(".hamburger-menu");
createProfileNav(hamburgerMenu);
handleLogButton();
router();
