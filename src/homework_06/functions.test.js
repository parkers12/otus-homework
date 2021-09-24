import { getDiff, isWord, isPow } from "./functions";

describe("getDiff", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("difference between 2 and 5", () => {
    getDiff(2, 5);
    expect(consoleSpy).toHaveBeenCalledWith(3);
  });
  it("difference between 4 and 2", () => {
    getDiff(4, 2);
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
  it("difference between 3 and 3", () => {
    getDiff(3, 3);
    expect(consoleSpy).toHaveBeenCalledWith(0);
  });
});

describe("isWord", () => {
  ["кино", "one", "123"].forEach((string) =>
    it(`string ${string} consists of one word`, () => {
      expect(isWord(string)).toBe(true);
    })
  );
  ["hello world", "привет мир"].forEach((string) =>
    it(`string ${string} consists of one word`, () => {
      expect(isWord(string)).toBe(false);
    })
  );
});

describe("isPow", () => {
  it("2 to the power of 2", () => {
    expect(isPow(2, 2)).toBe(4);
  });
  it("4 to the power of 2", () => {
    expect(isPow(4, 2)).toBe(16);
  });
  it("3 to the power of 3", () => {
    expect(isPow(3, 3)).toBe(27);
  });
});
