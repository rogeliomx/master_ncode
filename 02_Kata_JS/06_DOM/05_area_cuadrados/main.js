function valores (){
    num = Number (prompt('Qué valor quieres saber 1. area de cuadrado 2. area rectangulo 3. Area triangulo'))
    switch (num) {
        case 1:
         c = Number (prompt('Ingresa el valor cuadrado'))
         resultado= Math.pow(c,2)
         imprimir (resultado)

            break;

        case 2:
            a = Number (prompt('Ingresa el valor base del rectágulo '))
            b= Number (prompt('Ingresa el valor de la altura del rectángulo'))
            resultado = a*b
            imprimir (resultado)

            break;

        case 3:

            d = Number (promt('Ingresa el valor base del triángulo'))
            e = Number (promt ('ingresa el valor de la altura del triángulo'))
            resultado = (d*e)/2
            imprimir (resultado)

            break;

          default:
              break;  
    }

}