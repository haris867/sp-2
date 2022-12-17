import * as storage from "../storage/index.mjs";

/**
 * Renders provided listings array into provided container.
 * @param {object} listing Listings array
 * @param {element} container Listing container
 * @example
 * ```js
 * renderWins(listing, container)
 * // Renders provided listings into provided container.
 * ```
 */

export function renderWins(listing, container) {
  const profile = storage.load("profile");
  console.log(listing);

  var image = listing.media[0];
  console.log(image);

  function checkListingImages(img) {
    if (!img || img === "") {
      return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
    } else {
      return img;
    }
  }

  const listingImg = checkListingImages(image);

  container.innerHTML += `
          <div class="listing">
              <a href="listings.html">
                ${listingImg}
                <div class="row d-flex flex-wrap justify-content-between">
                  <div class="col-12 text-break">
                    <p class="fs-4 fw-bold me-2">${listing.title}/p>
                  </div>
                </div>
              </a>
            </div>`;
}
