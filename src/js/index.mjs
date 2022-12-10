import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { getListings } from "./api/listings/read.mjs";
import { displayListings } from "./handlers/listings.mjs";
import { displayListing } from "./handlers/listing.mjs";

const path = location.pathname;

if (path === "/login.html") {
  loginFormListener();
} else if (path === "/register.html") {
  registerFormListener();
} else if (path === "listings.html") {
} else if (path === "listing.html") {
  displayListing();
}

displayListing();
