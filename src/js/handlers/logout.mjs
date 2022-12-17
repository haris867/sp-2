import { logout } from "../api/auth/logout.mjs";

/**
 * Listens for click event on log button and redirects to login page
 * @example
 * ```js
 * handleLogButton()
 * // Redirects to login page after clearing LocalStorage by calling logout function.
 * ```
 */

export function handleLogButton() {
  const logoutButton = document.querySelector(".log-button");
  logoutButton.addEventListener("click", () => {
    logout();
    location.href = "/login.html";
  });
}
