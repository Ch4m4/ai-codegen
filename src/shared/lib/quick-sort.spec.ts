import { quickSort } from './quick-sort';

describe('quickSort', () => {
  it('should sort the array', () => {
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quickSort([3, 2, 1, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(quickSort([6, 5, 4, 3, 2, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(quickSort([0, 1, 2, 3, 4, 5, 6])).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});
