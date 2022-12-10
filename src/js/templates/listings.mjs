export function renderListings(listings, container) {
  console.log(listings);
  for (let i = 0; i < listings.length; i++) {
    function findHighestBid() {
      const bidData = listings[i].bids.pop();
      if (!bidData) {
        return 0;
      } else {
        return bidData.amount;
      }
    }

    function checkProfileImage(image) {
      if (!image || image === "") {
        return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
      } else {
        return image;
      }
    }

    function checkListingImages(image) {
      if (!image || image === "") {
        return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
      } else {
        return image;
      }
    }
    const listingImage = checkListingImages(listings[i].media[0]);
    const profileImage = checkProfileImage(listings[i].seller.avatar);
    const highestBid = findHighestBid();
    container.innerHTML += `
    <div class="col-12 col-md-9 col-lg-8 col-xl-7 my-4">
         <div class="listing">
            <a href="profile.html/${listings[i].seller.name}">
                <div class="col-12 d-flex author fs-4 fw-bold">
                <img
                    class="rounded-circle m-1 hover-zoom"
                    src="${profileImage}"
                    alt="Profile pic"
                />
                <span class="align-items-center">${listings[i].seller.name}</span>
                </div>
            </a>
            <a href="listing.html?id=${listings[i].id}">
                <img
                class="listing-img mb-3 mt-2"
                src="${listingImage}"
                alt="Image of ${listings[i].title}"
                />
                <div class="col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <p class="fs-4 fw-bold me-2">${listings[i].title}</p>
                </div>
                <div class="d-flex">
                    <span class="highlighted mt-1 me-1">now:</span>
                    <p class="fs-4"><span class="fw-bold">${highestBid}</span> &copy</p>
                </div>
                </div>
            </a>
        </div>
    </div>`;
  }
}
