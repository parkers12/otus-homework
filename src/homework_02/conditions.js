export function getLarger(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

export function getMonth() {
  const digit = +prompt("Введите число от 1 до 12:");
  if (digit > 0 && digit < 13) {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    console.log(months[digit - 1]);
  } else {
    console.log(0);
  }
}

export function getCompare(circle, square) {
  if (Math.sqrt((4 * circle) / 3.14) < Math.sqrt(square)) {
    console.log("Поместится");
  } else {
    console.log("Не поместится");
  }
}
