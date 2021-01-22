// ------------ EJERCICIO 1 ------------
// hacer una funcion que sume dos parametros
function sum (a, b) {
  return a + b;
}

// ------------ EJERCICIO 2 ------------
// hacer una funcion que reste dos parametros


function subs (a,b) {
  return a - b ;
}

// ------------ EJERCICIO 3 ------------
// hacer una funcion que me indique si soy mayor de edad o no


function mayorDeEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  }
  return "Menor de edad";
}

// ------------ EJERCICIO 4 ------------
// hacer una funcion que evalue si el numero es 0, positivo o negativo

function evaluate(num) {
  if (num === 0) {
    return "Cero"
  } else if  (num > 0){
    return "Positivo"
  }
  return "Negativo"
}

// ------------ EJERCICIO 5 ------------
//         hacer una funcion que retorne si es vocal o consonante

function letter (letra ){
  letra = letra.toLowerCase ();
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ==='u')
    return "Vocal"
}

// return "consonante"


// ------------ EJERCICIO 6 ------------
//         hacer una funcion que retorne si es vocal o consonante

  function game (player1, player2){

    console.log("Primer Jugador " + player1);
    console.log("Segundo Jugador " + player2);

    if ((player1==='papel1'&& player2 ==='piedra') ||(player1 === 'tijera' && player2==='papel') || (player1 === 'piedra' && player2 === 'tijera')){

      return('Jugador 1 Ganó')
    }
    else if ((player2==='papel'&& player1==='piedra')||(player2==='tijera'&& player1==='papel1')||(player2==='piedra'&&player1)){
      return('Jugador 2 Ganó')

    }
    else if(player1 === player1 ){
        return('En empate')}
    }
  

  console.log(game('tijera', 'papel'));
  console.log(game('piedra','papel'));
  console.log(game('papel','tijera'));

  
