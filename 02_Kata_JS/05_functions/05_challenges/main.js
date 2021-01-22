
// / Ejercicio 1
// hacer una funcion que sume dos parametros

var calle = prompt ("Ingresa la calle de tu domicilio");
var colonia = prompt ("Ingresa la colonia en la que vives")

function direccion (calle, colonia){
    if (typeof calle !== 'string' || typeof colonia!== 'string'){
        return('Tienes que ingresar tu calle y colonia correct@s')}
  else {
    return console.log('Vives en la calle: ', calle + ' ' + 'y en la colonia: ' + colonia) }
  }
  console.log (direccion(calle, colonia ))

// console.log (saludar('Rogelio','Galindo'))


// // Ejercicio 2
// hacer una funcion que reste dos parametros


function restar(number1, number2){
  if(typeof Number){
  }
    var resta =number1 - number2
    return ('El número de calle en la que estás es ' +'.'+ number1 + ''  + 'El número de calle en la que quieres estar es' + number2);  
   }
   var number1 = prompt ("Ingresa el numero de calle en la que estas");
   var number2 = prompt ("Ingresa el numero de calle en la quieres estar");

  //  var number1 = 50;
  //  var number2 = 30;

   console.log(restar(number1, number2))


// // Ejercicio 3
// hacer una funcion que me indique si soy mayor de edad o no


