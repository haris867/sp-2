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
export async function updateAvatar(name, avatar) {
  const updateAvatarUrl = `https://api.noroff.dev/api/v1/auction/profiles/${name}/media`;
  const response = await authFetch(updateAvatarUrl, {
    method: "put",
    body: JSON.stringify(avatar),
  });

  return await response.json();
}
