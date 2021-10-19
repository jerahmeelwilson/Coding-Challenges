// Write your code below this line.

function randomNum(){
    return Math.floor(Math.random() * 10);
}

function luckyNumbers(n){
    let luckyNums = [];

    //generate random number 1 - n
    //if number is not in luckyNums add to array.
    //rerun n times
    luckyNums.push(randomNum());
    let count = 1;
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
