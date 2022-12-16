import { updateAvatar } from "../api/listings/update.mjs";
import * as storage from "../storage/index.mjs";
export function updateAvatarListener() {
  const form = document.querySelector("#updateAvatarForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const profile = storage.load("profile");

    const name = profile.name;
    console.log(name);
    const form = e.target;

    const updateImageUrl = form.updateImageUrl.value;
    const updateAvatarImage = {
      avatar: updateImageUrl,
    };
    console.log(updateAvatarImage);
    updateAvatar(name, updateAvatarImage);
    // location.reload();
  });
}
