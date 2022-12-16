import { getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

export async function displayListings() {
  const listingsArray = await getListings();
  const listingsContainer = document.querySelector(".listings-container");
  renderListings(listingsArray, listingsContainer);
}
