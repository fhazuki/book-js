function fizzbuzz (num) {
    if (num % 3 === 0 && num % 5 === 0){
        return 'FIZZBUZZ!';
    } else if (num % 3 === 0) {
        return 'FIZZ!';
    } else if (num % 5 === 0) {
        return 'BUZZ!';
    } else {
        return num;
    }
}

let i = 1;
while(i <= 30) {
    console.log(fizzbuzz(i));
    i += 1;
}

fizzbuzz(15);