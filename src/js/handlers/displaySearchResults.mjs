import { getSearchedListings, getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

export async function displaySearchedListings() {
  const searchInput = document.querySelector(".search-field input");
  const searchButton = document.querySelector(".search-button");
  const listingsContainer = document.querySelector(".listings-container");

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
    console.log(filteredListings);

    const searchResults = searchedListings.concat(filteredListings);
    console.log(searchResults);

    listingsContainer.innerHTML = "";
    renderListings(searchedListings, listingsContainer);
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
