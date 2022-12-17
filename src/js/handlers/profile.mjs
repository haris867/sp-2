import { getProfile } from "../api/listings/read.mjs";
import { renderProfile } from "../templates/profile.mjs";
import { createFormListener } from "./createListing.mjs";
import * as storage from "../storage/index.mjs";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const name = parameters.get("name");

/**
 * Displays profile by calling renderProfile function.
 * @example
 * ```js
 * displayProfile()
 * // Displays profile by calling renderProfile function with profile, listingsArray, profileContainer and profileListingsContainer.
 * ```
 */

export async function displayProfile() {
  const profile = await getProfile(name);
  const listingsArray = profile.listings;
  const profileContainer = document.querySelector(".profile-container");
  const profileListingsContainer = document.querySelector(
    ".profile-listings-container"
  );

  /**
   * Checks if user is logged in, and if so, redirects to listings page.
   * @example
   * ```js
   * checkCredentials()
   * // Redirects to listings page if user is logged in already.
   * ```
   */

  function checkCredentials() {
    const checkToken = storage.load("token");
    if (!checkToken) {
      window.location = "login.html";
    }
  }

  checkCredentials();
  renderProfile(
    profile,
    listingsArray,
    profileContainer,
    profileListingsContainer
  );
  createFormListener();
}
