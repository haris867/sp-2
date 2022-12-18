import { dateFormat } from "./dateFormat.mjs";
/**
 * Renders bids section in specific format depending on if there are any bids.
 * @param {object} listing Listing object
 * @example
 * ```js
 * displayBids(listing)
 * // Creates view bids section containing bids in the listing object, if there are any.
 * ```
 */

export function displayBids(listing) {
  var bids = "";
  var bidsArray = listing.bids;
  const sortedListings = bidsArray.sort(function (a, b) {
    return b.amount - a.amount;
  });

  for (let i = 0; i < bidsArray.length; i++) {
    const created = bidsArray[i].created;
    const bidCreated = dateFormat(created);
    bids += `<div class="bid mb-4">
                  <div
                    class="col-12 d-flex justify-content-between author fs-4 fw-bold"
                  >
                    <div class="d-flex">
                      <div
                        class="text-center rounded-circle m-1 mb-2 me-2 bids-icon fs-4"
                      />${bidsArray.length - i}</div>
                      <span class="align-self-center text-break">${
                        bidsArray[i].bidderName
                      }</span>
                    </div>
                    <div class="d-flex">
                      <span class="align-self-center">${
                        bidsArray[i].amount
                      } credits</span>
                    </div>
                  </div>
                  <div class="highlighted">
                    <span class="me-3">${bidCreated}</span>
                  </div>
                </div>`;
  }
  return bids;
}
