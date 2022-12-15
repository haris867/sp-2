import { getSearchedListings, getListings } from "../api/listings/read.mjs";
import { renderListings } from "../templates/listings.mjs";

export async function displaySearchedListings() {
  const listingsArray = await getListings();
  const searchInput = document.querySelector(".search-field input");
  const searchValue = searchInput.value;
  const searchedListings = await getSearchedListings(searchValue);
  const searchButton = document.querySelector(".search-button");
  const listingsContainer = document.querySelector(".listings-container");
  console.log(listingsContainer);

  searchButton.addEventListener("click", search);

  async function search() {
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
