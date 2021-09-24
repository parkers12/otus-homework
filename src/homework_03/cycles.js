export function getSum(start, finish) {
  let sum = 0;
  for (let i = start; i <= finish; i += 1) {
    sum += i;
  }
  console.log(sum);
}

export function getMultiplicationTable(value) {
  for (let i = 1; i <= 9; i += 1) {
    console.log(`${value} x ${i} = ${value * i}`);
  }
}

export function getAverage() {
  const digit = Number(prompt("Введите число:"));
  let sum = 0;
  let counter = 0;
  for (let i = 1; i <= digit; i += 2) {
    sum += i;
    counter += 1;
  }
  console.log(sum / counter);
}
