import markup from "./dom.js";
import { handleClick, handleChange } from "./functions.js";

export function startFunction() {
  markup();
  handleChange();
  const button = document.getElementById("button");
  const textarea = document.getElementById("textarea");
  button.addEventListener("click", handleClick);
  textarea.addEventListener("input", handleChange);
}

document.addEventListener("DOMContentLoaded", startFunction());
