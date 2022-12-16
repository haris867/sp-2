import { getListing } from "../api/listings/read.mjs";
import { displayWins } from "../handlers/wins.mjs";
import { renderWins } from "./wins.mjs";

export function renderProfile(
  profile,
  listings,
  profileContainer,
  listingsContainer
) {
  var winsContainer = document.querySelector(".wins-listings-container");
  function showWins() {
    displayWins(profile.wins);
    const profileWins = profile.wins;
    console.log(profileWins);
    if (!profileWins || profileWins.length === 0) {
      winsContainer.innerHTML = "No wins yet";
    } else if (profileWins && profileWins[0] !== "") {
      profileWins.forEach(async (id) => {
        var win = await getListing(id);
        winsContainer.innerHTML += `<div class="listing">
              <a href="listing.html?id=${id}">
                <img
                  class="listing-img mb-3 mt-2"
                  src="${win.media[0]}"
                  alt="Image of ${win.title}"
                />
                <div class="row d-flex flex-wrap justify-content-between">
                  <div class="col-12 text-break">
                    <p class="fs-4 fw-bold me-2">${win.title}</p>
                  </div>
                </div>
              </a>
            </div>`;
      });
    }
  }

  showWins();

  var listingResult = "";
  function checkListings() {
    if (listings.length < 1) {
      listingResult += `<div class="listing">
            <h4 class="highlighted">No listings yet</h4>
        </div>`;
    } else if (listings.length >= 1) {
      const sortedListings = listings.sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
      });

      console.log(sortedListings);
      for (let i = 0; i < sortedListings.length; i++) {
        function checkListingImages(image) {
          if (!image || image === "") {
            return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
          } else {
            return image;
          }
        }

        const listingImage = checkListingImages(listings[i].media[0]);

        console.log(listings);

        listingResult += `<div class="listing">
            <a href="listing.html?id=${listings[i].id}">
                <img
                class="listing-img mb-3 mt-2"
                src="${listingImage}"
                alt="Image of ${listings[i].title}"
                />
                <div class="row d-flex flex-wrap justify-content-between">
                <div class="col-12 text-break">
                    <p class="fs-4 fw-bold me-2">${listings[i].title}</p>
                </div>
                </div>
            </a>
        </div>`;
      }
    }
  }

  checkListings();

  function checkProfileImage(image) {
    if (!image || image === "") {
      return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
    } else {
      return image;
    }
  }
  const profileImage = checkProfileImage(profile.avatar);

  profileContainer.innerHTML = `
    <div class="profile d-flex justify-content-between col-12 col-md-9 col-lg-8 col-xl-7">
    <div class="d-flex">
            <img
              class="rounded-circle me-4"
              src="${profileImage}"
              alt="Profile pic"
            />
            <div class="align-self-center">
              <div class="fs-2 fw-bolder profile-name">${profile.name}</div>
              <div class="fs-4">Credits: ${profile.credits}</div>
            </div>
            </div>
            <div class="profile-settings align-self-center d-none"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-three-dots-vertical" data-bs-toggle="collapse"
                  data-bs-target="#profile-options"
                  aria-expanded="false"
                  aria-controls="profile-options" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg></div>
          </div>
          `;
  listingsContainer.innerHTML += `
    <div class="col-12 col-md-9 col-lg-8 col-xl-7 my-4">
         ${listingResult}
    </div>`;
}
