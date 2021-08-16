export function getArrSum(arr) {
  console.log(arr.reduce((a, b) => a + b));
}

// getArrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

export function getNewArr(arr) {
  let newArr = [];
  newArr = arr.map((el) => el * 2);
  console.log(newArr);
}

export function getArrMinMax(arr) {
  let min = 0;
  let max = 0;
  arr.forEach((el, i) => {
    if (min > el || i === 0) {
      min = el;
    }
    if (max < el) {
      max = el;
    }
  });
  console.log(min, max);
}

// getArrMinMax([23, 36, 12, 58, 18, 6, 72, 52, 39, 92]);
