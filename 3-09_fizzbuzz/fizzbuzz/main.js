function fizzbuzz (num) {
    if (num /3 === 0 && num / 5 === 0){
        window.alert('FIZZBUZZ!');
    } else if (num / 3 === 0) {
        window.alert('FIZZ!')
    } else if (num / 5 === 0) {
        window.alert('BUZZ!')
    }
}

fizzbuzz(15);