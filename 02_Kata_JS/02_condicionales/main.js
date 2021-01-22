//van a preguntar al usuario un numero y vana poner en la consola
// el numero y si es par o impar
//1: impar
//2: par

var num = prompt ("Escribe un número cualquiera"); //siempre que se introduzca  por promt. será tipo string
num = Number (num);

if (num = "string" ) {
    console.error(' Esto no es un número. Favor de escribir un número');
}
    else {
        if (num%2 ====0 ){
            console.log('tu numero es par')
        } 
            else{
                console.log("Tu número es impar")
        }
    }