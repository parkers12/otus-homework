export function getWeek() {
  const date = prompt("Введите дату в фомате дд.мм.гггг:");
  const [day, month, year] = date.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);
  const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  console.log(days[inputDate.getDay() - 1]);
}

export function getMins() {
  const dateNow = new Date();
  const hours = dateNow.getHours();
  const minutes = dateNow.getMinutes();
  console.log(hours * 60 + minutes);
}

function getDestr(value) {
  const [day, month, year] = value.split(".");
  return new Date(`${year}-${month}-${day}`);
}

export function getYounger(user1, user2) {
  const userFormDate1 = getDestr(user1);
  const userFormDate2 = getDestr(user2);
  if (userFormDate1 > userFormDate2) {
    console.log("User1 моложе");
  } else {
    console.log("User2 моложе");
  }
}
