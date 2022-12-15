import { authFetch } from "../authFetch.mjs";

export async function getListings() {
  const listingsUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true&sort=created`;
  const response = await authFetch(listingsUrl);

  return await response.json();
}
export async function getSearchedListings(searchValue) {
  const listingsUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true&sort=created&_tag=${searchValue}`;
  const response = await authFetch(listingsUrl);

  return await response.json();
}
export async function getListing(id) {
  const listingUrl =
    `https://api.noroff.dev/api/v1/auction/listings/` +
    id +
    `?_seller=true&_bids=true`;
  const response = await authFetch(listingUrl);

  return await response.json();
}
export async function getProfile(name) {
  const listingUrl = `https://api.noroff.dev/api/v1/auction/profiles/${name}?_listings=true`;
  const response = await authFetch(listingUrl);

  return await response.json();
}
