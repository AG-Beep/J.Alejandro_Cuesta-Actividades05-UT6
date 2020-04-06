'use strict;'

function movil() 
{

let numero =(prompt("Introduce un numero de teléfono"))

let patron = /[0-9]{9}/

if(patron.test(numero))

alert("El numero de telefono es valido")

else

alert("El numero de telefono no es valido")


}
movil()



