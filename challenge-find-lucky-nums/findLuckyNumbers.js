// Write your code below this line.

function randomNum(){
    return Math.floor((Math.random() * 10)+1);
}

function luckyNumbers(n){
    let luckyNums = [];

    //generate random number 1 - 10
    //if number is not in luckyNums add to array.
    //rerun n times
    let count = 0;
    while(count!=n){
        let newRandomNum = randomNum();
        if(luckyNums.includes(newRandomNum)===false){
            luckyNums.push(newRandomNum)
            count++;
        }
    }
    return luckyNums;
}

console.log(luckyNumbers(10));
