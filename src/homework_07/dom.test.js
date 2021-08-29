import {} from "./dom";

describe("dom", () => {
  const button = document.getElementById("button");
  const textarea = document.getElementById("textarea");
  it("button is disabled", () => {
    expect(button.hasAttribute("disabled")).toBe(true);
  });
  it("button is anabled", () => {
    textarea.value = "text";
    button.disabled = !textarea.value;
    expect(button.hasAttribute("disabled")).toBe(false);
  });

  it("adding text", () => {
    const numParagrafBefore = document.querySelectorAll(".text p").length;
    textarea.value = "text";
    button.disabled = !textarea.value;
    button.click();
    let data;
    const numParagrafAfter = document.querySelectorAll(".text p").length;
    if (numParagrafBefore + 1 === numParagrafAfter) {
      data = true;
    } else {
      data = false;
    }
    expect(data).toBe(true);
  });

  it("max 5 paragrafs", () => {
    textarea.value = "text";
    button.disabled = !textarea.value;
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    button.click();
    const numParagrafAfter = document.querySelectorAll(".text p").length;
    expect(numParagrafAfter).toBe(5);
  });
});
