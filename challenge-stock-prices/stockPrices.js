// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

const best = (stocks) => {
    let best = 0;
    for(let i = 0; i < stocks.length; i++){
        for(let j = i + 1; j < stocks.length; j++){
            if(stocks[i] < stocks[j] && stocks[j] - stocks[i] > best){
                    best = stocks[j] - stocks[i];
                }
            }
        }
        return best;
}


console.log(best([15, 10, 20, 22, 1, 9]));

console.log(best([2, 3, 10, 6, 4, 8, 1]));
console.log(best([7, 9, 5, 6, 3, 2]));
console.log(best([0, 100]));
console.log(best([5, 4 , 3, 2, 1]))
console.log(best([100]))



