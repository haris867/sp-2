import * as storage from "../../handlers/storage.mjs";
export async function login(profile) {
  const loginUrl = "https://api.noroff.dev/api/v1/auction/auth/login";
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);
  storage.save("profile", user);
}
