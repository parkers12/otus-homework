import { getLarger, getMonth, getCompare } from "./conditions";

describe("getLarger", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("return a larger number of 1 and 2", () => {
    console.log(getLarger(1, 2));
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
  it("return a larger number 2 and 0", () => {
    console.log(getLarger(2, 0));
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
  it("return a larger number 2 and 2", () => {
    console.log(getLarger(2, 2));
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
});

describe("getMonth", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("month name for number 1", () => {
    windowSpy.mockReturnValue("1");
    console.log(getMonth(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("Январь");
  });
  it("month name for number 13", () => {
    windowSpy.mockReturnValue("13");
    console.log(getMonth(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
  it("month name for number 5", () => {
    windowSpy.mockReturnValue("5");
    console.log(getMonth(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("Май");
  });
});

describe("getCompare", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("fits a circle into a square if 10 and 20", () => {
    console.log(getCompare(10, 20));
    expect(consoleSpy).toHaveBeenCalledWith("Поместится");
  });
  it("fits a circle into a square if 20 and 10", () => {
    console.log(getCompare(20, 10));
    expect(consoleSpy).toHaveBeenCalledWith("Не поместится");
  });
  it("fits a circle into a square if 155 and 121", () => {
    console.log(getCompare(155, 121));
    expect(consoleSpy).toHaveBeenCalledWith("Не поместится");
  });
});
