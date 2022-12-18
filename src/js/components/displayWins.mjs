import { getListing } from "../api/listings/read.mjs";

/**
 * Renders bids section in specific format depending on if there are any bids.
 * @param {object} profile Profile object
 * @param {element} winsContainer Wins container
 * @example
 * ```js
 * showWins(profile, winsContainer)
 * // Creates list of won listings in provided profile object, if there are any.
 * ```
 */

export function showWins(profile, winsContainer) {
  const profileWins = profile.wins;
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
