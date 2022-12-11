import { createBid } from "../api/listings/create.mjs";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

export function bidFormListener() {
  const form = document.querySelector("#bidForm");
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
  });
}
