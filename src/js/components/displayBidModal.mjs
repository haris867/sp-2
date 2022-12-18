/**
 * Checks if name of logged in user is equal to name of creator of currently viewed listing, and if so, removes place bid form. If not logged in, if links to login.
 * @param {object} profile Profile object
 * @param {object} listing Listing object
 * @example
 * ```js
 * placeBid()
 * // Creates place bid section based on if user is authorized and/or viewing their own or other users posts.
 * ```
 */

export function placeBid(profile, listing) {
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
