/**
 * Function that splits an object into key/value pairs, with each pair returned as a new array.
 * @param {Object} - The object to split into key/value pairs.
 * @returns {Array} Returns new arrays with key/value pair.
 * @example splitPairs({ 1:a , 2:b , 3:c }); => return [[1,a],[2,b],[3,c]];
 */
export const splitPairs = (obj) => {
  return Object.entries(obj);
};
