export function calculate(a, b) {
  console.log(a + b, a * b);
}

export function getLenghtTwoString(a, b) {
  console.log(String(a).length + String(b).length);
}

export function getLengthString() {
  const digit = prompt("Введите трехзначное число:");
  if (digit.length === 3) {
    let sum = 0;
    for (let i = 0; i < digit.length; i += 1) {
      sum += Number(digit.slice(i, i + 1));
    }
    console.log(sum);
  } else {
    console.log(0);
  }
}
