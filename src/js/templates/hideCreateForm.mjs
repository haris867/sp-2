import * as storage from "../storage/index.mjs";

/**
 * Checks if name of logged in user is equal to name on viewed profile, and if not, removes create listing form.
 * @example
 * ```js
 * removeCreateForm()
 * // Removes create listing form if name of logged in user and currently viewed profile is not equal.
 * ```
 */

export function removeCreateForm() {
  const createIcon = document.querySelector(".listings-title svg");
  const profile = storage.load("profile");
  const createFormContainer = document.querySelector("#place-bid");
  const profileName = document.querySelector(".profile-name");
  if (!profile || profile.name !== profileName.innerHTML) {
    createIcon.remove();
    createFormContainer.remove();
  }
}
