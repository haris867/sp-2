import { updateListing } from "../api/listings/update.mjs";
import { addTagInputs, addImageInputs } from "./formArrays.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

export function updateListingListener() {
  const form = document.querySelector("#updateForm");
  const addTagIcon = document.querySelector(".add-tag-icon-update");
  const addImageIcon = document.querySelector(".add-image-icon-update");
  console.log(addTagIcon);
  addTagIcon.addEventListener("click", addTagInputs);
  addImageIcon.addEventListener("click", addImageInputs);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

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

    var listing = {
      title: title.value,
      description: description.value,
      tags: tags,
      media: images,
    };
    if (!title.value || images === "") {
      delete listing.title;
    }
    if (!images || images === "") {
      delete listing.media;
    }
    if (!description.value || description.value === "") {
      delete listing.description;
    }
    if (!tags || tags === "") {
      delete listing.tags;
    }

    updateListing(listing, id);
    form.reset();
    setTimeout(() => {
      location.reload();
    }, "2000");
  });
}
