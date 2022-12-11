import { logout } from "../api/auth/logout.mjs";
import { createProfileNav } from "./createNav.mjs";

export function handleLogButton() {
  const logoutButton = document.querySelector(".log-button");
  logoutButton.addEventListener("click", () => {
    logout();
    location.href = "/login.html";
  });
}
