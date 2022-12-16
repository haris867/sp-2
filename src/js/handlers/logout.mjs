import { logout } from "../api/auth/logout.mjs";

export function handleLogButton() {
  const logoutButton = document.querySelector(".log-button");
  logoutButton.addEventListener("click", () => {
    logout();
    location.href = "/login.html";
  });
}
