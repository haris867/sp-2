import * as storage from "../storage/index.mjs";

export function removeProfileSettings() {
  setTimeout(removeUpdateAvatarForm, 1000);
}

export function removeUpdateAvatarForm() {
  const profileSettingsIcon = document.querySelector(".profile-settings");
  const updateAvatarContainer = document.querySelector("#profile-options");
  const profile = storage.load("profile");
  const profileName = document.querySelector(".profile-name");
  console.log(profileSettingsIcon);
  if (!profile || profile.name !== profileName.innerHTML) {
    profileSettingsIcon.remove();
    updateAvatarContainer.remove();
  } else {
    profileSettingsIcon.classList.remove("d-none");
    profileSettingsIcon.style.display = "block";
  }
}
