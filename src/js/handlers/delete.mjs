import { deleteListing } from "../api/listings/delete.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

/**
 * Listens for click event on delete button and calls deleteListing function
 * @example
 * ```js
 * deleteListener()
 * // Calls deleteListing function when delete button is clicked
 * ```
 */

export function deleteListener() {
  const deleteButton = document.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteListing(id);
  });
}
