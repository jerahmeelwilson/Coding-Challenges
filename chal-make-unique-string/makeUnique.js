// Write your solution below:
function makeUnique(str){
    let uniqueStr = "";
    for(let i = 0; i<str.length;i++){
        if(!uniqueStr.includes(str[i])){
            uniqueStr += str[i];
        }
    }
    return uniqueStr
}

const makeUnique2 = str => [...new Set([...str])].join("");



 console.log(makeUnique2('helloworld'));
 console.log(makeUnique2('iwanttoclimbamountain'));