import * as storage from "../storage/index.mjs";

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
