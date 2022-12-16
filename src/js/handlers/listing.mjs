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
