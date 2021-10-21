// Write your code below

function charMatch(char, word){
    const regex = new RegExp(char,"g");
    return word.match(regex).length;
}

function hasUniqueChars(word){
    for(let i = 0; i < word.length;i++){
        if(charMatch(word[i],word) > 1){
            return false;
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Bob"));
console.log(hasUniqueChars("Road"));
console.log(hasUniqueChars("Roada"));
console.log(hasUniqueChars("Jerahmeel"));