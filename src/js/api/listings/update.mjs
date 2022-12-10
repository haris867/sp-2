import { authFetch } from "../authFetch.mjs";

export async function updateListing(listingData) {
  const updateListingUrl =
    `https://api.noroff.dev/api/v1/auction/listings/` + listingData.id;
  const response = await authFetch(updateListingUrl, {
    method: "put",
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
