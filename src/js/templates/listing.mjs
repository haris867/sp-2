import { checkProfileImage } from "./listings.mjs";
import * as storage from "../storage/index.mjs";

export function renderListing(listing, container) {
  const profile = storage.load("profile");
  console.log(profile);

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
      images += `<div class="col-3">
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
  console.log(date);

  const time = new Date(date);
  const endsAt = time.toLocaleString();

  function displayBids() {
    const bidsArray = listing.bids.reverse();
    console.log(bidsArray);
    for (let i = 0; i < bidsArray.length; i++) {
      bids += `<div class="bid mb-4">
                  <div
                    class="col-12 d-flex justify-content-between author fs-4 fw-bold"
                  >
                    <div class="d-flex">
                      <div
                        class="text-center rounded-circle m-1 mb-2 me-2 bids-icon fs-4"
                      />${bidsArray.length - i}</div>
                      <span class="align-self-center">${
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
                    <span class="me-3">${bidsArray[i].created}</span>
                  </div>
                </div>`;
    }
  }
  var listingDescription = "";
  function displayDescription() {
    if (listing.description) {
      listingDescription = `<div class="col-12 my-5">
                <p class="fs-4 fw-bold">Description</p>
                <p class="fs-5">
                  ${listing.description}
                </p>
              </div>`;
    } else {
      listingDescription = "";
    }
  }
  var image = listing.media[0];
  function checkListingImages(img) {
    if (!img || img === "") {
      return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
    } else {
      return img;
    }
  }

  const listingImg = checkListingImages(image);

  displayDescription();
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
            <h1 class="heading fs-1">${listing.title}</h1>
          </div>
          <div class="col-12 col-md-9 col-lg-8 col-xl-7 my-4">
            <div class="listing">
            <div class="d-flex justify-content-between">
              <a href="profile.html?name=${listing.seller.name}">
                <div class="col-12 d-flex author fs-4 fw-bold">
                  <img
                    class="rounded-circle m-1 hover-zoom"
                    src="${profileImage}"
                    alt="Profile pic"
                  />
                  <span class="align-items-center">${listing.seller.name}</span>
                </div>
              </a>
              <div class="text-center rounded-circle bids-icon position-relative"/><span class="fs-3">${
                listing._count.bids
              }</span>
              </div>
              </div>
              <img
                class="listing-img mb-3 mt-2"
                src="${listingImg}"
                alt="Image of ${listing.title}"
              />
              <div class="col-12 d-flex flex-wrap justify-content-between">
                <div>
                  <p class="fs-4 fw-bold me-2">Highest bid:</p>
                </div>
                <div class="d-flex">
                  <span class="highlighted mt-1 me-1">now:</span>
                  <p><span class="fs-4 fw-bold">${highestBid}</span> credits</p>
                </div>
              </div>
              <div class="row slides mb-4">
                ${images}
              </div>
              <div class="col-12 d-flex justify-content-between mb-4">
                <div>
                  <p class="fs-4 highlighted fw-bold">Ends in:</p>
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
              ${listingDescription}
            </div>
          </div>
        </div>`;
}
