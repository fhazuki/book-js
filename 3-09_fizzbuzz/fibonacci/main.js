function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  var number = 10; 
  for (var i = 0; i <= number; i++) {
    console.log(fibonacci(i));
  }
  
//   function fibonacci2(n) {
//     // n = 1 のとき、入力値 n をそのまま返す
//     if ( n === 1 ) {
//         return n;
//     } else {
//     return fibonacci2( n - 1) + fibonacci2( n - 2 )

//     console.log("fibonacci2");
//     let i = 0
//     while ( i < 11 ) {
//             console.log(fibonacci2(i))
//         i = i + 1;
//     }
//   }
// }