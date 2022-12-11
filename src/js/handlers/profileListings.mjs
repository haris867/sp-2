import { getProfile } from "../api/listings/read.mjs";
import { renderProfile } from "../templates/profileListings.mjs";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const name = parameters.get("name");

const profile = await getProfile(name);
const listingsArray = profile.listings;
const profileContainer = document.querySelector(".profile-container");
const profileListingsContainer = document.querySelector(
  ".profile-listings-container"
);

export function displayProfile() {
  renderProfile(
    profile,
    listingsArray,
    profileContainer,
    profileListingsContainer
  );
}
