import { login } from "../api/auth/login.mjs";
import { checkCredentials } from "../components/checkCredentials.mjs";

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

  checkCredentials;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(profile);
  });
}
