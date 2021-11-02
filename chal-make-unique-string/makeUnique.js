// Write your solution below:
function makeUnique2(str){
    let uniqueStr = "";
    for(let i = 0; i<str.length;i++){
        if(!uniqueStr.includes(str[i])){
            uniqueStr += str[i];
        }
    }
    return uniqueStr
}

const makeUnique = str => [...new Set([...str])].join("");



 console.log(makeUnique('helloworld'));
 console.log(makeUnique('iwanttoclimbamountain'));