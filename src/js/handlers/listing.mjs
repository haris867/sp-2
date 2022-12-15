import { getListing } from "../api/listings/read.mjs";
import { renderListing } from "../templates/listing.mjs";
import { updateListingListener } from "./updateListing.mjs";
import { removeUpdateListingForm } from "../templates/hideUpdateListing.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const listingData = await getListing(id);
const listingContainer = document.querySelector(".listing-container");

console.log(id);

export function displayListing() {
  renderListing(listingData, listingContainer);
  updateListingListener();
  removeUpdateListingForm();
}
