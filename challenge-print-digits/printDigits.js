function printDigits(num) {
   
    while( num >= 10){
        digit = num % 10;
        console.log(digit);
        num = Math.floor(num / 10);
    }
    console.log(num);
}

//printDigits(314);
printDigits(1);
//printDigits(12);

