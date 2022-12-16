import { login } from "../api/auth/login.mjs";
import * as storage from "../storage/index.mjs";

export function loginFormListener() {
  const form = document.querySelector("#loginForm");
  function checkCredentials() {
    const checkToken = storage.load("token");
    if (checkToken) {
      window.location = "listings.html";
    }
  }

  // checkCredentials();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(profile);
  });
}
