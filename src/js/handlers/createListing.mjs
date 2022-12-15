import { createListing } from "../api/listings/create.mjs";
import { addTagInputs } from "../handlers/formArrays.mjs";
import { addImageInputs } from "../handlers/formArrays.mjs";

export function createFormListener() {
  const form = document.querySelector("#createForm");
  const addTagIcon = document.querySelector(".add-tag-icon");
  const addImageIcon = document.querySelector(".add-image-icon");
  addTagIcon.addEventListener("click", addTagInputs);
  addImageIcon.addEventListener("click", addImageInputs);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const deadline = formData.get("deadline");

    // DONT NEED FORMDATA OBJECT HERE because line 22

    const time = new Date(deadline);
    const title = form.title;

    var tags = [];
    const tagInputs = document.querySelectorAll(`input[name="tags"]`);

    tagInputs.forEach((input) => {
      if (input.value !== "") {
        tags.push(input.value);
      }
    });

    var images = [];
    const imageInputs = document.querySelectorAll(`input[name="image-url"]`);

    imageInputs.forEach((input) => {
      if (input.value !== "") {
        images.push(input.value);
      }
    });

    const listing = {
      title: title.value,
      description: description.value,
      endsAt: time,
      tags: tags,
      media: images,
    };

    createListing(listing);
    form.reset();
    setTimeout(() => {
      location.reload();
    }, "2000");
  });
}
