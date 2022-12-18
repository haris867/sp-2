import { getProfile } from "../api/listings/read.mjs";
import { renderProfile } from "../templates/profile.mjs";
import { createFormListener } from "./createListing.mjs";
import { checkCredentials } from "../components/checkCredentials.mjs";

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

  checkCredentials;
  renderProfile(
    profile,
    listingsArray,
    profileContainer,
    profileListingsContainer
  );
  createFormListener();
}
