import { getArrSum, getNewArr, getArrMinMax } from "./array";

describe("getArrSum", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("sum elements array", () => {
    getArrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(consoleSpy).toHaveBeenCalledWith(55);
  });
});

describe("getNewArr", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("increase array elements", () => {
    getNewArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(consoleSpy).toHaveBeenCalledWith([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
    ]);
  });
});

describe("getArrMinMax", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("Find largest and smallest elements of array", () => {
    getArrMinMax([23, 36, 12, 58, 18, 6, 72, 52, 39, 92]);
    expect(consoleSpy).toHaveBeenCalledWith(6, 92);
  });
});
