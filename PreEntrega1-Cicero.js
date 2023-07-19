/*2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".*/

let numeroTelefono = prompt('Ingrese su numero de telefono:')


let acc = 0

for (let i = 0; i < numeroTelefono.length; i++){
    acc = acc + 1
}

if (acc === 10){
    alert('Su telefono ingresado es valido')
} else{
    alert('Su telefono ingresado es invalido')
}

