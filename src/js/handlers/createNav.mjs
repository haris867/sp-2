import * as storage from "../storage/index.mjs";
var name = "";
const profile = storage.load("profile");
const token = storage.load("token");

export function createProfileNav(container) {
  if (token) {
    container.innerHTML = `<ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link profile-link" href="index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link profile-link" href="listings.html"
                    >Listings</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link profile-link" href="profile.html?name=${profile.name}"
                    >Profile</a
                  >
                </li>
                <li class="nav-item">
                  <div class="btn-container d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-outline-primary my-2 log-button"
                    >
                      Log out
                    </button>
                  </div>
                </li>
              </ul>`;
  } else {
    container.innerHTML = `<ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link profile-link" href="index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link profile-link" href="listings.html"
                    >Listings</a
                  >
                </li>
                <li class="nav-item">
                  <div class="btn-container d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-outline-primary my-2 log-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#place-bid"
                      aria-expanded="false"
                      aria-controls="place-bid"
                    >
                      Log in
                    </button>
                  </div>
                </li>
              </ul>`;
  }
}
