import * as storage from "../storage/index.mjs";

/**
 * Checks if name of logged in user is equal to name of creator of viewed listing, and if not, removes update listing form.
 * @example
 * ```js
 * removeUpdateListingForm()
 * // Removes update listing form if name of logged in user and creator of currently viewed listing is not equal.
 * ```
 */

export function removeUpdateListingForm() {
  const editButton = document.querySelector("#updateListingButton");
  const profile = storage.load("profile");
  const editFormContainer = document.querySelector(".edit-container");
  const authorName = document.querySelector(".author-name");
  console.log(editButton);
  if (profile && profile.name === authorName.innerHTML) {
    editButton.classList.remove("d-none");
  } else {
    editButton.remove();
    editFormContainer.remove();
  }
}
