import * as storage from "../../storage/index.mjs";
export async function login(profile) {
  const loginUrl = "https://api.noroff.dev/api/v1/auction/auth/login";
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: body,
    });
    const result = await response.json();
    const { accessToken, ...user } = result;

    const formMessage = document.querySelector(".form-message");

    if (result.errors) {
      formMessage.innerHTML = result.errors[0].message;
      formMessage.style.display = "block";
    } else {
      formMessage.innerHTML = "Logging in...";
      formMessage.style.display = "block";
      storage.save("token", accessToken);
      storage.save("profile", user);
      location.href = "/listings.html";
    }
  } catch (error) {
    return error;
  }
}
