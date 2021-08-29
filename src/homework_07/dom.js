const listBlock = document.createElement("div");
document.body.appendChild(listBlock).setAttribute("class", "text");
const content = document.querySelector(".text");

const array = [
  "Типология средств массовой коммуникации, особенно в условиях " +
    "политической нестабильности, символизирует политический процесс " +
    "в современной России. Управление политическими конфликтами фактически " +
    "обретает плюралистический гуманизм. Политическое учение " +
    "Н. Макиавелли, несмотря на внешние воздействия, теоретически " +
    "символизирует плюралистический феномен толпы. Разновидность " +
    "тоталитаризма неизбежна.",
  "Феномен толпы, однако, обретает доиндустриальный тип политической " +
    "культуры. Разновидность тоталитаризма традиционно отражает субъект " +
    "политического процесса. Понятие политического конфликта, как правило, " +
    "теоретически ограничивает конструктивный референдум. Технология " +
    "коммуникации очевидна не для всех. Тоталитарный тип политической " +
    "культуры традиционен.",
  "Конституционная демократия, согласно традиционным представлениям, " +
    "приводит плюралистический постиндустриализм. Политическая система, " +
    "особенно в условиях политической нестабильности, представляет собой " +
    "элемент политического процесса (отметим, что это особенно важно для " +
    "гармонизации политических интересов и интеграции общества). " +
    "Либеральная теория ограничивает современный тоталитарный тип " +
    "политической культуры (терминология М.Фуко).",
];
const paragraf = [];
for (let i = 0; i < 3; i += 1) {
  paragraf[i] = document.createElement("p");
  paragraf[i].innerHTML = array[i];
  content.appendChild(paragraf[i]);
}

const formBlock = document.createElement("div");
document.body.appendChild(formBlock).setAttribute("class", "form");
const form = document.querySelector(".form");
const field = document.createElement("textarea");
form.appendChild(field);
field.setAttribute("id", "textarea");
const textarea = document.getElementById("textarea");

const elem = document.createElement("button");
elem.innerHTML = "кнопка";
elem.setAttribute("id", "button");
document.body.appendChild(elem);
const button = document.getElementById("button");

function handleChange() {
  button.disabled = !textarea.value;
}
handleChange();

function counter() {
  const count = document.querySelectorAll(".text p");
  if (count.length > 5) {
    const del = document.querySelector(".text p");
    del.remove();
  }
}

function clear() {
  textarea.value = "";
  handleChange();
}

function handleClick() {
  const newText = document.createElement("p");
  newText.innerText = textarea.value;
  content.append(newText);
  counter();
  clear();
}

button.addEventListener("click", handleClick);
textarea.addEventListener("input", handleChange);
