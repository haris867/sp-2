import * as storage from "../storage/index.mjs";

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
