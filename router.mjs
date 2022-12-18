import { registerFormListener } from "././src/js/handlers/register.mjs";
import { loginFormListener } from "././src/js/handlers/login.mjs";
import { displayListings } from "././src/js/handlers/listings.mjs";
import { displayListing } from "././src/js/handlers/listing.mjs";
import { createFormListener } from "././src/js/handlers/createListing.mjs";
import { displayProfile } from "././src/js/handlers/profile.mjs";
import { removeCreateForm } from "./src/js/components/hideCreateForm.mjs";
import { displaySearchedListings } from "././src/js/handlers/displaySearchResults.mjs";
import { updateAvatarListener } from "././src/js/handlers/updateAvatar.mjs";
import { removeProfileSettings } from "./src/js/components/hideUpdateAvatar.mjs";

export function router() {
  const path = location.pathname;

  switch (path) {
    case "/login.html":
      console.log("Hey");
      loginFormListener();
      break;
    case "/register.html":
      registerFormListener();
      break;
    case "/listings.html":
      displayListings();
      displaySearchedListings();
      break;
    case "/listing.html":
      displayListing();
      break;
    case "/profile.html":
      displayProfile();
      updateAvatarListener();
      removeProfileSettings();
      removeCreateForm();
      break;
  }
}
