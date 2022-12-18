import { checkImage } from "./imageCheck.mjs";

/**
 * Renders listings into specific format, if they exist.
 * @param {array} listings Listings array
 * @example
 * ```js
 * checkListings(listings)
 * // Renders listings into specific format, if they exist, and if not, displays message.
 * ```
 */

export function checkListings(listings) {
  var listingResult = "";
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
      const listingImage = checkImage(listings[i].media[0]);

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
  return listingResult;
}
