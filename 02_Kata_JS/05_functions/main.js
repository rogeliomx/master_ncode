var nombre = prompt ("Ingresa tu nombre");
var apellido = prompt ("Ingresa tu apellido")

function saludar (name, lastName){
    if (typeof name !== 'string' || typeof lastName!== 'string'){
        return('Tienes que ingresar nombre(s) y/o Apellido(s) correctos')}
  else {
    return console.log('Hola', name + ' ' + lastName) }
  }
  console.log (saludar (nombre, apellido ))

// console.log (saludar('Rogelio','Galindo'))