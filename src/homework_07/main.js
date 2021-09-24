import markup from "./dom";
import { handleClick, handleChange } from "./functions";

export function startFunction() {
  markup();
  handleChange();
  const button = document.getElementById("button");
  const textarea = document.getElementById("textarea");
  button.addEventListener("click", handleClick);
  textarea.addEventListener("input", handleChange);
}

document.addEventListener("DOMContentLoaded", startFunction());
