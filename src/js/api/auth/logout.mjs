import * as storage from "../../storage/index.mjs";

export function logout() {
  storage.remove("token");
  storage.remove("profile");

  location.href = "/index.html";
}
