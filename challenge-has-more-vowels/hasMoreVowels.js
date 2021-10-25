const hasMoreVowels = word => word.toLowerCase().match(/[aieou]/g).length > word.toLowerCase().match(/[^aieou]/g).length

console.log(hasMoreVowels("moose"));
console.log(hasMoreVowels("mice"));
console.log(hasMoreVowels("graph"));
console.log(hasMoreVowels("yay"));
console.log(hasMoreVowels("Aal"));