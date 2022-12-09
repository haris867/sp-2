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

  const result = await response.json();
  console.log(result);
}
