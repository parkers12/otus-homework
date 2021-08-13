import { getSum, getMultiplicationTable, getAverage } from "./cycles";

describe("getSum", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("sum of numbers from 50 to 100", () => {
    console.log(getSum(50, 100));
    expect(consoleSpy).toHaveBeenCalledWith(3825);
  });
  it("sum of numbers from 1 to 5", () => {
    console.log(getSum(1, 5));
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
});

describe("getMultiplicationTable", () => {
  const consoleSpy = jest.spyOn(console, "log");
  let z = 7;
  it(`multiplication table ${z}`, () => {
    console.log(getMultiplicationTable(z));
    let n = 1;
    while (n < 10) {
      expect(consoleSpy).toHaveBeenCalledWith(`${z} x ${n} = ${z * n}`);
      n += 1;
    }
  });
  z = 5;
  it(`multiplication table ${z}`, () => {
    console.log(getMultiplicationTable(z));
    let n = 1;
    while (n < 10) {
      expect(consoleSpy).toHaveBeenCalledWith(`${z} x ${n} = ${z * n}`);
      n += 1;
    }
  });
});

describe("getAverage", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("arithmetic mean of all odd numbers from 1 to 5", () => {
    windowSpy.mockReturnValue("5");
    console.log(getAverage(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(3);
  });
  it("arithmetic mean of all odd numbers from 1 to 500", () => {
    windowSpy.mockReturnValue("500");
    console.log(getAverage(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(250);
  });
  it("arithmetic mean of all odd numbers from 1 to 2", () => {
    windowSpy.mockReturnValue("2");
    console.log(getAverage(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(1);
  });
});
