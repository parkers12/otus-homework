import { getSum, getMultiplicationTable, getAverage } from "./cycles";

describe("getSum", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("sum of numbers from 50 to 100", () => {
    getSum(50, 100);
    expect(consoleSpy).toHaveBeenCalledWith(3825);
  });
  it("sum of numbers from 1 to 5", () => {
    getSum(1, 5);
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
});

describe("getMultiplicationTable", () => {
  const consoleSpy = jest.spyOn(console, "log");
  let z = 7;
  it(`multiplication table ${z}`, () => {
    getMultiplicationTable(z);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, `${z} x 1 = ${z * 1}`);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, `${z} x 5 = ${z * 5}`);
    expect(consoleSpy).toHaveBeenNthCalledWith(9, `${z} x 9 = ${z * 9}`);
  });
  z = 5;
  it(`multiplication table ${z}`, () => {
    getMultiplicationTable(z);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, `${z} x 1 = ${z * 1}`);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, `${z} x 5 = ${z * 5}`);
    expect(consoleSpy).toHaveBeenNthCalledWith(9, `${z} x 9 = ${z * 9}`);
  });
});

describe("getAverage", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("arithmetic mean of all odd numbers from 1 to 5", () => {
    windowSpy.mockReturnValue("5");
    getAverage(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(3);
  });
  it("arithmetic mean of all odd numbers from 1 to 500", () => {
    windowSpy.mockReturnValue("500");
    getAverage(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(250);
  });
  it("arithmetic mean of all odd numbers from 1 to 2", () => {
    windowSpy.mockReturnValue("2");
    getAverage(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(1);
  });
});
