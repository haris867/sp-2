import { authFetch } from "../authFetch.mjs";

/**
 * Submits request to the API to delete listing belonging to provided ID
 * @param {string} id
 * @example
 * ```js
 * deleteListing(id);
 * // Listing belonging to provided ID will be deleted.
 * ```
 */

export async function deleteListing(id) {
  try {
    const deleteListingUrl =
      `https://api.noroff.dev/api/v1/auction/listings/` + id;
    const response = await authFetch(deleteListingUrl, {
      method: "delete",
    });

    location.href = "/listings.html";
    return await response.json();
  } catch (error) {
    return error;
  }
}
