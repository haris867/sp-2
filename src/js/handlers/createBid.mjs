import { createBid } from "../api/listings/create.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
import * as storage from "../storage/index.mjs";
const token = storage.load("token");

export function bidFormListener() {
  console.log(token);
  const form = document.querySelector("#bidForm");
  if (token) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      const bidAmount = form.amount.value;
      const bid = {
        amount: Number(bidAmount),
      };

      console.log(bid);

      createBid(bid, id);
      form.reset();
      setTimeout(() => {
        location.reload();
      }, "2000");
    });
  }
}
