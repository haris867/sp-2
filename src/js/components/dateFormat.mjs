/**
 * Formats provided date into local format.
 * @param {string} date Date string
 * @example
 * ```js
 * dateFormat(date)
 * // Formats provided date into local format using toLocaleString function.
 * ```
 */
export function dateFormat(date) {
  const time = new Date(date);
  return time.toLocaleString();
}
