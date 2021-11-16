function perfectSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    return Math.pow(Math.sqrt(num) + 1, 2);
  } else {
    return -1;
  }
}

console.log(perfectSquare(9));
console.log(perfectSquare(289));
console.log(perfectSquare(3000));
