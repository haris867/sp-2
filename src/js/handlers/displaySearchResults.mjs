import { getSearchedListings, getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

/**
 * Listens for click event on search button and calls renderListings function with search results.
 * @example
 * ```js
 * displaySearchedListings()
 * // Calls renderListings function to display search results.
 * ```
 */

export async function displaySearchedListings() {
  const searchInput = document.querySelector(".search-field input");
  const searchButton = document.querySelector(".search-button");
  const listingsContainer = document.querySelector(".listings-container");
  const listingsArray = await getListings();

  searchButton.addEventListener("click", search);

  async function search() {
    const listingsArray = await getListings();
    const searchInput = document.querySelector(".search-field input");
    const searchValue = searchInput.value;
    const searchedListings = await getSearchedListings(searchValue);
    const filteredListings = listingsArray.filter(
      (listing) =>
        listing.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        listing.seller.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const searchResults = searchedListings.concat(filteredListings);

    listingsContainer.innerHTML = "";
    renderListings(searchResults, listingsContainer);
  }

  searchInput.onkeyup = function (event) {
    if (event.keyCode === 13) {
      searchButton.click();
    } else if (searchInput.value === "") {
      listingsContainer.innerHTML = "";
      renderListings(listingsArray, listingsContainer);
    }
  };
}
