import * as storage from "../storage/index.mjs";

/**
 * Calls removeUpdateAvatarForm function after one second delay
 * @example
 * ```js
 * removeProfileSettings()
 * // Calls removeUpdateAvatarForm function after one second delay
 * ```
 */

export function removeProfileSettings() {
  setTimeout(removeUpdateAvatarForm, 1000);
}

/**
 * Checks if name of logged in user is equal to name on viewed profile, and if not, removes update avatar form.
 * @example
 * ```js
 * removeUpdateAvatarForm()
 * // Removes update avatar form if name of logged in user and currently viewed profile is not equal.
 * ```
 */
export function removeUpdateAvatarForm() {
  const profileSettingsIcon = document.querySelector(".profile-settings");
  const updateAvatarContainer = document.querySelector("#profile-options");
  const profile = storage.load("profile");
  const profileName = document.querySelector(".profile-name");
  if (!profile || profile.name !== profileName.innerHTML) {
    profileSettingsIcon.remove();
    updateAvatarContainer.remove();
  } else {
    profileSettingsIcon.classList.remove("d-none");
    profileSettingsIcon.style.display = "block";
  }
}
