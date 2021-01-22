/*var preguntaNumero = promt('Ingresa un número');

var numeroVerdadero = Number(preguntaNumero);

if (numeroVerdadero % 2 === 0) {
    console.log (numeroVerdadero + ': Tu número es par!')
} else if (numeroVerdadero % 2 === 1){
    console.log(numeroVerdadero + ': es impar')
} else {
    console.error('No es un numero')
}
*/
var num = prompt ("Escribe un numero cualquiera");

num = Number(num)

if (isNaN(num)) {
    console.error('Esto no es un número. Favor de escribir un número');
} else {
    if (num%2 === 0){
        console.log('Tu numero es par.')
    }  else {
    console.log("Tu numero es impar.")
}
}
