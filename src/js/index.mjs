import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === "/login.html") {
  loginFormListener();
} else if (path === "/register.html") {
  registerFormListener();
}
