let numbers = [1, 4, 11, 2, 37, -4];

let smallest = 0;
let largest = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]<smallest){
        smallest = numbers[i];
    }
    if(numbers[i]>largest){
        largest = numbers[i];
    }
}

console.log(smallest,largest);