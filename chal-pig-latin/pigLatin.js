// Write your solution below:

function pigLatin(phrase){
    let phraseArray = phrase.split(" ");
    let newPhrase = "";
    phraseArray.forEach(element => {
        if(element[0].match(/[^aieou]/g) != null){
            newPhrase += element.slice(1) + element[0] +"ay ";
        } else{
            newPhrase += element + "yay "
        }
    });
    return newPhrase;
}

console.log(pigLatin("porcupines are cute"));
console.log(pigLatin("give me an apple"));

