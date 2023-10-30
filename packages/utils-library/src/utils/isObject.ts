/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export const isObject = (item: any) => {
  return item && typeof item === "object" && !Array.isArray(item);
};
