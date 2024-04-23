import { deepFlat } from './deep-flat.js';

describe('Converts a nested array into a single array with no nesting', () => {
  it('an empty array should return an empty array', () => {
    expect(deepFlat([])).toEqual([]);
  });

  it('[1, [2, [3, [4]], 5]]-> [1, 2, 3, 4, 5]', () => {
    expect(deepFlat([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('["a", ["b", ["c"], ["g"]], "h"]]-> ["a", "b", "c", "g", "h"]', () => {
    expect(deepFlat(['a', ['b', ['c'], ['g']], 'h'])).toEqual([
      'a',
      'b',
      'c',
      'g',
      'h',
    ]);
  });
});
