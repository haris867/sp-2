import * as storage from "../storage/index.mjs";

export function removeUpdateAvatarForm() {
  const updateAvatarIcon = document.querySelector(".profile-settings");
  const updateAvatarContainer = document.querySelector("#update-avatar");
  const profile = storage.load("profile");
  const profileName = document.querySelector(".profile-name");
  console.log(updateAvatarIcon);
  if (!profile || profile.name !== profileName.innerHTML) {
    updateAvatarIcon.remove();
    updateAvatarContainer.remove();
  }
}
