import {
  calculate,
  getLenghtTwoString,
  getLengthString,
} from "./linear_algorithms";

describe("calculate", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("sum & product of 1 and 2", () => {
    calculate(1, 2);
    expect(consoleSpy).toHaveBeenCalledWith(3, 2);
  });
  it("sum & product of 1 and 0", () => {
    calculate(1, 0);
    expect(consoleSpy).toHaveBeenCalledWith(1, 0);
  });
  it("sum & product of -1 and 2", () => {
    calculate(-1, 2);
    expect(consoleSpy).toHaveBeenCalledWith(1, -2);
  });
});

describe("getLenghtTwoString", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("total number of characters in strings 'qwerty' and 'qwerty'", () => {
    getLenghtTwoString("qwerty", "qwerty");
    expect(consoleSpy).toHaveBeenCalledWith(12);
  });
  it("total number of characters in strings 'qwerty' and ''", () => {
    getLenghtTwoString("qwerty", "");
    expect(consoleSpy).toHaveBeenCalledWith(6);
  });
  it("total number of characters in strings '' and ''", () => {
    getLenghtTwoString("", "");
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
  it("total number of characters in strings '!@#$%' and '_ _ _'", () => {
    getLenghtTwoString("!@#$%", "_ _ _");
    expect(consoleSpy).toHaveBeenCalledWith(10);
  });
  it("total number of characters in strings '   ' and '            '", () => {
    getLenghtTwoString("   ", "            ");
    expect(consoleSpy).toHaveBeenCalledWith(15);
  });
  it("total number of characters in strings 'qwerty' and 1", () => {
    getLenghtTwoString("qwerty", 1);
    expect(consoleSpy).toHaveBeenCalledWith(7);
  });
  it("total number of characters in strings 'qwerty' and '[1, 2]'", () => {
    getLenghtTwoString("qwerty", [1, 2]);
    expect(consoleSpy).toHaveBeenCalledWith(9);
  });
});

describe("getLengthString", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("sum of digits of 123", () => {
    windowSpy.mockReturnValue("123");
    getLengthString(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(6);
  });
  it("sum of digits of 000", () => {
    windowSpy.mockReturnValue("000");
    getLengthString(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
  it("sum of digits of 999", () => {
    windowSpy.mockReturnValue("999");
    getLengthString(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(27);
  });
  it("sum of digits of 12345", () => {
    windowSpy.mockReturnValue("12345");
    getLengthString(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
  it("sum of digits of 'qwerty'", () => {
    windowSpy.mockReturnValue("qwerty");
    getLengthString(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
});
