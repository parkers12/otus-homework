import { isDate, isEmail, isPhone } from "./regular_expressions";

describe("isDate", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("is the entered string 12/05/2013 a date", () => {
    windowSpy.mockReturnValue("12/05/2013");
    isDate(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("is the entered string 123-23-37 a date", () => {
    windowSpy.mockReturnValue("123-23-37");
    isDate(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
  it("is the entered string Hello a date", () => {
    windowSpy.mockReturnValue("Hello");
    isDate(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
});

describe("isEmail", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("is the entered string parkers@mail.ru a email", () => {
    windowSpy.mockReturnValue("parkers@mail.ru");
    isEmail(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("is the entered string Hello a email", () => {
    windowSpy.mockReturnValue("Hello");
    isEmail(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
  it("is the entered string 123-34-16 a email", () => {
    windowSpy.mockReturnValue("123-34-16");
    isEmail(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
});

describe("isPhone", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("is the entered string +7 (900) 000 00-00 a phone", () => {
    windowSpy.mockReturnValue("+7 (900) 000 00-00");
    isPhone(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("is the entered string 8(900) 111-2233 a phone", () => {
    windowSpy.mockReturnValue("8(900) 111-2233");
    isPhone(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("is the entered string 89001112233 a phone", () => {
    windowSpy.mockReturnValue("89001112233");
    isPhone(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(true);
  });
  it("is the entered string Hello a phone", () => {
    windowSpy.mockReturnValue("Hello");
    isPhone(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
  it("is the entered string parkers@mail.ru a phone", () => {
    windowSpy.mockReturnValue("parkers@mail.ru");
    isPhone(windowSpy);
    expect(consoleSpy).toHaveBeenCalledWith(false);
  });
});
