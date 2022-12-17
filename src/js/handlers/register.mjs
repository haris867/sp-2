import { register } from "../api/auth/register.mjs";

/**
 * Listens for submit event on register form and calls register function with values from form input fields.
 * @example
 * ```js
 * registerFormListener()
 * // Calls register function with value from form input fields in.
 * ```
 */

export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    register(profile);
    form.reset();
  });
}
