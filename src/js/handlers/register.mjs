import { register } from "../api/auth/register.mjs";

export function registerFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (e) => {
    const successMessage = document.querySelector(".success-message");
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);

    register(profile);
    form.reset();
    successMessage.style.display = "block";
    window.location = "login.html";
  });
}