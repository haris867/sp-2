import { checkProfileImage } from "./listings.mjs";
import * as storage from "../storage/index.mjs";

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
  console.log(listing);

  /**
   * Checks if name of logged in user is equal to name of creator of currently viewed listing, and if not, removes delete listing icon.
   * @example
   * ```js
   * deleteIconCheck()
   * // Hides delete listing icon if name of logged in user is not equal to name of creator of currently viewed listing.
   * ```
   */
  function deleteIconCheck() {
    if (profile && profile.name === listing.seller.name) {
      return `
      <div class="d-flex justify-content-between text-break">
          <h1 class="heading fs-1">${listing.title}</h1>
          <div class="delete-icon d-flex justify-content-center align-items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" 
                    data-bs-toggle="collapse"
                    data-bs-target="#delete-listing"
                    aria-expanded="false"
                    aria-controls="delete-listing"
                    viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
              </svg>
            </div>
      </div>
          <div class="collapse delete-listing" id="delete-listing">
            <div class="modal-content rounded-4 shadow-lg mb-5 d-flex align-items-center">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Are you sure?</h1>
                </div>
                <div class="modal-body mb-6 p-5 pt-0 d-flex">
                        <button
                          class="py-2 ms-2 btn btn-outline-primary rounded-3 delete-button"
                          type="submit"
                        >
                          DELETE
                        </button>
                </div>
              </div>
            </div>`;
    } else {
      return `<div class="d-flex justify-content-between  text-break">
      <h1 class="heading fs-1">${listing.title}</h1>
        </div>`;
    }
  }

  const deleteIcon = deleteIconCheck();

  /**
   * Checks if name of logged in user is equal to name of creator of currently viewed listing, and if so, removes place bid form. If not logged in, if links to login.
   * @example
   * ```js
   * placeBid()
   * // Creates place bid section based on if user is authorized and/or viewing their own or other users posts.
   * ```
   */

  function placeBid() {
    if (profile && profile.name === listing.seller.name) {
      return "";
    } else if (profile && profile.name !== listing.seller.name) {
      return `<div class="btn-container d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-primary mb-4 place-bid-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#place-bid"
                  aria-expanded="false"
                  aria-controls="place-bid"
                >
                  PLACE BID
                </button>
              </div>
              <div class="collapse" id="place-bid">
                <div class="modal-content rounded-4 shadow-lg mb-5">
                  <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Place your bid</h1>
                    </div>
                    <div class="form-message ms-5 mb-3 fs-5 highlighted"></div>
                  <div class="modal-body mb-6 p-5 pt-0 d-flex">
                  
                    <form id="bidForm" class="d-flex mx-auto">
                      <div class="form-floating mb-3 d-flex">
                        <input
                          name="amount"
                          type="text"
                          class="form-control rounded-3"
                          id="floatingInput"
                          placeholder="Amount"
                        />
                        <label for="floatingInput">Amount</label>
                        <button
                          class="py-2 ms-2 btn btn-outline-primary rounded-3"
                          type="submit"
                        >
                          BID
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>`;
    } else if (!profile) {
      return `<div class="btn-container d-flex justify-content-center">
                <button
                  type="button"
                  class="btn btn-outline-primary mb-4 place-bid-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#place-bid"
                  aria-expanded="false"
                  aria-controls="place-bid"
                >
                  PLACE BID
                </button>
              </div>
              <div class="collapse" id="place-bid">
                <div class="modal-content rounded-4 shadow-lg mb-5">
                    <a href="login.html"
                    class="w-100 py-2 mb-2 d-flex justify-content-center highlighted login-link">Log in to bid</a>
                </div>
              </div>`;
    }
  }

  console.log(placeBid());

  function findHighestBid() {
    const bidData = listing.bids[0];
    if (!bidData) {
      return 0;
    } else {
      return bidData.amount;
    }
  }

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

  function dateFormat(date) {
    const time = new Date(date);
    return time.toLocaleString();
  }

  const endsAt = dateFormat(date);

  /**
   * Renders bids section in specific format depending on if there are any bids.
   * @example
   * ```js
   * displayBids()
   * // Creates view bids section containing bids, if there are any.
   * ```
   */

  function displayBids() {
    var bidsArray = listing.bids;
    const sortedListings = bidsArray.sort(function (a, b) {
      return b.amount - a.amount;
    });

    for (let i = 0; i < bidsArray.length; i++) {
      const created = bidsArray[i].created;
      const bidCreated = dateFormat(created);
      bids += `<div class="bid mb-4">
                  <div
                    class="col-12 d-flex justify-content-between author fs-4 fw-bold"
                  >
                    <div class="d-flex">
                      <div
                        class="text-center rounded-circle m-1 mb-2 me-2 bids-icon fs-4"
                      />${bidsArray.length - i}</div>
                      <span class="align-self-center text-break">${
                        bidsArray[i].bidderName
                      }</span>
                    </div>
                    <div class="d-flex">
                      <span class="align-self-center">${
                        bidsArray[i].amount
                      } credits</span>
                    </div>
                  </div>
                  <div class="highlighted">
                    <span class="me-3">${bidCreated}</span>
                  </div>
                </div>`;
    }
  }
  var listingDescription = "";
  var tags = "";
  function displayDescription() {
    const listingTags = listing.tags;

    if (listingTags[0] !== "" && listingTags.length !== 0) {
      tags = `<p class="fs-4 fw-bold">Tags</p>`;
      listingTags.forEach((tag) => {
        if (tag !== "") {
          tags += `<p class="fs-5 tag-icon mx-2">${tag.toUpperCase()}</p>`;
        }
      });
    }
    console.log(listingTags.length);

    if (listing.description) {
      listingDescription = `<div class="col-12 my-5">
                <p class="fs-4 fw-bold">Description</p>
                <p class="fs-5">
                  ${listing.description}
                </p>
              </div>`;
    }
  }
  var image = listing.media[0];
  console.log(image);

  function checkListingImages(img) {
    if (!img || img === "") {
      return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
    } else {
      return img;
    }
  }

  const listingImg = checkListingImages(image);

  displayDescription();
  console.log(tags);
  displayBids();
  const bidsContent = () => {
    if (bids === "") {
      return `<div class="highlighted fs-4">No bids yet</div>`;
    } else {
      return bids;
    }
  };
  imageSlider();
  const profileImage = checkProfileImage(listing.seller.avatar);
  const highestBid = findHighestBid();

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
                  <p><span class="fs-2 fw-bold">${highestBid}</span> &copy</p>
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
              ${placeBid()}
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
            ${listingDescription}
          </div>
        </div>`;

  const listingPicture = document.querySelectorAll(".listing-img");
  console.log(listingPicture);
  listingPicture.forEach((img) => {
    img.addEventListener("click", selectImage);
  });
  function selectImage() {
    console.log(this.src);
    const thumbnail = document.querySelector(".thumbnail");
    thumbnail.src = this.src;
  }
}
