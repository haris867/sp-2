import { authFetch } from "../authFetch.mjs";

/**
 * Retrieves array of listings from the API, if there are no errors present.
 * @returns {array} Array of 50 listings
 * @example
 * ```js
 * getListings()
 * // Retrieves array of 50 active listings
 * ```
 */

export async function getListings() {
  try {
    const listingsUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true&sort=created&limit=50`;
    const response = await authFetch(listingsUrl);

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Retrieves array of listings from the API containing provided search value, if there are no errors present.
 * @param {string} searchValue Search input value
 * @returns {array} Array of listings
 * @example
 * ```js
 * getSearchedListing(searchValue)
 * // Retrieves array of 50 listings containing searchValue
 * ```
 */
export async function getSearchedListings(searchValue) {
  try {
    const listingsUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true&sort=created&_tag=${searchValue}`;
    const response = await authFetch(listingsUrl);

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Retrieves listing object containing provided ID
 * @param {string} id Listing-ID
 * @returns {object} Listing belonging to provided ID
 * @example
 * ```js
 * getListing(id)
 * // Retrieves a listing containing provided ID
 * ```
 */

export async function getListing(id) {
  try {
    const listingUrl =
      `https://api.noroff.dev/api/v1/auction/listings/` +
      id +
      `?_seller=true&_bids=true`;
    const response = await authFetch(listingUrl);

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Retrieves array of listings from the API, if there are no errors present.
 * @param {string} name Profile name
 * @returns {object} Profile object containing provided name
 * @example
 * ```js
 * getProfile(name)
 * // Retrieves profile belonging to provided name
 * ```
 */

export async function getProfile(name) {
  try {
    const listingUrl = `https://api.noroff.dev/api/v1/auction/profiles/${name}?_listings=true`;
    const response = await authFetch(listingUrl);

    return await response.json();
  } catch (error) {
    return error;
  }
}
