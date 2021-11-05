
//ssmllmlsmlmmmmmssslll
// function tshirtSorter(str){
// let sorted = ""
//      for(let i = 0; i<str.length; i++){
//         if(str[i] === 's'){
//             sorted += str[i];
//         }
//      }
//      for(let i = 0; i<str.length; i++){
//         if(str[i] === 'm'){
//             sorted += str[i];
//         }
//      }
//      for(let i = 0; i<str.length; i++){
//         if(str[i] === 'l'){
//             sorted += str[i];
//         }
//      }
//     return sorted;
// }


function tshirtSorter(str){
    let small = ""
    let medium = ""
    let large = ""
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large       
}


console.log(tshirtSorter('lms'));

console.log(tshirtSorter('smllms'));

console.log(tshirtSorter('slsmmsllsmsmlmsls'));