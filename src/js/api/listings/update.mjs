import { authFetch } from "../authFetch.mjs";

/**
 * Updates listing values from input fields that contain values, if no errors are present.
 * @param {object} listingData Listing object
 * @param {string} id Listing ID
 * @returns {object} Profile object containing provided ID with updated values
 * @example
 * ```js
 * updateListing(listingData, id)
 * // Updates listing with provided values
 * ```
 */

export async function updateListing(listingData, id) {
  try {
    const updateListingUrl =
      `https://api.noroff.dev/api/v1/auction/listings/` + id;
    const response = await authFetch(updateListingUrl, {
      method: "put",
      body: JSON.stringify(listingData),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * Updates avatar on profile of user who is logged in
 * @param {string} name Profile name
 * @param {string} avatar Avatar image URL
 * @returns {object} Profile object containing provided name with updated avatar
 * @example
 * ```js
 * updateAvatar(name, avatar)
 * // Updates avatar on profile object containing name
 * ```
 */

export async function updateAvatar(name, avatar) {
  try {
    const updateAvatarUrl = `https://api.noroff.dev/api/v1/auction/profiles/${name}/media`;
    const response = await authFetch(updateAvatarUrl, {
      method: "put",
      body: JSON.stringify(avatar),
    });

    location.reload();
    return await response.json();
  } catch (error) {
    return error;
  }
}
