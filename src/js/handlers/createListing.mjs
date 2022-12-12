import { createListing } from "../api/listings/create.mjs";
import { addtoList } from "../handlers/formArrays.mjs";

export function createFormListener() {
  const form = document.querySelector("#createForm");
  const addInputIcon = document.querySelector(".add-icon");

  addInputIcon.addEventListener("click", addtoList);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const deadline = formData.get("deadline");

    const time = new Date(deadline);

    const [title, description, tags] = form.elements;

    const listing = {
      title: title.value,
      description: description.value,
      endsAt: time,
    };

    createListing(listing);
    form.reset();
  });
}
