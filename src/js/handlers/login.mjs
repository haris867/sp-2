import { login } from "../api/auth/login.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Listens for submit event on login form and calls login function with credentials form input fields in form.
 * @example
 * ```js
 * loginFormListener()
 * // Calls login function with credentials from input fields in login form.
 * ```
 */

export function loginFormListener() {
  const form = document.querySelector("#loginForm");
  /**
   * Checks if user is logged in, and if so, redirects to listings page.
   * @example
   * ```js
   * checkCredentials()
   * // Redirects to listings page if user is logged in already.
   * ```
   */
  function checkCredentials() {
    const checkToken = storage.load("token");
    if (checkToken) {
      window.location = "listings.html";
    }
  }

  checkCredentials();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(profile);
  });
}
