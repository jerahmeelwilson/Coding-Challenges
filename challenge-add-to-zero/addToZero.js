// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
          // i = 0, j = 0;   0 = 28, 0 = 28,
          // i = 0, j = i+1  0 = 28, j=1 = 43;
          
          
// Write your solution below:

function addToZero(array){
    for(let i = 0; i<array.length; i++){
        for(let j = i+1; j<array.length;j++){
            if(array[i] + array[j] === 0){
                return true;
            }
        }
    }
    return false;
}

function addToZero1(array){
    for(let i = 0; i<array.length; i++){
        if(array.slice(i+1).indexOf(-1*array[i])!== -1){
            return true;
        }
    }
    return false;
}



console.log(addToZero([28, 43, -12, 30, 4, 0, 12]));
console.log(addToZero1([1, 4, 11, 2, 37, -4]));

console.log(addToZero([0, 21, 33, 6, 0, -9]));
console.log(addToZero1([0, 21, 33, 6, 0, -9]));

console.log(addToZero([0, 1, 2, 3, 4, 5]));
console.log(addToZero1([0, 1, 2, 3, 4, 5]));


