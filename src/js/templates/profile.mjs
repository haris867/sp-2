export function renderProfile(
  profile,
  listings,
  profileContainer,
  listingsContainer
) {
  const sortedListings = listings.sort(function (a, b) {
    return new Date(b.created) - new Date(a.created);
  });
  console.log(sortedListings);
  for (let i = 0; i < sortedListings.length; i++) {
    function checkListingImages(image) {
      if (!image || image === "") {
        return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
      } else {
        return image;
      }
    }
    function checkProfileImage(image) {
      if (!image || image === "") {
        return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
      } else {
        return image;
      }
    }
    const listingImage = checkListingImages(listings[i].media[0]);
    const profileImage = checkProfileImage(profile.avatar);
    profileContainer.innerHTML = `
    <div class="profile d-flex col-12 col-md-9 col-lg-8 col-xl-7">
            <img
              class="rounded-circle me-2"
              src="${profileImage}"
              alt="Profile pic"
            />
            <div class="align-self-center">
              <div class="fs-2 fw-bolder">${profile.name}</div>
              <div class="fs-4">Credits: ${profile.credits}</div>
            </div>
          </div>`;
    listingsContainer.innerHTML += `
    <div class="col-12 col-md-9 col-lg-8 col-xl-7 my-4">
         <div class="listing">
         <div class="d-flex justify-content-end">
          </div>
            <a href="listing.html?id=${listings[i].id}">
                <img
                class="listing-img mb-3 mt-2"
                src="${listingImage}"
                alt="Image of ${listings[i].title}"
                />
                <div class="row d-flex flex-wrap justify-content-between">
                <div class="col-8 text-wrap">
                    <p class="fs-4 fw-bold me-2">${listings[i].title}</p>
                </div>
                </div>
            </a>
        </div>
    </div>`;
  }
}
