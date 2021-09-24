export function handleChange() {
  const textarea = document.getElementById("textarea");
  const button = document.getElementById("button");
  if (!textarea.value) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function clear() {
  const textarea = document.getElementById("textarea");
  textarea.value = "";
  handleChange();
}

function counter() {
  const count = document.querySelectorAll(".text p");
  if (count.length > 5) {
    const del = document.querySelector(".text p");
    del.remove();
  }
}

export function handleClick() {
  const textarea = document.getElementById("textarea");
  const newText = document.createElement("p");
  const content = document.querySelector(".text");
  newText.innerText = textarea.value;
  content.append(newText);
  counter();
  clear();
}
