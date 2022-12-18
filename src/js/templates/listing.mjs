import { checkImage } from "../components/imageCheck.mjs";
import { placeBid } from "../components/displayBidModal.mjs";
import { deleteIconCheck } from "../components/checkDeleteIcon.mjs";
import { dateFormat } from "../components/dateFormat.mjs";
import { displayBids } from "../components/displayBids.mjs";
import * as storage from "../storage/index.mjs";
import { displayDescription } from "../components/createDescription.mjs";
import { findHighestBid } from "../components/checkHighestBid.mjs";

/**
 * Renders provided listing into specific format according to if user is logged in.
 * @param {object} listing Listing data
 * @param {element} container Listing container
 * @example
 * ```js
 * renderListing(listing, container)
 * // Renders provided listing into specific format, with and without certain components, depending if user is authorized.
 * ```
 */

export function renderListing(listing, container) {
  const profile = storage.load("profile");

  const deleteIcon = deleteIconCheck(profile, listing);

  var images = "";

  function imageSlider() {
    const imageContainer = document.querySelector(".slides");

    const imageArray = listing.media;
    imageArray.forEach((image) => {
      images += `<div class="col-3 mb-2">
                  <img
                    class="listing-img"
                    src="${image}"
                    alt="Image of ${listing.title}"
                  />
                </div>`;
    });
  }
  var bids = "";

  const date = listing.endsAt;

  const endsAt = dateFormat(date);

  var tags = "";

  var image = listing.media[0];

  const listingImg = checkImage(image);

  const bidsContent = () => {
    if (displayBids(listing) === "") {
      return `<div class="highlighted fs-4">No bids yet</div>`;
    } else {
      return displayBids(listing);
    }
  };

  imageSlider();
  const profileImage = checkImage(listing.seller.avatar);

  container.innerHTML = `
          <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-9 col-lg-9 col-xl-8">
          ${deleteIcon}
          <div class="col-12 my-4">
            <div class="listing">
            <div class="d-flex justify-content-between">
              <a href="profile.html?name=${listing.seller.name}">
                <div class="col-12 d-flex author fs-4 fw-bold">
                  <img
                    class="rounded-circle m-1 hover-zoom"
                    src="${profileImage}"
                    alt="Profile pic"
                  />
                  <span class="author-name align-items-center">${
                    listing.seller.name
                  }</span>
                </div>
              </a>
              <div class="d-flex justify-content-center align-items-center rounded-circle bids-icon position-relative"/><span class="fs-3">${
                listing._count.bids
              }</span>
              </div>
              </div>
              <img
                class="listing-img mb-3 mt-2 thumbnail"
                src="${listingImg}"
                alt="Image of ${listing.title}"
              />
              <div class="col-12 d-flex flex-wrap justify-content-between">
                <div class="d-flex align-items-center">
                  <p class="fs-4 fw-bold me-2">Highest bid:</p>
                </div>
                <div class="d-flex align-items-center">
                  <span class="highlighted mb-3 me-2">now:</span>
                  <p><span class="fs-2 fw-bold">${findHighestBid(
                    listing
                  )}</span> &copy</p>
                </div>
              </div>
              <div class="row slides mb-4">
                ${images}
              </div>
              <div class="col-12 d-flex justify-content-between mb-4">
                <div>
                  <p class="fs-4 highlighted fw-bold">Deadline:</p>
                </div>
                <div class="d-flex fs-5">
                ${endsAt}
                </div>
              </div>
              ${placeBid(profile, listing)}
              <div class="btn-container d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-secondary mb-4"
                  data-bs-toggle="collapse"
                  data-bs-target="#view-bids"
                  aria-expanded="false"
                  aria-controls="view-bids"
                >
                  VIEW BIDS
                </button>
              </div>
              <div class="bids col-12 mb-5 mt-3 collapse" id="view-bids">
                <p class="fs-4 fw-bold">Bids</p>
                ${bidsContent()}
              </div>
              <div class="col-12 my-5">
                  ${tags}
            </div>
            ${displayDescription(listing)}
          </div>
        </div>`;

  const listingPicture = document.querySelectorAll(".listing-img");
  listingPicture.forEach((img) => {
    img.addEventListener("click", selectImage);
  });
  /**
   * Displays clicked photo in thumbnail container
   * @example
   * ```js
   * selectImage()
   * // Changes image src of thumbnai to src of clicked image
   * ```
   */
  function selectImage() {
    console.log(this.src);
    const thumbnail = document.querySelector(".thumbnail");
    thumbnail.src = this.src;
  }
}
