import { deleteListing } from "../api/listings/delete.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

export function deleteListener() {
  const deleteButton = document.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteListing(id);
  });
}
