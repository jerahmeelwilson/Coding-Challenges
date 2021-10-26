// Write your solution below:

function pigLatin(sentence) {
  let words = sentence.split(" ")
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === "a" || words[i][0] === "e" || words[i][0] === "i" || words[i][0] === "o" || words[i][0] === "u") {
      words[i] += "yay"
    } else {
      words[i] += words[i][0]
      words[i] += "ay"
      words[i] = words[i].substring(1)
    }
  }
  console.log(words.join(" "))
}
pigLatin("porcupines are cute");
pigLatin("give me an apple");