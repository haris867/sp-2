/**
 * Checks if image exists, and if not, provides default image.
 * @param {element} image image
 * @example
 * ```js
 * checkImage(image)
 * // Checks if image exists and if so, returns image. If not, it returns default image URL.
 * ```
 */
export function checkImage(image) {
  if (!image || image === "") {
    return "https://user-images.githubusercontent.com/73777398/206862719-84cd2485-da46-475c-aa82-adc8036f28e4.png";
  } else {
    return image;
  }
}
