import { solutionName } from './solution-name.js';

describe('', () => {
  it('array with two numbers ', () => {
    expect([1, 0.5]).toEqual([0.5, 1]);
  });
  it('array with many numbers ', () => {
    expect([1, 5, 30, 17]).toEqual([1, 5, 17, 30]);
  });
  it('array with minus numbers ', () => {
    expect([-13, -5, -1]).toEqual([-13, -5, -1]);
  });
  it('array with  numbers and strings ', () => {
    expect([1, 0.5]).toEqual([0.5, 1]);
  });
});
