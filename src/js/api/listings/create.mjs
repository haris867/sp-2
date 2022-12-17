import { authFetch } from "../authFetch.mjs";

/**
 * Submits create listing form to the API if there are no errors present.
 * @param {object} listingData
 * @example
 * ```js
 * createListing(listing);
 * // Listing is created from data in input fields in the form, as long as there are no errors. If not, error message will be displayed inside form.
 * ```
 */

export async function createListing(listingData) {
  try {
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
  } catch (error) {
    return error;
  }
}

/**
 * Submits bidding form to the API if there are no errors present
 * @param {element} form
 * @param {string} id
 * @example
 * ```js
 * createBid(bid, id);
 * // Bid is created from input field in the form, as long as there are no errors. If not, error message will be displayed inside form.
 * ```
 */

export async function createBid(bid, id) {
  try {
    const listingBidUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}/bids`;
    const response = await authFetch(listingBidUrl, {
      method: "post",
      body: JSON.stringify(bid),
    });

    const result = await response.json();
    console.log(result);

    const formMessage = document.querySelector(".form-message");

    if (result.errors) {
      formMessage.innerHTML =
        result.errors[0].message +
        `. Check out other listings <a href="listings.html" class="highlighted">HERE</a>!`;
      formMessage.style.display = "block";
    } else {
      formMessage.innerHTML = "Adding bid...";
      formMessage.style.display = "block";
      location.reload();
      return result;
    }
  } catch (error) {
    return error;
  }
}
