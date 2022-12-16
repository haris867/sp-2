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

  profileContainer.innerHTML = `<div class="profile d-flex justify-content-between col-12 col-md-9 col-lg-8 col-xl-7">
                                  <div class="d-flex">
                                    <img class="rounded-circle me-3"
                                        src="${profileImage}"
                                        alt="Profile pic"/>
                                    <div class="align-self-center">
                                        <div class="fs-2 fw-bolder profile-name">${profile.name}</div>
                                        <div class="fs-5">Credits: ${profile.credits}</div>
                                            </div>
                                            </div>
                                          <div class="profile-settings align-self-center d-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-pencil-square mb-2" data-bs-toggle="collapse" data-bs-target="#update-avatar" aria-expanded="false" aria-controls="update-avatar" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/> <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clipboard-check mb-2" data-bs-toggle="collapse" data-bs-target="#wins-container" aria-expanded="false" aria-controls="wins-container" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                          </svg>
                                          </div>
                                  </div>`;

  listingsContainer.innerHTML += `
    <div class="col-12 col-md-9 col-lg-8 col-xl-7 my-4">
         ${listingResult}
    </div>`;
}
