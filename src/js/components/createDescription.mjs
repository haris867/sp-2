/**
 * Checks if tags and description exists on provided listing object, and if so, renders them in given format.
 * @param {object} listing Listing object
 * @example
 * ```js
 * displayDescription(listing)
 * // Renders tags and descrition on provided listing object is they exist.
 * ```
 */

export function displayDescription(listing) {
  var tags = "";
  var listingDescription = "";
  const listingTags = listing.tags;

  if (listingTags[0] !== "" && listingTags.length !== 0) {
    tags = `<p class="fs-4 fw-bold">Tags</p>`;
    listingTags.forEach((tag) => {
      if (tag !== "") {
        tags += `<p class="fs-5 tag-icon mx-2">${tag.toUpperCase()}</p>`;
      }
    });
  }

  if (listing.description) {
    listingDescription = `<div class="col-12 my-5">
                <p class="fs-4 fw-bold">Description</p>
                <p class="fs-5">
                  ${listing.description}
                </p>
              </div>`;
  }
  return tags + listingDescription;
}
