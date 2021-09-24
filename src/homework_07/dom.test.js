import dom from "./dom";
import { handleChange, handleClick } from "./functions";

describe("dom", () => {
  dom();
  const button = document.getElementById("button");
  const textarea = document.getElementById("textarea");
  it("button is disabled", () => {
    handleChange();
    expect(button.hasAttribute("disabled")).toBe(true);
  });

  it("button is anabled", () => {
    textarea.value = "text";
    handleChange();
    expect(button.hasAttribute("disabled")).toBe(false);
  });

  it("adding text", () => {
    const numParagrafBefore = document.querySelectorAll(".text p").length;
    textarea.value = "text";
    handleChange();
    handleClick();
    const numParagrafAfter = document.querySelectorAll(".text p").length;
    expect(numParagrafBefore + 1).toBe(numParagrafAfter);
  });

  it("max 5 paragrafs", () => {
    textarea.value = "text";
    handleChange();
    for (let i = 1; i <= 3; i += 1) {
      handleClick();
    }
    const numParagrafAfter = document.querySelectorAll(".text p").length;
    expect(numParagrafAfter).toBe(5);
  });
});
