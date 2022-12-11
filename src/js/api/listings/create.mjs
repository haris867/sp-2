import { authFetch } from "../authFetch.mjs";

export async function createListing(listingData) {
  const listingsUrl = "https://api.noroff.dev/api/v1/auction/listings";
  const response = await authFetch(listingsUrl, {
    method: "post",
    body: JSON.stringify(listingData),
  });
  location.reload();
  return await response.json();
}

export async function createBid(bid, id) {
  const listingBidUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}/bids`;
  const response = await authFetch(listingBidUrl, {
    method: "post",
    body: JSON.stringify(bid),
  });
  location.reload();
  return await response.json();
}
