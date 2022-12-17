import { getListing } from "../api/listings/read.mjs";
import { renderListing } from "../templates/listing.mjs";
import { updateListingListener } from "./updateListing.mjs";
import { bidFormListener } from "./createBid.mjs";
import { deleteListener } from "./delete.mjs";
import { removeUpdateListingForm } from "../templates/hideUpdateListing.mjs";
import * as storage from "../storage/index.mjs";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const profile = storage.load("profile");
console.log(profile);

console.log(id);

/**
 * Renders listing by calling renderListing function with listingData and listingContainer.
 * @example
 * ```js
 * displayListing()
 * // Displays listing by calling renderListing function with ID from query string.
 * ```
 */

export async function displayListing() {
  const listingData = await getListing(id);
  const listingContainer = document.querySelector(".listing-container");
  renderListing(listingData, listingContainer);
  const authorName = document.querySelector(".author-name");

  if (profile) {
    removeUpdateListingForm();
  }
  if (profile.name !== authorName.innerHTML) {
    bidFormListener();
  }
  if (profile.name === authorName.innerHTML) {
    deleteListener();
  }
  if (profile) {
    updateListingListener();
  }
}
