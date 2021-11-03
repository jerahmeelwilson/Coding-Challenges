// missngNumber(array, maxNum)
// array will be a list of number that are in order or random order and to up to maxNum, 1,2,3,4,5
// create new array, this array will go in order stating at 1 to max num 
// to find the missing number, compare every number in our new array to the number in the given array, and we every do not find the number in our new array compared to given array will return number.

const missingNumber = (array, maxNum) => {
    for(let i=1; i<=maxNum;i++){
        if(!array.includes(i)){
            return i;
        }
    }
}

//console.log(missingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10],10));
//console.log(missingNumber([2, 1, 4, 3, 6, 5, 7, 10, 9],10));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10] ,10));