function decoder(code){
    let word = "";
    for(let i = 0; i<code.length;i++){
       if(Number(code[i]) || code[i] == 0){
         word += code[Number(code[i])+i+1];
       }
    }
    return word;
}

console.log(decoder("0h2xce5ngbrdy"));
console.log(decoder("3vdfn"));
console.log(decoder("2bna0p1mp2osl0e"));
console.log(decoder("0r"));
console.log(decoder("0y4akjfe0s"));

