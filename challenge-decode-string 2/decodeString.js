// Write your code below this line
//console.log(String.fromCharCode(("ABC".charCodeAt(0)+3)));

function decodeString(cipher){
    let move = +cipher[0];
    let decoded = "";
    for(let i = 1; i<cipher.length; i++){
        if(cipher.charCodeAt(i) + move > 122){
           let wrap = 122 - (cipher.charCodeAt(i) + move)
           decoded += String.fromCharCode(96 + wrap*-1)
        } else{
            decoded += String.fromCharCode(cipher.charCodeAt(i) + move)
        }
    }
    return decoded;
}

console.log(decodeString("1a"));
console.log(decodeString("3ce"));
console.log(decodeString("2fcjjm"));
console.log(decodeString("2y"));
