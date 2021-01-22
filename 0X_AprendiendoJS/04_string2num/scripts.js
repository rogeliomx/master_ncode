// // ––––––––CONVERTIR DE STRING  A NUMERO:–––––––––––––



// let numero1 = 50,
//     numero2 = "10",
//     numero3 = "tres";
//     numero4 = "20.20";

// console.log(numero1 + numero2);
// // Se usa una funcion llamada NUMBER para cambiar del string a number 
// console.log( Number(numero2) + numero1 );
// //Existe otra funcion que se llama PARSE IN que es ideal para número senteros
// console.log( parseInt(numero4) + numero1)
// //Existe otra fúncion que se llama PARSEFLOAT es para trabajar con números décimales
// console.log( parseFloat(numero4) + numero1)

// console.log(numero1 - numero2);


// ––––––––CONVERTIR DE STRING  A NUMERO:–––––––––––––

// let numero1 = 50,
//     numero2 = "10",
//     numero3 = "tres";
//     numero4 = "20.20";



// let dato ;
// dato = Number("20");
// dato = Number("-20.20");
// dato = Number(true);
// dato = Number(null);
// dato = Number("Hola mundo");
// dato = Number([1,2,3,4]);

//parseInt y parseFloar Puede converir decimales
dato = parseInt("100");
dato = parseInt("100.20");
dato = parseFloat("100.20");
dato = parseFloat("100");

//TO FIXED te perminte cortar cierta catidad de los decimales solamente puede ser apicado en números
let numero1 ="2345432.34567656";
let numero2 = 7875896.49504983; 
console.log(Number(numero1).toFixed(6));

console.log(dato);