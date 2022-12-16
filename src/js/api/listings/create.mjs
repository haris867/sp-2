import { authFetch } from "../authFetch.mjs";

export async function createListing(listingData) {
  const listingsUrl = "https://api.noroff.dev/api/v1/auction/listings";
  const response = await authFetch(listingsUrl, {
    method: "post",
    body: JSON.stringify(listingData),
  });
  const result = await response.json();

  const formMessage = document.querySelector(".form-message");

  if (!result) {
    formMessage.innerHTML = "Something went wrong.. Please try again.";
    formMessage.style.display = "block";
  } else {
    formMessage.innerHTML = "Creating listing...";
    formMessage.style.display = "block";
    location.reload();
    return result;
  }
}

export async function createBid(bid, id) {
  const listingBidUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}/bids`;
  const response = await authFetch(listingBidUrl, {
    method: "post",
    body: JSON.stringify(bid),
  });

  const result = await response.json();
  console.log(result);

  const formMessage = document.querySelector(".form-message");

  if (result.errors) {
    formMessage.innerHTML = result.errors[0].message;
    formMessage.style.display = "block";
  } else {
    formMessage.innerHTML = "Adding bid...";
    formMessage.style.display = "block";
    location.reload();
    return result;
  }
}
