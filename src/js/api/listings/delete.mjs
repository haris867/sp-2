import { authFetch } from "../authFetch.mjs";

export async function deleteListing(id) {
  const deleteListingUrl =
    `https://api.noroff.dev/api/v1/auction/listings/` + id;
  const response = await authFetch(deleteListingUrl, {
    method: "delete",
  });

  return await response.json();
}
