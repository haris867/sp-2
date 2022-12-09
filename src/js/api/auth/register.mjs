export async function register(profile) {
  const registerUrl = "https://api.noroff.dev/api/v1/auction/auth/register";
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: body,
  });

  const result = await response.json();
  console.log(result);
}
