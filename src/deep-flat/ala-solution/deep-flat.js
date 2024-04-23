/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 * @param {*} array The function takes an array as input
 * @returns Returns the new flattened array.
 */
export const deepFlat = (array = []) => {
  // The function takes an array as input, defaulting to an empty array if no array is provided.
  // It then uses the reduce method to iterate over the elements of the array and flatten it.
  return array.reduce((acc, val) => {
    // For each element (val) in the array, we check if it's an array using Array.isArray().
    if (Array.isArray(val)) {
      // If it's an array, we recursively call deepFlat to flatten it further.
      // The result is concatenated to the accumulator (acc).
      return acc.concat(deepFlat(val));
    } else {
      // If it's not an array, we simply add it to the accumulator (acc).
      return acc.concat(val);
    }
  }, []);
};
