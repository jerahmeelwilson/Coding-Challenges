//1141 + 1141 * 0.02 + 50 => 1213
//p0 + (p0 * (percent/100)) + aug = p

function nbYear(p0, percent, aug, p) {
  let yearCount = 0;
  while (p0 <= p) {
    p0 += p0 * (percent / 100) + aug;
    yearCount++;
  }
  return yearCount;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
