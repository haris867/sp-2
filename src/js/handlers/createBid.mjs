import { createBid } from "../api/listings/create.mjs";
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
import * as storage from "../storage/index.mjs";
const token = storage.load("token");

/**
 * Listens for submit event on bid form and creates a bid using form input value
 * @example
 * ```js
 * bidFormListener()
 * // Calls createBid function using provided input value
 * ```
 */

export function bidFormListener() {
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

      createBid(bid, id);
      form.reset();
    });
  }
}
