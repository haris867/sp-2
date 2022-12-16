import { getListing } from "../api/listings/read.mjs";
import { renderWins } from "../templates/wins.mjs";

export async function displayWins(idArray) {
  const listingsArray = await getListing();
  const winsContainer = document.querySelector(".wins-listings-container");
  console.log(idArray);
}
