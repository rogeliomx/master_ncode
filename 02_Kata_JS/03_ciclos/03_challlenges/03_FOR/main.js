
//inicio | limite | secuencia
// 10 | 1000 | 250
// 0  | -500 | -10
//  1000 | 0 | 50

/*  for (var i = 0; i <1000; i = i + 1){
    console.log (i)
}   */

/*  for ( i = -500; i <- 0; i = i - 10){
    console.log (i)
}   */
 
/* for ( i = 0; i < 1000; i = i + 50){
    console.log (i)
} */

// ------> Fizz Buzz <------
//  recorrer de 1 -> 100
// si el numero es divisible entre 3 --> numero + 'fizz'
// si el numero es divisible entre 5  --> numero + 'buzz'
// si el numero es divisible entre 3 y 5  --> numero + 'fizzbuzz'

for ( var i = 1; i <= 100; i+=1){
    if (i%3 === 0 && i%5 === 0){
        console.log ( i + " fizzbuzz");
    }  else if (i % 3 === 0 ) { 
        console.log (i+" fizz");
    } else if ( i%5 === 0) { 
        console.log (i+" buzz");
    } else {
        console.log (i);
    }
} 


