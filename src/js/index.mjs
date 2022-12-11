import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { getListings } from "./api/listings/read.mjs";
import { displayListings } from "./handlers/listings.mjs";
import { displayListing } from "./handlers/listing.mjs";
import { createFormListener } from "./handlers/createListing.mjs";
import { displayProfile } from "./handlers/profileListings.mjs";
import { bidFormListener } from "./handlers/createBid.mjs";
import { createProfileNav } from "./handlers/createNav.mjs";
import { handleLogButton } from "./handlers/logout.mjs";

const path = location.pathname;

if (path === "/login.html") {
  loginFormListener();
} else if (path === "/register.html") {
  registerFormListener();
} else if (path === "/listings.html") {
  displayListings();
} else if (path === "/listing.html") {
  displayListing();
  bidFormListener();
} else if (path === "/profile.html") {
  displayProfile();
  createFormListener();
  createFormListener();
}

const hamburgerMenu = document.querySelector(".hamburger-menu");
createProfileNav(hamburgerMenu);
handleLogButton();
