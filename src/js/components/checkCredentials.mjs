/**
 * Checks if user is logged in, and if so, redirects to listings page.
 * @example
 * ```js
 * checkCredentials()
 * // Redirects to listings page if user is logged in already.
 * ```
 */

export function checkCredentials() {
  const checkToken = storage.load("token");
  if (!checkToken) {
    window.location = "login.html";
  }
}
