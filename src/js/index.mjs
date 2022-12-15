import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { displayListings } from "./handlers/listings.mjs";
import { displayListing } from "./handlers/listing.mjs";
import { createFormListener } from "./handlers/createListing.mjs";
import { displayProfile } from "./handlers/profile.mjs";
import { bidFormListener } from "./handlers/createBid.mjs";
import { createProfileNav } from "./handlers/createNav.mjs";
import { handleLogButton } from "./handlers/logout.mjs";
import { deleteListener } from "./handlers/delete.mjs";
import { removeCreateForm } from "./templates/hideCreateForm.mjs";
import { displaySearchedListings } from "./handlers/displaySearchResults.mjs";
import { updateAvatarListener } from "./handlers/updateAvatar.mjs";
import { removeUpdateAvatarForm } from "./templates/hideUpdateAvatar.mjs";
import { updateListingListener } from "./handlers/updateListing.mjs";
import { removeUpdateListingForm } from "./templates/hideUpdateListing.mjs";

const hamburgerMenu = document.querySelector(".hamburger-menu");
createProfileNav(hamburgerMenu);
handleLogButton();

const path = location.pathname;

if (path === "/login.html") {
  loginFormListener();
} else if (path === "/register.html") {
  registerFormListener();
} else if (path === "/listings.html") {
  displayListings();
  displaySearchedListings();
} else if (path === "/listing.html") {
  displayListing();
} else if (path === "/profile.html") {
  displayProfile();
  updateAvatarListener();
  removeUpdateAvatarForm();
  createFormListener();
  removeCreateForm();
}
