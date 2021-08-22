import { getWeek, getMins, getYounger } from "./dates";

describe("getWeek", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("day of week 21.08.2021", () => {
    windowSpy.mockReturnValue("21.08.2021");
    console.log(getWeek(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("сб");
  });
  it("day of week 25.08.2021", () => {
    windowSpy.mockReturnValue("25.08.2021");
    console.log(getWeek(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith("ср");
  });
});

describe("getMins", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("number of minutes since the beginning of the day", () => {
    console.log(getMins());
    const dateNow = new Date();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const date = hours * 60 + minutes;
    expect(consoleSpy).toHaveBeenCalledWith(date);
  });
});

describe("getYounger", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("identify a young user from 01.01.1980 & 01.01.1970", () => {
    console.log(getYounger("01.01.1980", "01.01.1970"));
    expect(consoleSpy).toHaveBeenCalledWith("User1 моложе");
  });
  it("identify a young user from 01.01.1960 & 01.01.1970", () => {
    console.log(getYounger("01.01.1960", "01.01.1970"));
    expect(consoleSpy).toHaveBeenCalledWith("User2 моложе");
  });
});
