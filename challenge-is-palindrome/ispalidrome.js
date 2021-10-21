
const isPalindrome = (word) => [...word.replace(/[^a-zA-Z]/g, "")].reverse().join("") === word.replace(/[^a-zA-Z]/g, "");

console.log(isPalindrome("a"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("race car!"));

