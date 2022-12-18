import { checkImage } from "../components/imageCheck.mjs";
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

  var image = listing.media[0];

  const listingImg = checkImage(image);

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
