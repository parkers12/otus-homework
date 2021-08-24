import {
  getTriangle,
  getCircle,
  getQuadraticEquation,
} from "./mathematical_operations";

describe("getTriangle", () => {
  it("triangle with sides 3, 4, 5 rectangular", () => {
    expect(getTriangle(3, 4, 5)).toBe(true);
  });
  it("triangle with sides 1, 2, 5 rectangular", () => {
    expect(getTriangle(1, 2, 5)).toBe(false);
  });
});

describe("getCircle", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("circumference and area of a circle with a radius of 3", () => {
    windowSpy.mockReturnValue(3);
    console.log(getCircle(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("19", "28");
  });
  it("circumference and area of a circle with a radius of 0", () => {
    windowSpy.mockReturnValue(0);
    console.log(getCircle(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(0, 0);
  });
});

describe("getQuadraticEquation", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("roots of a quadratic equation with coefficients 1, -8, 12", () => {
    windowSpy.mockReturnValue("1, -8, 12");
    console.log(getQuadraticEquation(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("6", "2");
  });
  it("roots of a quadratic equation with coefficients 1, -6, 9", () => {
    windowSpy.mockReturnValue("1, -6, 9");
    console.log(getQuadraticEquation(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("3");
  });
  it("roots of a quadratic equation with coefficients 1, 4, 6", () => {
    windowSpy.mockReturnValue("1, 4, 6");
    console.log(getQuadraticEquation(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("no roots");
  });
});
