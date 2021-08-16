export function getDiff(a, b) {
  if (a >= b) {
    console.log(a - b);
  } else {
    console.log(b - a);
  }
}

export function isWord(string) {
  const sep = string.split(" ");
  if (sep.length > 1) {
    return false;
  }
  return true;
}

export function isPow(a, x) {
  return a ** x;
}
