//In DNA strings, symbols “A” and “T” are complements of each other, as are “C” and “G”.

function dnaStrand(dna) {
  let dnaStrand = [...dna].map((symbol) => {
    if (symbol === "A") {
      return "T";
    } else if (symbol === "T") {
      return "A";
    } else if (symbol === "C") {
      return "G";
    } else if (symbol === "G") {
      return "C";
    }
  });
  return dnaStrand.join("");
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
