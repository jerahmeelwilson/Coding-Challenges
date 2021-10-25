const hasMoreVowels = word => word.match(/[aieouAIEOU]/g).length > word.match(/[^aieouAIEOU]/g).length

console.log(hasMoreVowels("moose"));
console.log(hasMoreVowels("mice"));
console.log(hasMoreVowels("graph"));
console.log(hasMoreVowels("yay"));
console.log(hasMoreVowels("Aal"));