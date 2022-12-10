import { authFetch } from "../authFetch.mjs";

export async function createListing(listingData) {
  const listingsUrl = "https://api.noroff.dev/api/v1/auction/listings";
  const response = await authFetch(listingsUrl, {
    method: "post",
    body: JSON.stringify(listingData),
  });

  return await response.json();
}
