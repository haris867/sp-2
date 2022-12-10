import { getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

const listingsArray = await getListings();
const listingsContainer = document.querySelector(".listings-container");

export function displayListings() {
  renderListings(listingsArray, listingsContainer);
}
