import { getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

/**
 * Renders listings by calling renderListings function with listingArray and listingContainer.
 * @example
 * ```js
 * displayListings()
 * // Displays listings by calling renderListings function.
 * ```
 */

export async function displayListings() {
  const listingsArray = await getListings();
  const listingsContainer = document.querySelector(".listings-container");
  renderListings(listingsArray, listingsContainer);
}
