function outlier (arr){
    let evens = arr.filter(element => element% 2 === 0);
    let odds = arr.filter(element => !(element % 2 === 0));

    if(evens.length < odds.length){
        return evens;
    } else if(odds.length < evens.length){
        return odds;
    }
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));

