import { splitPairs } from './solution-name.js';

describe('split key and value pairs in array', () => {
  describe('object with one key', () => {
    it('should split an object with one key and one value into an array with one pair', () => {
      const expected = [['1', 'Amira']];
      const received = splitPairs({ '1': 'Amira' });
      expect(received).toEqual(expected);
    });

    it('should split an object with two keys and two values into an array with two pairs', () => {
      const expected = [
        ['1', 'Amira'],
        ['2', 'Ashraf'],
      ];
      const received = splitPairs({ '1': 'Amira', '2': 'Ashraf' });
      expect(received).toEqual(expected);
    });

    it('should split an object with 3 keys and 3 values into 3 arrays', () => {
      const expected = [
        ['1', 'Amira'],
        ['2', 'Ashraf'],
        ['3', 'Youns'],
      ];
      const received = splitPairs({ '1': 'Amira', '2': 'Ashraf', '3': 'Youns' });
      expect(received).toEqual(expected);
    });

    it('should split an object with 4 keys and 4 values into 4 arrays ', () => {
      const expected = [
        ['1', 'Amira'],
        ['2', 'Ashraf'],
        ['3', 'Youns'],
        ['4', 'Ala'],
      ];
      const received = splitPairs({
        '1': 'Amira',
        '2': 'Ashraf',
        '3': 'Youns',
        '4': 'Ala',
      });
      expect(received).toEqual(expected);
    });
  });
});
