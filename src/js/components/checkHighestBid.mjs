/**
 * Checks listing object for bids and return highest bid, if it exists.
 * @param {object} listings Listing object
 * @example
 * ```js
 * findHighestBid(listing)
 * // Checks bids array in listing object and return the highest bid, or 0 if there are no bids.
 * ```
 */

export function findHighestBid(listing) {
  var bidsArray = listing.bids;
  const sortedListings = bidsArray.sort(function (a, b) {
    return b.amount - a.amount;
  });
  if (sortedListings[0]) {
    const highestAmount = sortedListings[0].amount;
    return highestAmount;
  } else {
    return 0;
  }
}
