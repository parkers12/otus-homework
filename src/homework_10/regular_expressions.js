export function isDate() {
  const date = prompt("Введите дату в формате DD/MM/YYYY");
  const reg = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  if (date.match(reg)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

export function isEmail() {
  const email = prompt("Введите Email:");
  const reg =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (email.match(reg)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

export function isPhone() {
  const phone = prompt("Введите телефон:");
  const reg = /(?:\+|\d)[\d\-() ]{9,}\d/;
  if (phone.match(reg)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
